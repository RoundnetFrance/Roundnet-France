import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// MATERIAL ICONS
import MenuIcon from '@mui/icons-material/Menu';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Typography } from '@mui/material';

function MenuDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

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
        <ListItem>
          <ListItemButton disableGutters onClick={toggleDrawer}>
            <ListItemIcon>
              <SupervisedUserCircleRoundedIcon color="primary" fontSize="medium" />
            </ListItemIcon>
            <ListItemText>
              <Link href="#who-are-we">Qui sommes-nous</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton disableGutters onClick={toggleDrawer}>
            <ListItemIcon>
              <HelpRoundedIcon color="primary" fontSize="medium" />
            </ListItemIcon>
            <ListItemText>
              <Link href="#methods">Méthodologie</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton disableGutters onClick={toggleDrawer}>
            <ListItemIcon>
              <StarRoundedIcon color="primary" fontSize="medium" />
            </ListItemIcon>
            <ListItemText>
              <Link href="#ranking">Classement</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
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