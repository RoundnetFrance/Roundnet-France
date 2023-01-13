import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// MATERIAL COMPONENTS
import {
  Link as MUILink,
  AppBar,
  Box,
  Toolbar,
  Typography,
  ButtonGroup,
  useScrollTrigger,
  Slide,
} from "@mui/material";

// MUI ICONS
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// COMPONENTS IMPORT
import MenuDrawer from "./menu-drawer";
import DesktopNavItems from "./desktop-nav-items";
import Socials from "./socials";
import AvatarMenu from "./avatar-menu";

// CONTENT
import { menuElements, adminElements } from "../../../contents/header";

function HideOnScroll({ children }) {
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
  const [menuOpen, setMenuOpen] = useState({});
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
    setMenuOpen({});
    setAnchorEl(null);
  };

  // Display 1st and 2nd level navigation items for regular layout
  const desktopNavItems = menuElements.map((item) => {
    // Display arrow of expansion if subElement is chosen
    const expandIcon = menuOpen[item.slug] ? <ExpandLess /> : <ExpandMore />;

    return (
      <DesktopNavItems
        key={item.name}
        item={item}
        handleMenuClose={handleMenuClose}
        handleMenuHover={handleMenuHover}
        expandIcon={expandIcon}
        anchorEl={anchorEl}
        menuOpen={menuOpen}
      />
    );
  });

  // Check if regular or admin layout
  const adminLayout = props.adminLayout;

  return (
    <HideOnScroll {...props}>
      <Box sx={{ flexGrow: 1, paddingBottom: "50px" }}>
        <AppBar color={adminLayout ? "secondary" : "primary"}>
          <Toolbar>
            <Link
              href={adminLayout ? "/rf-admin" : "/"}
              passHref
              legacyBehavior
            >
              <Image
                src="/images/logos/roundnet-france-tp-blanc.png"
                alt="Roundnet France"
                width={50}
                height={50}
              />
            </Link>

            <Typography ml={2} variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              <Link
                href={adminLayout ? "/rf-admin" : "/"}
                passHref
                legacyBehavior
              >
                <MUILink color="inherit" underline="none">
                  <strong>
                    {adminLayout ? "RF Admin" : "Roundnet France"}
                  </strong>
                </MUILink>
              </Link>
            </Typography>

            <ButtonGroup
              variant="text"
              sx={{
                display: adminLayout
                  ? { xs: "inherit" }
                  : { xs: "none", lg: "block" },
              }}
            >
              {adminLayout ? <AvatarMenu /> : desktopNavItems}
            </ButtonGroup>

            {!adminLayout && <Socials />}
            <MenuDrawer
              adminLayout={adminLayout}
              menuElements={adminLayout ? adminElements : menuElements}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
}

export default Header;
