import Link from "next/link";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link as MUILink,
  Collapse,
  Icon,
} from "@mui/material";
import type { FC } from "react";

interface MobileNavCollapseProps {
  items: {
    name: string;
    url?: string;
  }[];
  elementOpen: boolean;
  toggleDrawer: () => void;
  adminLayout?: boolean;
}

const MobileNavCollapse: FC<MobileNavCollapseProps> = ({
  items,
  elementOpen,
  toggleDrawer,
  adminLayout = false,
}) => {
  return items.map((subElement) => {
    return (
      <Collapse
        key={subElement.name}
        in={elementOpen}
        timeout='auto'
        unmountOnExit
      >
        <ListItem component='div'>
          <Link href={subElement.url} passHref legacyBehavior>
            <ListItemButton onClick={toggleDrawer}>
              <ListItemIcon>
                <Icon>arrow_forward</Icon>
              </ListItemIcon>
              <ListItemText>
                <MUILink
                  color={adminLayout ? "secondary" : "primary"}
                  underline='none'
                >
                  {subElement.name}
                </MUILink>
              </ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>
      </Collapse>
    );
  });
};

export default MobileNavCollapse;
