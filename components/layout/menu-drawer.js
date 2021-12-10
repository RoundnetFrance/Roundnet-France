import { useState } from 'react';

// MUI IMPORTS
import { IconButton, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Link, Box } from '@mui/material';

// MATERIAL ICONS
import MenuIcon from '@mui/icons-material/Menu';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Typography } from '@mui/material';

// MENU DATA
import menuElements from './menu-elements';

function MenuDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const listItems = menuElements.map((element) => {
    return (
      <ListItem key={element.name}>
          <ListItemButton disableGutters onClick={toggleDrawer}>
            <ListItemIcon>
              {/* !!! CHANGE TO DYNAMIC  ICON*/}
              {/* <SupervisedUserCircleRoundedIcon color="primary" fontSize="medium" /> */}
            </ListItemIcon>
            <ListItemText>
              <Link href={element.url}>{element.name}</Link>
            </ListItemText>
            {/* !!! ADD SUBELEMENTS */}
          </ListItemButton>
        </ListItem>
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
        {' '}
        <br />
        {' '}
        Ranking
      </Typography>
      <Divider />

      <List sx={{ p: 2, width: { xs: '75vw', sm: '50vw' } }}>
        {listItems}
      </List>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '4rem',
          opacity: 1,
        }}
      >
        <span>Logo</span>

      </Box>
    </Box>
  );

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
        variant="temporary"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default MenuDrawer;