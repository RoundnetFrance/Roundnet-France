import React from 'react'

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function DashboardDrawer() {
  return (
    <Drawer variant="permanent" sx={{
      marginTop: '50px',
      width: 400,
      flexShrink: 0,
    }}>
      <Toolbar />
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Posts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Pages" />
        </ListItem>
        </List>
      
    </Drawer>
  )
}

export default DashboardDrawer
