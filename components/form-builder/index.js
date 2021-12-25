import { useState } from 'react';
import { validateForm, submitForm } from '../../helpers/form';

// MUI IMPORTS
import { Typography, Divider, Snackbar, Alert, Slide } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// COMPONENT IMPORTS
import BoxWrapper from '../ui/box-wrapper';
import FormField from './form-field';

//! HOW TO - FORM CONFIG
// * Form config is an object that contains the following:

//   * name: the name displayed on top of the form (litteral)

//   * fields: an array of objects that contain the following:
//     * id (required): the id of the input. Must match database column name
//     * label (required): the label of the input
//     * type (required): the type of input. Can be: (text, password, date, email, url). Will throw an error if not supported
//     * options: an object that contains the following:
//        required (optional): if the input is required or not. Defaults to false
//        passwordConfirm (optional): a bool that determines if the password input should have a confirm password input. Defaults to false
//        dateConfig (optional): if the input is a date input, this object contains the following:
//          disableFuture (optional): a bool that determines if the date picker should allow future dates. Defaults to false
//          clearable (optional): a bool that determines if the date picker should allow clearing the date. Defaults to false
//          openTo (optional): a string that determines which view the date picker should open to. Defaults to 'month'
//          views (optional): an array of strings that determines which views the date picker should display. Defaults to ['year', 'month', 'day']


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
    apiSchema,
  } = formConfig;

  // Create an object from formFields where each id is an empty string (or false if initial error object)
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // * Validate the form
    let validatedForm;
    try {
      validatedForm = validateForm({ form, fields, initialFormErrors, apiSchema });
    } catch (error) {
      // Set errors to inputs if error is there
      if (error.details) {
        setErrors(error.details);
      }

      // Display an error snackbar
      setSubmitStatus({
        open: true,
        error: true,
        message: error.message,
      });
      // Stop loading
      setLoading(false);

      // Stop the handleSubmit function
      return;
    }


    // * Submit the validated form
    try {
      // Submit the form to the endpoint API (with the validated form return by the function above)
      const response = await submitForm({ values: validatedForm, endpoint });
      const data = await response.json();
      // Re-init the UI
      // setForm(initialFormState);
      setErrors(initialFormErrors);

      // Display a success snackbar
      setSubmitStatus({
        open: true,
        success: true,
        message: data.message || 'Les données ont bien été envoyées.',
      });

    } catch (error) {
      setSubmitStatus({
        open: true,
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
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
          error={errors && errors[field.id]}
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
