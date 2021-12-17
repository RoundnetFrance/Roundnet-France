import { useState } from 'react';
import handleFormSubmit from '../../helpers/handle-form-submit';

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
  // Handle loading
  const [loading, setLoading] = useState(false);

  // Handle submit status
  const [submitStatus, setSubmitStatus] = useState({
    open: false,
    success: false,
    message: '',
    error: false,
  });


  // Handle submission (through handleFormSubmit helper function)
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(
      setLoading,
      setErrors,
      setForm,
      setSubmitStatus,
      form
    );
  }

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
  )
}

export default ContactForm
