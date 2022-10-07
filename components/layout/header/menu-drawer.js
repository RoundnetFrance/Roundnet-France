import { useState, Fragment } from "react";

// MUI IMPORTS
import { IconButton, Drawer, Divider, Box, Typography } from "@mui/material";

// MATERIAL ICONS
import MenuIcon from "@mui/icons-material/Menu";

// COMPONENT IMPORTS
import MobileNavItems from "./mobile-nav-items";

function MenuDrawer({ menuElements, adminLayout }) {
  // Preparing states
  const [menuOpen, setMenuOpen] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const keepDrawerOpen = () => setIsDrawerOpen(true);

  // Function to toggle the collapsable items
  const handleCollapseElements = (slug) => {
    const newMenuOpen = { ...menuOpen };
    newMenuOpen[slug] = !menuOpen[slug];
    setMenuOpen((prev) => ({ ...prev, ...newMenuOpen }));
  };

  // Actual JSX return
  return (
    <Fragment>
      <IconButton
        onClick={toggleDrawer}
        size="small"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          display: { xs: "inherit", lg: adminLayout ? "inherit" : "none" },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        variant="temporary"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <Box>
          <Typography
            color={adminLayout ? "secondary" : "primary"}
            variant="h5"
            gutterBottom
            sx={{
              mt: 2,
              ml: 2,
              mb: 2,
              lineHeight: 1,
            }}
          >
            {adminLayout ? "Administration" : "Roundnet France"}
          </Typography>
          <Divider />

          <MobileNavItems
            items={menuElements}
            toggleDrawer={toggleDrawer}
            keepDrawerOpen={keepDrawerOpen}
            handleCollapseElements={handleCollapseElements}
            menuOpen={menuOpen}
            adminLayout={adminLayout}
          />
        </Box>
      </Drawer>
    </Fragment>
  );
}

export default MenuDrawer;
