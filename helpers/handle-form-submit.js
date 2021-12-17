// Trim inputs function
const trimInputs = (form) => {
  const trimmedForm = {};
  Object.keys(form).forEach((key) => {
    trimmedForm[key] = form[key].trim();
  });
  return trimmedForm;
};

// Get initial form state
const getInitialFormState = (form) => {
  const initialFormState = {};
  Object.keys(form).forEach((key) => {
    initialFormState[key] = '';
  });
  return initialFormState;
};

// Specific email validation by Regex function
import validateEmail from "./validate-email";

// Validation inputs function
const validateInputs = (formData, initialFormState) => {
  const errors = initialFormState;

  // For each formData input, check if empty
  Object.keys(formData).forEach((key) => {
    if (!formData[key] || formData[key] === '') {
      errors[key] = 'Ce champ est requis';
    }
  });

  // If formData input is an email, check if valid by Regex
  let emailValid;
  if (formData.email) {
    emailValid = validateEmail(formData.email);
    if (!emailValid) {
      errors.email = 'L\'email n\'est pas valide';
    }
  }
  
  // Return errors
  return errors;
};

// Send mail through SendGrid function
const sendMail = async (formData, initialFormState, setSubmitStatus, setForm, setErrors, setLoading) => {
  try {
    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // If response is not OK, throw error
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // If everything is ok, return status of submission and reset form and errors
    const data = await response.json();
    setSubmitStatus({
      open: true,
      success: true,
      message: data.message,
    });
    setForm(initialFormState);
    setErrors(initialFormState);
  }
  // CATCH
  catch (error) {
    // Console log and set error message for UI
    console.log(error);
    setSubmitStatus({
      open: true,
      error: true,
      message: 'Une erreur est survenue lors de l\'envoi du mail. Merci de réessayer',
    }
    );
  }
  // In any case, set loading to false
  finally {
    setLoading(false);
  }
}

export default async function handleFormSubmit(
  setLoading,
  setErrors,
  setForm,
  setSubmitStatus,
  form
) {
  // Set loading to true
  setLoading((prevLoading) => !prevLoading);

  // Get initial form state
  const initialFormState = getInitialFormState(form);
  // Trim inputs if need be
  const formData = trimInputs(form);

  // Check if all errors are empty strings
  const validationErrors = validateInputs(form, initialFormState);
  const isValid = Object.values(validationErrors).every((error) => error === '');
  if (!isValid) {
    setErrors(validationErrors);
    setLoading((prevLoading) => !prevLoading);
    return;
  }

  // If ok, proceed to send API request to send mail (with set[...] functions)
  sendMail(formData, initialFormState, setSubmitStatus, setForm, setErrors, setLoading);
}