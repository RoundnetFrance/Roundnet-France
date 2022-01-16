import { useSWRConfig } from 'swr';
import Image from 'next/image';

// MUI IMPORTS
import { Box, Typography, Divider, Stack, Button, Avatar, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

export default function AccountClub({ clubValue, setClubValue, setSnackbar, clubs }) {
  const { mutate } = useSWRConfig();

  // Get club info from id
  const club = clubs.find((club) => club._id === clubValue);

  // Change clubs for select friendly format
  const clubsSelect = clubs.map((club) => ({
    label: club.title,
    value: club._id,
  }));
  console.log(clubsSelect);

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
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Typography variant="h5" >
            Mon club
          </Typography>
        </Stack>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} type="submit">
          Enregistrer les modifications
        </Button>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Box px={4} py={2}>
        {club ? (
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center">

            <Box m={{ xs: 'auto', md: 1 }} mb={2}>
              <Avatar name={clubValue} sx={{ position: 'relative', width: 200, height: 200 }}>
                <Image src={club.image} alt={clubValue} layout='fill' objectFit='cover' />
              </Avatar>
            </Box>

            <Stack direction="column" justifyContent="center" spacing={1}>
              <Typography variant="body1" color="initial" align="center">
                Vous appartenez au club de
              </Typography>
              <Typography variant="h4" color="primary" align="center">
                <strong>{club.title}</strong>
              </Typography>
              <Typography variant="body2" color="initial" align="center" py={2}>
                Référent : {club.referer}<br />Créé le {new Date(club.clubCreated).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </Typography>
            </Stack>

          </Stack>
        ) : (
          <Typography variant="body1">
            Vous n&apos;êtes pas encore affilié à un club.
          </Typography>
        )}

      </Box>

      <Divider sx={{ my: 2 }} />

      <Box px={4} py={2}>
        <Typography variant="h5" color="initial" mb={4}>Changer de club affilié</Typography>
        <FormControl required fullWidth>
          <InputLabel id="change-club">Sélectionner un club</InputLabel>
          <Select
            labelId="change-club"
            label="Sélectionner un club"
            id="change-club"
            value={clubValue}
            onChange={(event) => setClubValue(event.target.value)}
          >
            {
              clubsSelect.map(item => (
                <MenuItem
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </MenuItem>
              ))
            }
          </Select>
          {/* {booleanError && <FormHelperText error={booleanError} id={`${label}-error`}>{error}</FormHelperText>} */}
        </FormControl>
      </Box>
    </Box>
  )
}
