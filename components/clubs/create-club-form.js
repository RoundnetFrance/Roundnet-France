import { fr } from 'date-fns/locale';
import { useState } from 'react';
import handleFormSubmit from '../../helpers/handle-form-submit';

// MUI IMPORTS
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

// COMPONENT IMPORTS
import BoxWrapper from '../ui/box-wrapper';
import Link from '../../components/ui/link';

function CreateClubForm() {
  // Handle controlled inputs
  const initialFormState = {
    organization: '',
    city: '',
    date: '',
    website: '',
    facebook: '',
    instagram: '',
    name: '',
    email: '',
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

  // Handle submission (through handleFormSubmit helper function)
  const handleSubmit = (event) => {
    event.preventDefault();
    const requiredFields = ['organization', 'city', 'name', 'email', 'message'];

    handleFormSubmit(
      setLoading,
      setErrors,
      setForm,
      setSubmitStatus,
      form,
      errors,
      '/api/clubs/',
      requiredFields,
    );
  };

  return (

    <BoxWrapper title="Formulaire de demande d'affiliation pour la saison 2022" size="sm" onSubmit={handleSubmit}>

      <TextField id="organization" label="Nom du club" variant="outlined" value={form.organization} onChange={handleChange} error={errors.organization !== ""} />
      <TextField id="city" label="Ville" variant="outlined" />
      <LocalizationProvider dateAdapter={DateAdapter} locale={fr}>
        <DatePicker
          disableFuture
          clearable
          id="date"
          label="Date de création du club"
          openTo="month"
          views={['year', 'month', 'day']}
          value={form.date || new Date()}
          onChange={(newValue) => {
            setForm((prevForm) => ({
              ...prevForm,
              date: newValue,
            }));
          }}
          renderInput={(params) => <TextField label="Date" {...params} />}
        />
      </LocalizationProvider>
      <TextField id="website" label="Site internet" variant="outlined" />
      <TextField id="facebook" label="Facebook" variant="outlined" />
      <TextField id="instagram" label="Instagram" variant="outlined" />
      <Divider />
      <TextField id="name" label="Nom & Prénom du président*" variant="outlined" />
      <TextField id="email" label="Email" variant="outlined" />
      <TextField id="message" label="Message complémentaire" variant="outlined" multiline rows={4} />

      <Divider />
      <Typography variant="body2" >
        * Champs obligatoires
      </Typography>
      <Typography variant="body2">
        Cette demande sera soumise à validation par la fédération française de Roundnet, dans le respect des <Link href="/clubs-et-communautes/adherer-a-roundnet-france">règles d&apos;affiliation de l&apos;association</Link>.
      </Typography>
      <Button variant="contained" color="primary">Envoyer</Button>

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

export default CreateClubForm
