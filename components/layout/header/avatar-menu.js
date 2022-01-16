import Image from 'next/image';
import { useState } from 'react';

// MUI IMPORTS
import { Avatar, Box, Tooltip, Menu, IconButton, MenuItem, Typography, ListItemIcon, Divider } from '@mui/material';

// MUI ICONS
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SupportIcon from '@mui/icons-material/Support';

// COMPONENT IMPORTS
import Link from '../../ui/link';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function AvatarMenu({ image, name, signOut }) {
  // Handle avatar menu state
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>

      <Tooltip title="Préférences du compte">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{ width: 35, height: 35, mr: 1 }}>
            {image ? (
              <Image src={image} alt={name} width="35" height="35" />
            ) : <PersonIcon />}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: '35px' }}
        id="account-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >

        <MenuItem onClick={handleCloseNavMenu}>
          <ListItemIcon >
            <PersonIcon color='primary' />
          </ListItemIcon>
          <Typography textAlign="center">
            <Link href="/rf-admin/parametres/mon-compte" color="initial" underline="none">Mes informations</Link>
          </Typography>
        </MenuItem>

        <MenuItem onClick={handleCloseNavMenu}>
          <ListItemIcon>
            <SupportIcon color='primary' />
          </ListItemIcon>
          <Typography textAlign="center">
            <Link href="/rf-admin/support" color="initial" underline="none">Support</Link>
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleCloseNavMenu}>
          <ListItemIcon>
            <ExitToAppIcon color='primary' />
          </ListItemIcon>
          <Typography color="initial" textAlign="center" onClick={signOut}>Déconnexion</Typography>
        </MenuItem>

      </Menu>
    </Box>
  )
}
