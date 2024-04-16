"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type FC,
  type ReactElement,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";

import {
  AppBar,
  Box,
  ButtonGroup,
  Link as MUILink,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import AvatarMenu from "./avatar-menu";
import DesktopNavItems from "./desktop-nav-items";
import MenuDrawer from "./menu-drawer";
import Socials from "./socials";

import { adminElements, menuElements } from "../../../contents/header";

const HideOnScroll: FC<{ children: ReactElement }> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

interface HeaderProps {
  adminLayout: boolean;
}

const Header: FC<HeaderProps> = ({ adminLayout }) => {
  // State for the different menu items
  const [menuOpen, setMenuOpen] = useState<Record<string, boolean>>({});
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  // Handle the menu appearing : first reinitialize the state, then open the menu and set the anchor
  const handleMenuHover = (
    event: ReactMouseEvent<HTMLButtonElement, MouseEvent>,
    slug: string,
  ) => {
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

  return (
    <HideOnScroll>
      <Box sx={{ flexGrow: 1, paddingBottom: "50px" }}>
        <AppBar color={adminLayout ? "secondary" : "primary"}>
          <Toolbar>
            <Link
              href={adminLayout ? "/rf-admin" : "/"}
              passHref
              legacyBehavior
            >
              <Image
                src='/images/logos/roundnet-france-tp-blanc.png'
                alt='Roundnet France'
                width={50}
                height={50}
              />
            </Link>

            <Typography ml={2} variant='h6' component='h1' sx={{ flexGrow: 1 }}>
              <Link
                href={adminLayout ? "/rf-admin" : "/"}
                passHref
                legacyBehavior
              >
                <MUILink color='inherit' underline='none'>
                  <strong>
                    {adminLayout ? "RF Admin" : "Roundnet France"}
                  </strong>
                </MUILink>
              </Link>
            </Typography>

            <ButtonGroup
              variant='text'
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
};

export default Header;
