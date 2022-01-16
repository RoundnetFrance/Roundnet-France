import { useSWRConfig } from 'swr';
import { useState } from 'react';

// MUI IMPORTS
import { Box, Typography, Divider, Stack, Button } from '@mui/material';

// COMPONENT IMPORTS
import PasswordInput from '../../../components/ui/password-input';

export default function AccountPassword({ values, setValues, setSnackbar }) {
  const { mutate } = useSWRConfig();

  // Handle password state
  const [passwordValues, setPasswordValues] = useState({
    password: '',
    passwordConfirm: '',
  });

  // Handle form submit
  function handleSubmit(event) {
    // Prevent form from submitting
    event.preventDefault();

    // If passwords don't match, throw error
    if (passwordValues.password !== passwordValues.passwordConfirm) {
      return setSnackbar({
        open: true,
        message: 'Les mots de passe ne correspondent pas.',
        severity: 'error',
      });
    }

    // Get user data, patch it in the db, then return new patched local state
    mutate('/api/users/me', async (user) => {
      try {
        const response = await fetch('/api/users/me', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(passwordValues),
        });

        // If error on response status, throw
        if (!response.ok) {
          const { message } = await response.json();
          throw new Error(message);
        };

      } catch (err) {
        setSnackbar({
          open: true,
          message: err.message || 'Une erreur est survenue',
          severity: 'error',
        });
      }

      const updatedUser = { ...user, ...values };
      return updatedUser;
    });
    setSnackbar({
      open: true,
      message: 'Vos informations ont été mises à jour',
      severity: 'success',
    });

  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'flex-end' }} ml={4} mb={4} >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Typography variant="h5" >
            Mot de passe
          </Typography>
        </Stack>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} type="submit">
          Enregistrer les modifications
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Box pl={4} py={2}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: '100%' }}>
          <PasswordInput
            id="password"
            label="Nouveau mot de passe"
            name="password"
            value={passwordValues.password}
            handleChange={(event) => setPasswordValues({ ...passwordValues, password: event.target.value })}
            required
          />
          <PasswordInput
            id="password-confirm"
            label="Confirmer le nouveau mot de passe"
            name="password-confirm"
            value={passwordValues.passwordConfirm}
            handleChange={(event) => setPasswordValues({ ...passwordValues, passwordConfirm: event.target.value })}
            required
          />
        </Stack>

      </Box>
    </Box>
  )
}
