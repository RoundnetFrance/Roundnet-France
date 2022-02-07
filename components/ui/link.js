import propTypes from "prop-types";
import NextLink from "next/link";

import { Link as MUILink, Button } from "@mui/material";

export default function Link({ href, children, color, underline, isButton }) {
  // If href begins with http, return only MUI link with _blank target
  if (href.startsWith("http")) {
    return (
      <MUILink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        color={color}
        underline={underline}
      >
        {children}
      </MUILink>
    );
  }

  // Button link
  if (isButton) {
    return (
      <NextLink href={href} passHref>
        <Button variant="contained" color={color} underline={underline}>
          {children}
        </Button>
      </NextLink>
    );
  }

  return (
    <NextLink href={href} passHref>
      <MUILink color={color} underline={underline}>
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
};

Link.defaultProps = {
  color: "primary",
  underline: "always",
  isButton: false,
};
