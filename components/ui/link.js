import propTypes from "prop-types";
import NextLink from "next/link";

import { Link as MUILink, Button, Icon } from "@mui/material";

export default function Link({
  href,
  children,
  color,
  underline,
  target,
  isButton,
  buttonIcon,
  buttonVariant,
  sx,
}) {
  // If href begins with http, return only MUI link with _blank target
  if (href.startsWith("http")) {
    return (
      <MUILink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
      <NextLink href={href} passHref>
        <Button
          variant={buttonVariant}
          color={color}
          underline={underline}
          sx={sx}
          startIcon={buttonIcon && <Icon>{buttonIcon}</Icon>}
          target={target}
        >
          {children}
        </Button>
      </NextLink>
    );
  }

  return (
    <NextLink href={href} passHref>
      <MUILink color={color} underline={underline} sx={sx}>
        {children}
      </MUILink>
    </NextLink>
  );
}

Link.propTypes = {
  href: propTypes.string.isRequired,
  color: propTypes.string,
  underline: propTypes.string,
  children: propTypes.node.isRequired,
  isButton: propTypes.bool,
  buttonIcon: propTypes.string,
  buttonVariant: propTypes.string,
  target: propTypes.string,
  sx: propTypes.object,
};

Link.defaultProps = {
  color: "primary",
  underline: "always",
  isButton: false,
  buttonIcon: null,
  buttonVariant: "contained",
  target: "_self",
  sx: {},
};
