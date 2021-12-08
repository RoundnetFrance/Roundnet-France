import PropTypes from 'prop-types';
import menuElements from './menu-elements';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// MATERIAL COMPONENTS
import { 
  Link as MUILink, AppBar, Box, Toolbar, Typography, Button, ButtonGroup, useScrollTrigger, Slide, Menu, MenuItem 
} from '@mui/material';

// OUTER COMPONENTS
import MenuDrawer from './menu-drawer';

function HideOnScroll(props) {
  const { children } = props;
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
  // const menuInitialState = {};
  // menuElements.forEach(element => {
  //   menuInitialState[element.slug] = false;
  // });
  // const [menuOpen, setMenuOpen] = useState(menuInitialState);

  // const handleMenuHover = (slug) => {
  //   console.log(menuOpen);
  //   const newMenuOpen = menuOpen;
  //   newMenuOpen[slug] = !menuOpen[slug];
  //   setMenuOpen(newMenuOpen);
  // };

  // const handleMenuClose = (event) => {
  //   setMenuOpen(menuInitialState);
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Display 1st level navigation items
  const navItems = menuElements.map((item) => (
    <Link key={item.name} href={item.url} passHref>
      <Button
        color="inherit"
        onMouseOver={() => { handleMenuHover(item.slug) }}
        onMouseLeave={handleMenuClose}
      >
        {item.name}
      </Button>
    </Link>
  ));

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <HideOnScroll {...props}>
      <Box sx={{ flexGrow: 1, paddingBottom: "60px" }}>
        <AppBar>
          <Toolbar>
            <MenuDrawer />
            <Link href="http://localhost:3000/" passHref>
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
              <Link href="http://localhost:3000/" passHref>
                <MUILink color="inherit" underline="none">Roundnet France</MUILink>
              </Link>
            </Typography>

            <ButtonGroup variant="text" sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems}
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}

export default Header;