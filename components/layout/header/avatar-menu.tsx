import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { type MouseEventHandler, useState } from "react";

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import SupportIcon from "@mui/icons-material/Support";

import { Link } from "../../ui";

export default function AvatarMenu() {
  const { data: session } = useSession();

  // Display the user name if session
  const name = session?.user?.name || session?.user?.email;
  const image = session?.user?.image;

  // Handle avatar menu state
  const [anchorElNav, setAnchorElNav] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const [anchorElUser, setAnchorElUser] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const handleOpenUserMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title='Préférences du compte'>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar sx={{ width: 35, height: 35, mr: 1 }}>
            {image ? (
              <Image src={image} alt={name ?? ""} width='35' height='35' />
            ) : (
              <PersonIcon />
            )}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "35px" }}
        id='account-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <ListItemIcon>
            <PersonIcon color='primary' />
          </ListItemIcon>
          <Typography textAlign='center'>
            <Link
              href='/rf-admin/parametres/mon-compte'
              color='initial'
              underline='none'
            >
              Mes informations
            </Link>
          </Typography>
        </MenuItem>

        <MenuItem onClick={handleCloseNavMenu}>
          <ListItemIcon>
            <SupportIcon color='primary' />
          </ListItemIcon>
          <Typography textAlign='center'>
            <Link href='/rf-admin/support' color='initial' underline='none'>
              Support
            </Link>
          </Typography>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleCloseNavMenu}>
          <ListItemIcon>
            <ExitToAppIcon color='primary' />
          </ListItemIcon>
          <Typography
            color='initial'
            textAlign='center'
            onClick={() => signOut()}
          >
            Déconnexion
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
