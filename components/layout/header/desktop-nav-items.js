import { Fragment } from "react";
import Link from "next/link";

// MUI IMPORTS
import { Button, Menu, MenuItem } from "@mui/material";
import MUILink from "@mui/material/Link";

function DesktopNavItem({
  item,
  handleMenuHover,
  handleMenuClose,
  expandIcon,
  anchorEl,
  menuOpen,
}) {
  return (
    <Fragment key={item.name}>
      {!item.subElements ? (
        <Link href={item.url} id={item.slug} passHref legacyBehavior>
          <Button
            color="inherit"
            onClick={(event) => {
              handleMenuHover(event, item.slug);
            }}
          >
            <strong>{item.name}</strong>
            {item.subElements && expandIcon}
          </Button>
        </Link>
      ) : (
        <Button
          color="inherit"
          onClick={(event) => {
            handleMenuHover(event, item.slug);
          }}
        >
          <strong>{item.name}</strong>
          {item.subElements && expandIcon}
        </Button>
      )}

      {item.subElements && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={menuOpen[item.slug] || false}
          onClose={handleMenuClose}
        >
          {item.subElements.map((subItem) => (
            <Link href={subItem.url} key={subItem.name} passHref>
              <MUILink underline="none">
                <MenuItem onClick={handleMenuClose}>{subItem.name}</MenuItem>
              </MUILink>
            </Link>
          ))}
        </Menu>
      )}
    </Fragment>
  );
}

export default DesktopNavItem;
