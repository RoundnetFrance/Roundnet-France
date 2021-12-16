import { useState } from 'react';

// MUI IMPORTS
import {
  Container, TextField, Typography, Button, CircularProgress, Box, Snackbar, Alert, Slide,
} from '@mui/material';

// OWN IMPORTS
import FormWrapper from '../ui/form-wrapper';

// FUNCTIONAL COMPONENT
function ContactForm() {

  // Handle controlled inputs
  const initialFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  const [form, setForm] = useState(initialFormState);
  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  // Handle errors
  const [errors, setErrors] = useState(initialFormState);
  console.log(errors);

  // Handle loading
  const [loading, setLoading] = useState(false);

  // Handle submit status
  const [submitStatus, setSubmitStatus] = useState({
    open: false,
    success: false,
    message: '',
    error: false,
  });


  // Handle submission
  const handleSubmit = (event) => {
    // Prevent form from submitting
    event.preventDefault();

    // Set loading to true
    setLoading((prevLoading) => !prevLoading);

    // Validate form
    const validateInputs = (form) => {
      const errors = {
        name: '',
        email: '',
        subject: '',
        message: '',
      };

      // Check if empty
      if (!form.name || form.name.trim() === '') errors.name = 'Le nom est requis';
      if (!form.email || form.email.trim() === '') errors.email = 'L\'email est requis';
      if (!form.subject || form.subject.trim() === '') errors.subject = 'L\'objet est requis';
      if (!form.message || form.message.trim() === '') errors.message = 'Le message est requis';

      // Check if email is valid by Regex
      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      if (!validateEmail(form.email)) errors.email = 'L\'email n\'est pas valide';

      // Return errors
      return errors;
    };

    // Check if all errors are empty strings
    const validationErrors = validateInputs(form);
    const isValid = Object.values(validationErrors).every((error) => error === '');
    if (!isValid) {
      setErrors(validationErrors);
      setLoading((prevLoading) => !prevLoading);
      return;
    }

    // If ok, proceed to send email
    const data = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    }
    const sendMail = async (messageData) => {
      try {
        const response = await fetch('/api/send-mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(messageData),
        });

        // If response is not OK, throw error
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        // Else, send success message
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
        console.log(error);
        setSubmitStatus({
          open: true,
          error: true,
          message: 'Une erreur est survenue lors de l\'envoi du mail. Merci de réessayer',
        }
        );
      }
      // FINALLY
      finally {
        setLoading(false);
      }
    }
    sendMail(data);
  };

  // Handle close of snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    // Reset submit status
    setSubmitStatus((prevSubmitStatus) => ({
      ...prevSubmitStatus,
      open: false,
    }));
  };

  return (
    <Container maxWidth="lg">
      <FormWrapper title="Contactez Roundnet France" size="sm" onSubmit={handleSubmit}>
        <Typography>Une question à nous poser, une demande spécifique ? N&apos;hésitez pas à contacter Roundnet France, si vous souhaitez trouver de nouveaux joueurs, rejoindre une ligue en France, importer le Roundnet dans votre école, organiser un tournoi... </Typography>

        <TextField id="name" label="Nom & Prénom" variant="outlined" value={form.name} onChange={handleChange} error={errors.name !== ""} helperText={errors.name} required />
        <TextField id="email" label="Email" variant="outlined" value={form.email} onChange={handleChange} error={errors.email !== ""} helperText={errors.email} required />
        <TextField id="subject" label="Objet" variant="outlined" value={form.subject} onChange={handleChange} error={errors.subject !== ""} helperText={errors.subject} required />
        <TextField id="message" label="Message" variant="outlined" multiline rows={4} value={form.message} error={errors.message !== ""} helperText={errors.message} onChange={handleChange} required />

        <Typography variant="body2" >
          * Champs obligatoires
        </Typography>
        <Button variant="contained" color="primary" type="submit">
          {loading ? (<Box sx={{ display: 'flex' }}>
            <CircularProgress color="inherit" size={30} />
          </Box>) : 'Envoyer'}

        </Button>

        {/* SNACKBAR */}
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }
          }
          open={submitStatus.open}
          autoHideDuration={5000}
          onClose={handleSnackbarClose}
          TransitionComponent={Slide}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={submitStatus.success ? 'success' : 'error'} sx={{ width: '100%' }}>
            {submitStatus.message}
          </Alert>
        </Snackbar >

      </FormWrapper>
    </Container>
  )
}

export default ContactForm
