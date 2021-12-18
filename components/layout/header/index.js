import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { signOut } from 'next-auth/react';

// MATERIAL COMPONENTS
import {
  Link as MUILink, AppBar, Box, Toolbar, Typography, ButtonGroup, useScrollTrigger, Slide, Button, Stack,
} from '@mui/material';

// MUI ICONS
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// OUTER COMPONENTS
import menuElements from './menu-elements';
import MenuDrawer from './menu-drawer';
import AdminDrawer from '../admin/admin-drawer';
import menuState from '../../../helpers/menu-state';
import NavItem from './nav-items';

function HideOnScroll({ children }) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function Header(props) {
  // State for the different menu items
  const menuInitialState = menuState();
  const [menuOpen, setMenuOpen] = useState(menuInitialState);
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle the menu appearing : first reinitialize the state, then open the menu and set the anchor
  const handleMenuHover = (event, slug) => {
    handleMenuClose();
    const newMenuOpen = menuOpen;
    newMenuOpen[slug] = !menuOpen[slug];
    setMenuOpen(newMenuOpen);
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setMenuOpen(menuInitialState);
    setAnchorEl(null);
  };

  // Display 1st and 2nd level navigation items for regular layout
  const navItems = menuElements.map((item) => {
    // Display arrow of expansion if subElement is chosen
    const expandIcon = menuOpen[item.slug] ? <ExpandLess /> : <ExpandMore />;

    return <NavItem
      key={item.name}
      item={item}
      handleMenuClose={handleMenuClose}
      handleMenuHover={handleMenuHover}
      expandIcon={expandIcon}
      anchorEl={anchorEl}
      menuOpen={menuOpen}
    />;
  }
  );

  // Display the user name if session
  let userName;
  if (props.session) {
    userName = props.session.user.name || props.session.user.email;
  }

  // Display the admin items
  const adminItems = (
    <Stack direction={{ xs: "column", sm: "row" }} alignItems="center" spacing={{ xs: 0, sm: 1 }}>
      <Typography variant="body2">{userName}&nbsp;
      </Typography>
      <Typography display={{ xs: 'none', sm: 'inherit' }}> | </Typography>
      <Button onClick={signOut} color="neutral" sx={{
        textTransform: 'none',
      }}> Déconnexion </Button>
    </Stack>
  )

  // Check if regular or admin layout
  const adminLayout = props.adminLayout;

  return (
    <HideOnScroll {...props}>
      <Box sx={{ flexGrow: 1, paddingBottom: "50px" }}>
        <AppBar>
          <Toolbar>
            {adminLayout ? <AdminDrawer /> : <MenuDrawer />}
            <Link href="/" passHref>
              <a>
                <Image
                  src="/images/logos/roundnet-france-tp-blanc.png"
                  alt="Roundnet France"
                  width="50px"
                  height="50px"
                />
              </a>
            </Link>

            <Typography ml={2} variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              <Link href="/" passHref>
                <MUILink color="inherit" underline="none">
                  <strong>{adminLayout ? 'RF Admin' : 'Roundnet France'}</strong>
                </MUILink>
              </Link>
            </Typography>

            <ButtonGroup variant="text" sx={{ display: adminLayout ? { xs: 'inherit' } : { xs: 'none', md: 'block' } }}>
              {adminLayout ? adminItems : navItems}
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}

export default Header;