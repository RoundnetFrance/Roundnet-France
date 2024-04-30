import NextLink from "next/link";

import {
  Button,
  ButtonOwnProps,
  Icon,
  LinkOwnProps,
  Link as MUILink,
  SxProps,
} from "@mui/material";
import type { FC, ReactNode } from "react";

interface LinkProps {
  buttonIcon?: string;
  children: ReactNode;
  buttonVariant?: ButtonOwnProps["variant"];
  color?: ButtonOwnProps["color"] | string;
  disabled?: boolean;
  href: string;
  isButton?: boolean;
  target?: string;
  sx?: SxProps;
  underline?: LinkOwnProps["underline"];
}

const Link: FC<LinkProps> = ({
  buttonIcon,
  buttonVariant = "contained",
  children,
  color = "primary",
  disabled,
  href,
  isButton = false,
  sx = {},
  target = "_self",
  underline = "always",
}) => {
  // If href begins with http, return only MUI link with _blank target
  if (href.startsWith("http")) {
    return (
      <MUILink
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        color={color}
        underline={underline}
        sx={sx}
      >
        {children}
      </MUILink>
    );
  }

  // Button link
  if (isButton) {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <Button
          variant={buttonVariant}
          // @ts-ignore
          color={color}
          sx={sx}
          startIcon={buttonIcon && <Icon>{buttonIcon}</Icon>}
          target={target}
          disabled={disabled}
        >
          {children}
        </Button>
      </NextLink>
    );
  }

  return (
    <NextLink href={href} passHref>
      <MUILink color={color} underline={underline} sx={sx} component='span'>
        {children}
      </MUILink>
    </NextLink>
  );
};

export default Link;
