import { useState, useEffect } from 'react';
import useMe from '../../../hooks/use-me';
import { useTheme } from '@mui/material/styles';

// MUI IMPORTS
import { Paper, Stack, MenuList, MenuItem, Divider, ListItemIcon, Icon, Typography, Box, Alert, Snackbar, useMediaQuery } from '@mui/material';

// COMPONENT IMPORTS
import AccountMain from './account-main';
import AccountPassword from './account-password';
import AccountClub from './account-club';
import AccountDelete from './account-delete';
import Loader from '../../../components/ui/loader';

// CONTENT
import { accountMenuElements } from '../../../contents/admin';

export default function AccountDashboard({ clubs }) {
  const theme = useTheme();
  const higherThanMd = useMediaQuery(theme.breakpoints.up('md'));


  // Handle content state
  const [showContent, setShowContent] = useState('account');

  // Handle user data
  const { user, isLoading, isError } = useMe();

  // Handle state for menu items
  const [mainValues, setMainValues] = useState({ name: '', email: '' });
  const [clubValue, setClubValue] = useState('');

  useEffect(() => {
    if (user) {
      setMainValues({
        name: user.name,
        email: user.email,
      });
      setClubValue(user.club);
    }
  }, [user]);

  // Handle success/error state for snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });

  function handleSnackbarClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  let contentToShow;

  // Handle loading & error of user data
  if (isLoading) return <Loader />
  if (isError) contentToShow = <Alert severity='error'>Impossible de charger les données de votre compte</Alert>

  switch (showContent) {
    case 'account':
      contentToShow =
        <AccountMain values={mainValues} setValues={setMainValues} setSnackbar={setSnackbar} />;
      break;
    case 'password':
      contentToShow = <AccountPassword setSnackbar={setSnackbar} />;
      break;
    case 'clubs':
      contentToShow = <AccountClub clubValue={clubValue} setClubValue={setClubValue} setSnackbar={setSnackbar} clubs={clubs} />;
      break;
    case 'support':
      // contentToShow = <AccountSupport />;
      break;
    case 'delete':
      contentToShow = <AccountDelete confirmText={'delete-' + mainValues.email} setSnackbar={setSnackbar} />;
      break;
    default:
      contentToShow = <AccountMain values={mainValues} setValues={setMainValues} />;
  }


  return (
    <Paper sx={{ p: 4, my: 4 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={0}>

        {/* MenuList */}
        <MenuList sx={{ mr: 2, width: { xs: 'auto', md: '230px' } }}>

          {accountMenuElements.map(element => (
            <MenuItem
              sx={{ mb: .5 }}
              key={element._id}
              onClick={() => setShowContent(element._id)}
            >
              <ListItemIcon>
                <Icon color={element._id === showContent ? 'primary' : 'disabled'}>{element.icon}</Icon>
              </ListItemIcon>
              <Typography variant="body1" color={element._id === showContent ? 'initial' : 'disabled'} fontWeight={element._id === showContent && 'bold'}>
                {element.label}
              </Typography>
            </MenuItem>
          ))}

        </MenuList>

        <Divider orientation={higherThanMd ? 'vertical' : 'horizontal'} flexItem sx={{ mb: { xs: 4, md: 0 } }} />

        {/* Main Content */}
        <Box sx={{ flex: 1 }}>
          {contentToShow}
        </Box>

      </Stack>

      {/* Snackbar for succcess/error */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity || 'info'} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  )
}
