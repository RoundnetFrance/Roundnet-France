import Link from 'next/link';

// MUI IMPORTS
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Link as MUILink, Collapse, Icon } from '@mui/material';

export default function MobileNavCollapse({ items, elementOpen, toggleDrawer }) {
  return items.map((subElement) => {
    return (
      <Collapse key={subElement.name} in={elementOpen} timeout="auto" unmountOnExit>
        <ListItem component="div">
          <Link href={subElement.url} passHref>
            <ListItemButton onClick={toggleDrawer}>
              <ListItemIcon>
                <Icon>arrow_forward</Icon>
              </ListItemIcon>
              <ListItemText>
                <MUILink underline="none">{subElement.name}</MUILink>
              </ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </Collapse>
    )
  });
}
