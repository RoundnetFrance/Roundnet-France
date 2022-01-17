import { useState } from 'react';
import { signOut } from 'next-auth/react';

// MUI IMPORTS
import { Stack, Box, Typography, Divider, Alert, AlertTitle, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab'

export default function AccountDelete({ confirmText, setSnackbar }) {
  const [confirmDelete, setConfirmDelete] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    if (confirmDelete !== confirmText) {
      setLoading(false);
      return setSnackbar({
        open: true,
        message: 'Vous devez confirmer la suppression de votre compte',
        severity: 'error',
      });
    }

    try {
      await fetch('/api/users/me', {
        method: 'DELETE',
      });
      signOut();
    } catch (error) {
      console.log(error);
      setSnackbar({
        open: true,
        message: error.message || 'Une erreur est survenue',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }

    return setSnackbar({
      open: true,
      message: 'Votre compte a bien été supprimé',
      severity: 'success',
    });
  }

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-end" ml={4} my={4} >
        <Typography variant="h5" >
          Supprimer le compte
        </Typography>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Box px={4} py={2}>
        <Alert severity="error">
          <AlertTitle>Action irréversible</AlertTitle>
          Si vous poursuivez cette action, votre compte sera supprimé définitivement.
        </Alert>
        <Box component="form" onSubmit={handleSubmit} my={4}>
          <Typography variant="body1" mb={2}>
            Pour confirmer la suppression de votre compte, veuillez entrer le texte suivant : <br /> <strong>{confirmText}</strong>
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField
              id="confirmDelete"
              label="Confirmer la suppression"
              error
              variant="outlined"
              value={confirmDelete}
              onChange={(event) => setConfirmDelete(event.target.value)}
              required
              sx={{ flexGrow: 1 }}
            />
            <LoadingButton loading={loading} type="submit" variant="contained" color="error" size="large" >Supprimer mon compte</LoadingButton>
          </Stack>
        </Box>
      </Box>
    </Box >
  )
}
