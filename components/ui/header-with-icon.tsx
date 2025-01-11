import { Box, Icon, IconOwnProps, Typography } from "@mui/material";
import { FC, Fragment, ReactNode } from "react";

interface HeaderWithIconProps {
  children?: ReactNode;
  color?: IconOwnProps["color"];
  icon: string;
  title?: string;
}

const HeaderWithIcon: FC<HeaderWithIconProps> = ({
  icon,
  title,
  color = "primary",
  children,
}) => {
  return (
    <Fragment>
      <Typography variant="h4" align="center" color={color} mt={4}>
        <Box textAlign="center">
          <Icon style={{ fontSize: 80 }} color={color}>
            {icon}
          </Icon>
        </Box>
        <strong>{title}</strong>
      </Typography>
      {children && (
        <Typography variant="h6" align="center" color={color} mb={4}>
          {children}
        </Typography>
      )}
    </Fragment>
  );
};

export default HeaderWithIcon;
