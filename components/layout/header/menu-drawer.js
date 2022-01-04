import { useState, Fragment } from 'react';
import Link from 'next/link';

// MUI IMPORTS
import { IconButton, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Link as MUILink, Box, Collapse, Typography, Icon } from '@mui/material';

// MATERIAL ICONS
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// MENU DATA & HELPERS
import menuElements from './menu-elements';
import menuState from '../../../helpers/menu-state'; 

function MenuDrawer() {
  // Preparing states
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const keepDrawerOpen = () => setIsDrawerOpen(true);

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
  };

  //! TO TRANSFORM INTO A COMPONENT
  const listItems = menuElements.map((element) => {
    // JSX for menu subElements (if any)
    let subCollapse;
    if (element.subElements) {
      subCollapse = element.subElements.map((subElement) => {
        return (
          <Collapse key={subElement.name} in={menuOpen[element.slug]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={toggleDrawer}>
                <ListItemIcon>
                  <Icon>arrow_forward</Icon>
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

    // Display arrow of expansion if subElement is chosen
    const expandIcon = menuOpen[element.slug] ? <ExpandLess /> : <ExpandMore />;

    // General return of JSX (elements + subElements)
    return (
      <Fragment key={element.name}>
        <ListItem onClick={() => { handleMenuClick(element.slug), keepDrawerOpen() }}>
          <ListItemButton disableGutters onClick={toggleDrawer}>
            <ListItemIcon>
              {/* !!! CHANGE TO DYNAMIC  ICON*/}
              <Icon color="primary" fontSize="medium">{element.icon}</Icon>
            </ListItemIcon>
            <ListItemText>
              {element.subElements ? (
                element.name
              ) : (
                  <Link href={element.url} passHref>
                    <MUILink underline="none">{element.name}</MUILink>
                  </Link>
              )}             
            </ListItemText>
            {element.subElements && expandIcon}
          </ListItemButton>
        </ListItem>
        {subCollapse}
      </Fragment>
    );
  });

  //! TO TRANSFORM INTO A COMPONENT
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
    <Fragment>
      <IconButton
        onClick={toggleDrawer}
        size="small"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: 'inherit', lg: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </Fragment>
  );
}

export default MenuDrawer;