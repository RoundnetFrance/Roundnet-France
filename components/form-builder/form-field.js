import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import { fr } from 'date-fns/locale';

// COMPONENT IMPORTS
import PasswordInput from '../ui/password-input';

export default function FormField({ type, id, label, required, value, handleChange, error }) {
  // Conditional rendering of form field
  switch (type) {
    case 'text':
      return (
        <TextField id={id} label={label} variant="outlined" value={value} onChange={handleChange} error={error !== ""} helperText={error} required={required} />
      );

    case 'email':
      return (
        <TextField id={id} label={label} variant="outlined" value={value} onChange={handleChange} error={error !== ""} helperText={error} required={required} />
      );

    case 'date':
      return (
        <LocalizationProvider dateAdapter={DateAdapter} locale={fr}>
          <DatePicker
            disableFuture
            clearable
            id={id}
            label={label}
            openTo="month"
            views={['year', 'month', 'day']}
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

    default:
      return null;
  }
}
