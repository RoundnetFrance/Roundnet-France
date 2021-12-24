import { useState } from 'react';
import { validateForm } from '../../helpers/form';

// MUI IMPORTS
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';

// COMPONENT IMPORTS
import BoxWrapper from '../ui/box-wrapper';
import FormField from './form-field';

//! HOW TO - FORM CONFIG
// * Form config is an object that contains the following:

//   * name: the name displayed on top of the form (litteral)

//   * fields: an array of objects that contain the following:
//     * id (required): the id of the input. Must match database column name
//     * label (required): the label of the input
//     * type (required): the type of input. Can be: (text, password, date, email)
//     * required (optional): if the input is required or not. Defaults to false
//     * dateConfig (optional): if the input is a date input, this object contains the following:
//        disableFuture (optional): a bool that determines if the date picker should allow future dates. Defaults to false
//        clearable (optional): a bool that determines if the date picker should allow clearing the date. Defaults to false
//        openTo (optional): a string that determines which view the date picker should open to. Defaults to 'month'
//        views (optional): an array of strings that determines which views the date picker should display. Defaults to ['year', 'month', 'day']
//     * passwordConfig (optional): if the input is a password input, this object contains the following:
//        confirm (optional): a bool that determines if the password input should have a confirm password input. Defaults to false

//   * descriptionBefore: description shown before the form. Can be a string or a component
//   * descriptionAfter: description shown after the form. Can be a string or a component



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

  const initialFormErrors = fields.map(field => field.id).reduce((acc, curr) => ({
    ...acc,
    [curr]: false,
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
  const [errors, setErrors] = useState(initialFormErrors);
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
    setLoading(true);

    // Validate the form
    try {
      const response = validateForm({ form, fields, initialFormErrors });
      console.log(response);
    } catch (error) {
      console.log(error.details)
      // Set errors to inputs
      setErrors(error.details);
      // Display an error snackbar
      setSubmitStatus({
        open: true,
        error: true,
        message: error.message,
      });
      // Stop loading
      setLoading(false);
    }

    // Submit the validated form



  };



  // RETURN JSX
  return (
    <BoxWrapper title={name} onSubmit={handleSubmit} noValidate>
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

      <Typography variant="body2" >
        * Champs obligatoires
      </Typography>

      <LoadingButton loading={loading} variant="contained" color="primary" type="submit">
        Faire une demande
      </LoadingButton>

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
