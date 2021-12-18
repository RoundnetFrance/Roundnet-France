import { useState } from 'react';
import handleFormSubmit from '../../helpers/handle-form-submit';

// MUI IMPORTS
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Divider from '@mui/material/Divider';

// COMPONENT IMPORT
import Link from '../ui/link';
import FormWrapper from '../ui/form-wrapper';
import PasswordInput from '../ui/password-input';

// FUNCTIONAL COMPONENT
function SignUpForm() {

  // Handle controlled inputs
  const initialFormState = {
    name: 'Robin',
    email: 'robin.souriau@gmail.com',
    password: 'lol',
    passwordConfirm: 'lol',
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
      form,
      errors,
      '/api/auth/signup',
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

  return (

    <FormWrapper title="Créer un compte" onSubmit={handleSubmit}>
      <Typography>La validation d&apos;un compte administrateur Roundnet France permet aux associations d&apos;enregistrer les résultats des tournois automatiquement. Elle est soumise à l&apos;acceptation d&apos;un membre du board administratif de la fédération. </Typography>
      <Typography>Pour en savoir plus, <Link href="/qui-sommes-nous/contact">contactez-nous directement.</Link></Typography>

      <Divider />

      <TextField id="name" label="Nom & Prénom" variant="outlined" value={form.name} onChange={handleChange} error={errors.name !== ""} helperText={errors.name} required />
      <TextField id="email" label="Email" variant="outlined" value={form.email} onChange={handleChange} error={errors.email !== ""} helperText={errors.email} required />

      <PasswordInput label="Mot de passe" value={form.password} name="password" handleChange={handleChange} error={errors.password !== ''} helperText={errors.password} />
      <PasswordInput label="Confirmation du mot de passe" value={form.passwordConfirm} name="passwordConfirm" handleChange={handleChange} error={errors.passwordConfirm !== ''} helperText={errors.passwordConfirm} confirm />
      
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
      </Snackbar>
    </FormWrapper>

  )
}

export default SignUpForm
