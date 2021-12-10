import { useState, Fragment } from 'react';
import Link from 'next/link';

// MUI IMPORTS
import { IconButton, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Link as MUILink, Box, Collapse, ListItemSecondaryAction } from '@mui/material';

// MATERIAL ICONS
import MenuIcon from '@mui/icons-material/Menu';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Typography } from '@mui/material';

// MENU DATA & 
import menuElements from './menu-elements';
import menuState from '../../helpers/menu-state';

function MenuDrawer() {
  // Preparing states
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  // State for the different menu items
  const menuInitialState = menuState();
  const [menuOpen, setMenuOpen] = useState(menuInitialState);
  const [areMenusOpen, setAreMenusOpen] = useState(false);

  // Function to toggle the menu items
  const handleMenuClick = (slug) => {

    const newMenuOpen = menuOpen;
    newMenuOpen[slug] = !menuOpen[slug];
    setMenuOpen(newMenuOpen);

    // Check if newMenuOpen has any true values
    const newMenuOpenHasTrue = Object.values(newMenuOpen).some(value => value === true);
    setAreMenusOpen(newMenuOpenHasTrue);

    console.log(menuOpen);
  };

  const listItems = menuElements.map((element) => {
    // JSX for menu subElements (if any)
    let subCollapse;

    if (element.subElements) {
      subCollapse = element.subElements.map((subElement) => {
        return (
          <Collapse key={subElement.name} in={menuOpen[element.slug]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText>
                  <Link href={subElement.url} passHref>
                    <MUILink underline="none">{subElement.name}</MUILink>
                  </Link>
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
        )
      });
    }

    // JSX for elements
    return (
      <Box key={element.name}>
        <ListItem onClick={() => { handleMenuClick(element.slug) }}>
          <ListItemButton disableGutters onClick={toggleDrawer}>
            <ListItemIcon>
              {/* !!! CHANGE TO DYNAMIC  ICON*/}
              <SupervisedUserCircleRoundedIcon color="primary" fontSize="medium" />
            </ListItemIcon>
            <ListItemText>
              {/* <Link href={element.url}> */}
              {element.name}
              {/* </Link> */}
              {element.subElements && <ExpandMore />}
            </ListItemText>
          </ListItemButton>
        </ListItem>
        {subCollapse}
      </Box>
    );
  });

  const list = () => (
    <Box>
      <Typography
        color="primary"
        variant="h5"
        gutterBottom
        sx={{
          mt: 2, ml: 2, mb: 2,
        }}
      >
        Roundnet France
      </Typography>
      <Divider />

      <List sx={{ p: 2, width: { xs: '75vw', sm: '50vw' } }}>
        {listItems}
      </List>
    </Box>
  );

  // Actual JSX return
  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        variant={areMenusOpen ? 'permanent' : 'temporary'}
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default MenuDrawer;