// Trim inputs function
const trimInputs = (form) => {
  const trimmedForm = {};
  Object.keys(form).forEach((key) => {
    // If password or passwordConfirm, do not trim
    if (key === 'password' || key === 'passwordConfirm') {
      trimmedForm[key] = form[key];
    }
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

  // If formData input is a password, check if valid by length and if it matches passwordConfirm
  let passwordValid;
  if (formData.password) {
    // Check if password is valid by length
    passwordValid = formData.password.length >= 6;
    if (!passwordValid) {
      errors.password = 'Le mot de passe n\'est pas valide. Il doit faire plus de 6 caractères.';
    }

    // Check if it matches password
    if (formData.password !== formData.passwordConfirm) {
      errors.passwordConfirm = 'Les mots de passe ne correspondent pas';
    }

  }


  // Return errors
  return errors;
};

// Send mail through SendGrid function
import sendMail from "./send-mail";

// throwError function for invalid inputs
function InvalidFormInput({ message, input }) {
  this.message = message;
  this.input = input;
  this.invalidFormInput = true;
}

export default async function handleFormSubmit(
  setLoading,
  setErrors,
  setForm,
  setSubmitStatus,
  form,
  errors,
  url,
) {
  // Set loading to true
  setLoading((prevLoading) => !prevLoading);

  // Get initial form state
  const initialFormState = getInitialFormState(form);
  // Trim inputs if need be
  const formData = trimInputs(form);
  console.log(formData);

  // Check if all errors are empty strings
  const validationErrors = validateInputs(form, initialFormState);
  const isValid = Object.values(validationErrors).every((error) => error === '');
  if (!isValid) {
    setErrors(validationErrors);
    setLoading((prevLoading) => !prevLoading);
    return;
  }

  // If ok, proceed to send API request (mail or API call)
  // If mail, send mail through SendGrid function
  if (url === 'mail') {
    await sendMail(formData, initialFormState, setSubmitStatus, setForm, setErrors, setLoading);
    return;
  }

  // If API call, send API request through fetch function
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    // If response is not OK, throw error
    if (!response.ok) {
      // In specific case of invalid input data
      if (response.status === 422) throw new InvalidFormInput(data);
      
      throw new Error(data.message || response.statusText);
    }

    // If everything is ok, return status of submission and reset form and errors
    setSubmitStatus({
      open: true,
      success: true,
      message: data.message,
    });
    setForm(initialFormState);
    setErrors(initialFormState);
    // End of try
  }

  // Catch if errors
  catch (error) {
    // Console log and set error message for UI
    console.error(error);

    // If error is an InvalidFormInput, set specific error message
    if (error.invalidFormInput) {
      setErrors({
        ...errors,
        [error.input]: error.message,
      });
      return;
    }

    setSubmitStatus({
      open: true,
      error: true,
      message: error.message || 'Une erreur est survenue. Merci de réessayer.',
    });
  } finally {
    setLoading(false);
  }
}