import { fr } from 'date-fns/locale';
import { Fragment, useState } from 'react';

// MUI IMPORT
import { TextField, Divider, FormHelperText, Button } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/lab';

// COMPONENT IMPORTS
import PasswordInput from '../ui/password-input';

export default function FormField({ type, id, label, required, options, value, handleChange, error }) {
  // Define error as a bool for MUI error prop 
  const booleanError = error === false ? false : true;

  // Define state and function for file dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleFileDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleFileDialogClose = () => {
    setDialogOpen(false);
  };

  // If there's a dividerBottom option, add a MUI Divider.
  const dividerBottom = options?.dividerBottom ? <Fragment><Divider /></Fragment> : null;
  

  // Conditional rendering of form field. If a new one is added, add it to the switch in helper/form too.
  let input;
  switch (type) {
    case 'longtext':
      input = (
        <TextField id={id} label={label} variant="outlined" value={value} onChange={handleChange} error={booleanError} helperText={error} required={required} multiline rows={options.multilineRows || 4} />
      );
      break;

    case 'date':
      input = (
        <LocalizationProvider dateAdapter={DateAdapter} locale={fr}>
          <DatePicker
            disableFuture={options?.dateConfig?.disableFuture}
            clearable={options?.dateConfig?.clearable}
            error={booleanError}
            id={id}
            label={label}
            openTo={options?.dateConfig?.openTo || 'month'}
            views={options?.dateConfig?.views || ['year', 'month', 'day']}
            value={value || null}
            onChange={(newValue) => {
              handleChange({
                target: {
                  id,
                  value: newValue,
                },
              });
            }}
            renderInput={(params) => (
              <Fragment>
                <TextField label="Date" {...params} />
                <FormHelperText error={booleanError} id={`${label}-error`} sx={{ position: 'relative', bottom: 10 }}>{error}</FormHelperText>
              </Fragment>
            )}
          />
        </LocalizationProvider>
      );
      break;

    case 'password':
      input = (
        <PasswordInput label={label} value={value} name={id} handleChange={handleChange} error={booleanError} helperText={error} confirm={options?.passwordConfirm} required={required} />
      )
      break;

    case 'file':
      input = (
        <Fragment>
          <Button variant="outlined" color="primary" component="label" onClick={handleFileDialogOpen}>
            {label} - Upload
          </Button>
        </Fragment>
      );
      break;

    default:
      input = (
        <TextField id={id} label={label} variant="outlined" value={value} onChange={handleChange} error={booleanError} helperText={error} required={required} />
      )
      break;
  }

  return (
    <Fragment>
      {input}
      {dividerBottom}
    </Fragment>
  );
}
