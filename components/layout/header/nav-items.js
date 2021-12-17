import { Fragment } from 'react';
import Link from 'next/link';

// MUI IMPORTS
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MUILink from '@mui/material/Link';

function NavItem({ item, handleMenuHover, handleMenuClose, expandIcon, anchorEl, menuOpen }) {
  return (
    <Fragment key={item.name}>
      {
        !item.subElements ? (
          <Link href={item.url} id={item.slug} passHref>
            <Button
              color="inherit"
              onClick={(event) => { handleMenuHover(event, item.slug) }}
            >
              {item.name}
              {item.subElements && expandIcon}
            </Button>
          </Link>
        ) : (
          <Button
            color="inherit"
            onClick={(event) => { handleMenuHover(event, item.slug) }}
          >
            {item.name}
            {item.subElements && expandIcon}
          </Button>
        )
      }

      {
        item.subElements && (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={menuOpen[item.slug]}
            onClose={handleMenuClose}
          >
            {item.subElements.map((subItem) => (
              <MenuItem key={subItem.name} onClick={handleMenuClose}>
                <Link href={subItem.url} passHref>
                  <MUILink underline="none">{subItem.name}</MUILink>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        )
      }
    </Fragment>
  )
}

export default NavItem
