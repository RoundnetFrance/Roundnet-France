import Link from "next/link";
import { type FC, Fragment, type MouseEvent as ReactMouseEvent } from "react";

import { Button, Menu, MenuItem } from "@mui/material";
import MUILink from "@mui/material/Link";
import type { MenuItem as MenuItemType } from "../../../models/Header";

interface DesktopNavItemProps {
  item: MenuItemType;
  handleMenuHover: (
    event: ReactMouseEvent<HTMLButtonElement, MouseEvent>,
    slug: string,
  ) => void;
  handleMenuClose: () => void;
  expandIcon: JSX.Element;
  anchorEl: HTMLElement | null;
  menuOpen: {
    [key: string]: boolean;
  };
}

const DesktopNavItem: FC<DesktopNavItemProps> = ({
  item,
  handleMenuHover,
  handleMenuClose,
  expandIcon,
  anchorEl,
  menuOpen,
}) => {
  return (
    <Fragment key={item.name}>
      {!item.subElements ? (
        <Link href={item.url ?? "#"} id={item.slug} passHref legacyBehavior>
          <Button
            color='inherit'
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
          color='inherit'
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
          id='basic-menu'
          anchorEl={anchorEl}
          open={menuOpen[item.slug] || false}
          onClose={handleMenuClose}
        >
          {item.subElements.map((subItem) => (
            <Link href={subItem.url ?? "#"} key={subItem.name} passHref>
              <MUILink underline='none'>
                <MenuItem onClick={handleMenuClose}>{subItem.name}</MenuItem>
              </MUILink>
            </Link>
          ))}
        </Menu>
      )}
    </Fragment>
  );
};

export default DesktopNavItem;
