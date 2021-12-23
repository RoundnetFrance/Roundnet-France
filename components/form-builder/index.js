import { useState } from 'react';
import handleFormSubmit from '../../helpers/handle-form-submit';

// MUI IMPORTS
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';

// COMPONENT IMPORTS
import BoxWrapper from '../ui/box-wrapper';
import PasswordInput from '../ui/password-input';
import FormField from './form-field';

export default function FormBuilder({ formConfig }) {
  // Get form Config values
  const {
    name,
    fields,
    descriptionBefore,
    descriptionAfter,
    endpoint,
  } = formConfig;

  // Create an object from formFields where each id is an empty string
  const initialFormState = fields.map(field => field.id).reduce((acc, curr) => ({
    ...acc,
    [curr]: '',
  }), {});

  // Handle state and state change onChange

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
    const requiredFields = ['name', 'email', 'password', 'passwordConfirm'];
    handleFormSubmit(
      setLoading,
      setErrors,
      setForm,
      setSubmitStatus,
      form,
      errors,
      endpoint,
      requiredFields,
    );
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

  // RETURN JSX
  return (
    <BoxWrapper title={name} onSubmit={handleSubmit}>
      <Typography>{descriptionBefore}</Typography>

      <Divider />

      {fields.map(field => (
        <FormField
          key={field.id}
          {...field}
          value={form[field.id]}
          error={errors[field.id]}
          handleChange={handleChange}
        />
      ))}

      {/* <TextField id="name" label="Nom & Prénom" variant="outlined" value={form.name} onChange={handleChange} error={errors.name !== ""} helperText={errors.name} required />
      <TextField id="email" label="Email" variant="outlined" value={form.email} onChange={handleChange} error={errors.email !== ""} helperText={errors.email} required />

      <PasswordInput label="Mot de passe" value={form.password} name="password" handleChange={handleChange} error={errors.password !== ''} helperText={errors.password} />
      <PasswordInput label="Confirmation du mot de passe" value={form.passwordConfirm} name="passwordConfirm" handleChange={handleChange} error={errors.passwordConfirm !== ''} helperText={errors.passwordConfirm} confirm /> */}

      <Typography variant="body2" >
        * Champs obligatoires
      </Typography>
      <Button variant="contained" color="primary" type="submit">
        {loading ? (<Box sx={{ display: 'flex' }}>
          <CircularProgress color="inherit" size={30} />
        </Box>) : 'Envoyer'}
      </Button>
      <Typography variant="body2" >
        {descriptionAfter}
      </Typography>

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
      </Snackbar>
    </BoxWrapper>
  )
}
