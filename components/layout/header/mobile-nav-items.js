import { Fragment } from "react";
import Link from "next/link";

// MUI IMPORTS
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link as MUILink,
  Icon,
  Divider,
} from "@mui/material";

// MUI ICONS
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// COMPONENT IMPORTS
import MobileNavCollapse from "./mobile-nav-collapse";

export default function MobileNavItems({
  items,
  menuOpen,
  toggleDrawer,
  handleCollapseElements,
  adminLayout,
}) {
  function keepDrawerOpen() {
    toggleDrawer(true);
  }

  const listItems = items.map((element) => {
    // Check if each menu element has its collapse open
    const elementOpen = menuOpen[element.slug];

    // If element have subElements, conditionnal rendering without link on primary element
    if (element.subElements) {
      const expandIcon = elementOpen ? <ExpandLess /> : <ExpandMore />;

      return (
        <Fragment key={element.name}>
          <ListItem
            onClick={() => {
              handleCollapseElements(element.slug), keepDrawerOpen();
            }}
          >
            <ListItemButton onClick={toggleDrawer}>
              <ListItemIcon>
                <Icon
                  color={adminLayout ? "secondary" : "primary"}
                  fontSize="medium"
                >
                  {element.icon}
                </Icon>
              </ListItemIcon>
              <ListItemText>{element.name}</ListItemText>
              {expandIcon}
            </ListItemButton>
          </ListItem>
          <MobileNavCollapse
            items={element.subElements}
            elementOpen={elementOpen}
            toggleDrawer={toggleDrawer}
            adminLayout={adminLayout}
          />
        </Fragment>
      );
    }

    // If element doesn't have subElements, render primary element with link and color
    return (
      <Fragment key={element.name}>
        {element.dividerTop && <Divider variant="middle" sx={{ mt: 4 }} />}
        <Link href={element.url} passHref>
          <MUILink
            underline="none"
            color={adminLayout ? "secondary" : "primary"}
          >
            <ListItem
              onClick={() => {
                handleCollapseElements(element.slug);
              }}
            >
              <ListItemButton onClick={toggleDrawer}>
                <ListItemIcon>
                  <Icon
                    color={adminLayout ? "secondary" : "primary"}
                    fontSize="medium"
                  >
                    {element.icon}
                  </Icon>
                </ListItemIcon>
                <ListItemText>{element.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          </MUILink>
        </Link>
        {element.dividerBottom && <Divider variant="middle" sx={{ mb: 4 }} />}
      </Fragment>
    );
  });

  // JSX return
  return (
    <List sx={{ p: 2, width: { xs: "75vw", sm: "50vw" } }}>{listItems}</List>
  );
}
