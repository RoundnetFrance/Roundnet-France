import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import type { FC } from "react";

const DashboardDrawer: FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        marginTop: "50px",
        width: 400,
        flexShrink: 0,
      }}
    >
      <Toolbar />
      <List>
        <ListItemButton>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Posts" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Pages" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default DashboardDrawer;
