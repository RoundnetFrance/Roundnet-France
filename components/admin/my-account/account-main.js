import { useSWRConfig } from 'swr';

// MUI IMPORTS
import { Box, Typography, Divider, TextField, Stack, Button, Chip } from '@mui/material';

export default function AccountMain({ values, setValues }) {
  const { mutate } = useSWRConfig();

  // Handle form submit
  function handleSubmit(event) {
    event.preventDefault();
    console.log('submit', values);
    mutate('/api/users/me', values);
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end" ml={4} mb={4} >
        <Stack direction="row" spacing={2}>
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
        <Stack direction="row" spacing={4}>
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

    </Box >
  )
}
