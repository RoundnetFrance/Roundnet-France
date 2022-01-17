import { useSWRConfig } from 'swr';

// MUI IMPORTS
import { Box, Typography, Divider, TextField, Stack, Button, Chip } from '@mui/material';

export default function AccountMain({ values, setValues, setSnackbar }) {
  const { mutate } = useSWRConfig();

  // Handle form submit
  function handleSubmit(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Get user data, patch it in the db, then return new patched local state
    mutate('/api/users/me', async (user) => {
      try {
        const response = await fetch('/api/users/me', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
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
        <Stack direction='row' spacing={2}>
          <Typography variant="h5" >
            Mon compte
          </Typography>
          <Chip
            label="Administrateur"
            color="secondary"
          />
        </Stack>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} type="submit">
          Enregistrer les modifications
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Box px={4} py={2}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          <TextField
            id="name"
            fullWidth
            label="Nom & Prénom"
            value={values.name}
            onChange={e => setValues(prev => ({ ...prev, name: e.target.value }))}
            required
          />
          <TextField
            id="email"
            label="Email"
            fullWidth
            value={values.email}
            onChange={e => setValues(prev => ({ ...prev, email: e.target.value }))}
            helperText='Attention : changer votre adresse mail entraîne la perte de possibilité de connexion via les anciennes méthodes de connexion tierce (Google, Facebook...)'
            required
          />
        </Stack>

      </Box>
    </Box>
  )
}
