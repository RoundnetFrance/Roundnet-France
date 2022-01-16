// MUI IMPORTS
import { Stack, Box, Typography, Divider, Alert, AlertTitle } from '@mui/material';

export default function AccountDelete({ values }) {
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
      </Box>
    </Box >
  )
}
