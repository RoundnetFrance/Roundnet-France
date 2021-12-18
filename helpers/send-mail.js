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

    //! Add Validation

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

export default sendMail;