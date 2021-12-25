import { fr } from 'date-fns/locale';
import { Fragment } from 'react';

// MUI IMPORT
import { TextField, Divider } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/lab';

// COMPONENT IMPORTS
import PasswordInput from '../ui/password-input';

export default function FormField({ type, id, label, required, options, value, handleChange, error }) {
  // Define error as a bool for MUI error prop 
  const booleanError = error === false ? false : true;

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
            errorText={booleanError}
            invalidDateMessage="Date invalide"
            id={id}
            label={label}
            openTo={options?.dateConfig?.openTo || 'month'}
            views={options?.dateConfig?.views || ['year', 'month', 'day']}
            value={value || new Date()}
            onChange={(newValue) => {
              handleChange({
                target: {
                  id,
                  value: newValue,
                },
              });
            }}
            renderInput={(params) => <TextField label="Date" {...params} />}
          />
        </LocalizationProvider>
      );
      break;

    case 'password':
      input = (
        <PasswordInput label={label} value={value} name={id} handleChange={handleChange} error={error !== ''} helperText={error} confirm={options?.passwordConfirm} required={required} />
      )
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
