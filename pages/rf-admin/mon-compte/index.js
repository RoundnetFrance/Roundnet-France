// https://dribbble.com/shots/5893122-Account-Settings

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

// MUI IMPORTS
import { Paper, Stack, MenuList, MenuItem, Divider, ListItemIcon } from '@mui/material';

// MUI ICONS
import FaceIcon from '@mui/icons-material/Face';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GroupsIcon from '@mui/icons-material/Groups';
import SupportIcon from '@mui/icons-material/Support';

// COMPONENT IMPORTS
import Loader from '../../../components/ui/loader';
import DashboardWrapper from '../../../components/layout/admin/dashboard-wrapper';
import PageTitle from '../../../components/ui/page-title';
import Typography from '@mui/material/Typography'

export default function AccountAdminPage() {
  const router = useRouter();
  // Handle redirect if no session
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      return router.push('/rf-admin');
    }
  })

  // If loading, display loading screen
  if (status === "loading") return <Loader />

  // Handle content state
  const [showContent, setShowContent] = useState('account');


  return (
    <DashboardWrapper>
      {/* INTRO */}
      <PageTitle title="Paramètres de compte" />
      <Typography variant="body1" color="initial">
        Changer les paramètres de votre compte
      </Typography>

      {/* PAPER */}
      <Paper sx={{ p: 4, my: 4 }}>
        <Stack direction="row" spacing={4}>
          <MenuList>
            <MenuItem sx={{ mb: .5 }}>
              <ListItemIcon>
                <FaceIcon color="primary" />
              </ListItemIcon>
              <Typography variant="body1" color="primary">
                Compte
              </Typography>
            </MenuItem>
            <MenuItem sx={{ mb: .5 }}>
              <ListItemIcon>
                <VpnKeyIcon color="primary" />
              </ListItemIcon>
              <Typography variant="body1" color="primary">
                Mot de passe
              </Typography>
            </MenuItem>
            <MenuItem sx={{ mb: .5 }}>
              <ListItemIcon>
                <GroupsIcon color="primary" />
              </ListItemIcon>
              <Typography variant="body1" color="primary">
                Club
              </Typography>
            </MenuItem>
            <MenuItem sx={{ mb: .5 }}>
              <ListItemIcon>
                <SupportIcon color="primary" />
              </ListItemIcon>
              <Typography variant="body1" color="primary">
                Support
              </Typography>
            </MenuItem>
          </MenuList>
          <Divider orientation="vertical" flexItem />
        </Stack>


      </Paper>
    </DashboardWrapper>
  )
}
