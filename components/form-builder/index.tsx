import {
  type FC,
  type FormEventHandler,
  Fragment,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getInitialState, submitForm, validateForm } from "../../helpers/form";
import { handleFormUpload } from "../../helpers/form/handle-form-upload";

import { LoadingButton } from "@mui/lab";
import {
  Alert,
  type AlertProps,
  Divider,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";

import type { FormConfig } from "../../models/Form";
import { BoxWrapper } from "../ui";
import { FormField } from "./form-field";

//! HOW TO - FORM CONFIG
// * Form config is an object that contains the following:

//   * name: the name displayed on top of the form (litteral)

//   * fields: an array of objects that contain the following:
//     * id (required): the id of the input. Must match database column name
//     * label (required): the label of the input
//     * type (required): the type of input. Can be: (text, longtext, password, date, email, url, file). Will throw an error if not supported
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

// Function to get InitialState. Will be called as a Memo to prevent unnecessary re-renders
//

interface FormBuilderProps {
  formConfig: FormConfig;
}

export const FormBuilder: FC<FormBuilderProps> = ({ formConfig }) => {
  // Get form Config values
  const {
    name,
    fields,
    descriptionBefore,
    descriptionAfter,
    endpoint,
    sendNotification,
    apiSchema,
    submitText,
    contentToSlug,
  } = formConfig;

  // Create an object from formFields where each id is an empty string (or false if initial error object)
  const initialFormState = useMemo(() => getInitialState(fields), [fields]);
  const initialFormErrors = getInitialState(fields, true);

  // Handle state and state change onChange
  const [form, setForm] = useState<Record<string, string>>(initialFormState);
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

  // Handle consistent link between initialState (values sent from form via formConfig.fields) and form (state for form)
  useEffect(() => {
    if (JSON.stringify(form) !== JSON.stringify(initialFormState)) {
      setForm(initialFormState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFormState]);

  // Handle submit status
  const [submitStatus, setSubmitStatus] = useState<{
    open: boolean;
    success?: boolean;
    message: string;
    error?: boolean;
  }>({
    open: false,
    success: false,
    message: "",
    error: false,
  });

  // Get all the options.optional.isParent fields and put them into object with true value with reduce. Use to control parent checkboxes in FormField
  const parentFields = useMemo(() => {
    const parentFields = {};
    for (const field of fields) {
      if (field.options?.optional?.isParent) {
        // parentFields[field._id] = false;
        parentFields[field.id] = false;
      }
    }
    return parentFields;
  }, [fields]);
  const [parentCheckboxes, setParentCheckboxes] = useState(parentFields);

  // Handle close of snackbar
  const handleSnackbarClose: AlertProps["onClose"] = () => {
    setSubmitStatus((prevSubmitStatus) => ({
      ...prevSubmitStatus,
      open: false,
    }));
  };

  // ** Handle submission (through handleFormSubmit helper function)
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);

    // * Validate the form
    let validatedForm: Record<string, any> = {};
    try {
      validatedForm = validateForm({
        form,
        fields,
        initialFormErrors,
        apiSchema,
      });
    } catch (error) {
      // If anything fails during validation
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
      // Upload files to storage if any (and they're not empty)
      const formToSubmit = await handleFormUpload({
        fields,
        contentToSlug: validatedForm[contentToSlug || "title"],
        form: validatedForm,
        endpoint,
      });

      // Submit the form (with the validated form return by the function above).
      // If "sendNotification" is true, send a mail notification to the admin
      const response = await submitForm({
        values: formToSubmit,
        endpoint,
        sendNotification,
      });
      const data = await response.json();

      // If response is not ok, throw an error
      if (!response.ok) {
        throw new Error(data.message);
      }

      // Re-init the UI. Don't init the form if in development env
      if (process.env.NODE_ENV !== "development") {
        setForm(initialFormState);
      }
      setErrors(initialFormErrors);

      // Display a success snackbar
      setSubmitStatus({
        open: true,
        success: true,
        message: data.message || "Les données ont bien été envoyées.",
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
    <BoxWrapper title={name} onSubmit={handleSubmit}>
      {descriptionBefore && (
        <Fragment>
          <Typography>{descriptionBefore}</Typography>
          <Divider />
        </Fragment>
      )}

      {fields.map((field) => (
        <FormField
          key={field.id}
          {...field}
          id={field.id}
          value={form[field.id]}
          error={errors?.[field.id]}
          handleChange={handleChange}
          parentCheckboxes={parentCheckboxes}
          setParentCheckboxes={setParentCheckboxes}
        />
      ))}

      <Typography variant='body2'>* Champs obligatoires</Typography>

      <LoadingButton
        loading={loading}
        variant='contained'
        color='primary'
        type='submit'
      >
        {submitText || "Envoyer"}
      </LoadingButton>

      <Typography variant='body2'>{descriptionAfter}</Typography>

      {/* SNACKBAR */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={submitStatus.open}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={submitStatus.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </BoxWrapper>
  );
};
