import { fr } from 'date-fns/locale';
import { Fragment, useState } from 'react';

// MUI IMPORT
import { TextField, Divider, FormHelperText, Button, Dialog, DialogContent, DialogActions, DialogTitle, Typography, LinearProgress, Box } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider, LoadingButton } from '@mui/lab';

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
  const handleFileDialogCancel = () => {
    setDialogOpen(false);
    handleChange({
      target: {
        id,
        value: '',
      },
    })
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

          <Box>
            <Button size="large" variant="outlined" color={booleanError ? 'error' : 'primary'} component="label" onClick={handleFileDialogOpen} sx={{ mr: 2 }}>
              {label} - Upload
            </Button>
            <Typography component="span" variant="body2">{value.name || 'Aucun fichier séléctionné'}</Typography>
            {booleanError && <FormHelperText error={booleanError} id={`${label}-error`} sx={{  }}>{error}</FormHelperText>}
          </Box>

          {/* Dialog component */}
          <Dialog open={dialogOpen} onClose={handleFileDialogClose}>
            <DialogTitle>Uploader</DialogTitle>
            <DialogContent sx={{ minWidth: { xs: '70vw', sm: '400px', md: '500px' } }}>
              <Button
                variant="contained"
                component="label"
                color="primary"
              // startIcon={<FileUploadIcon />}
              >
                Envoyer un fichier
                <input
                  type="file"
                  name="file"
                  accept='image/*'
                  hidden
                  // onChange={(event) => setFile(event.target.files[0])}
                  onChange={(event) => handleChange({
                    target: {
                      id,
                      value: event.target.files[0],
                    },
                  })}
                />
              </Button>
              <Typography variant="body2" mt={2} pl={2}>{value ? value.name : 'Aucun fichier sélectionné'}</Typography>

            </DialogContent>
            <DialogActions>
              <Button onClick={handleFileDialogCancel}>Annuler</Button>
              <Button variant="contained" onClick={handleFileDialogClose}>Choisir ce fichier</Button>
            </DialogActions>
          </Dialog>
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
