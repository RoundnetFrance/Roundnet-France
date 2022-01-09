import propTypes from 'prop-types';
import NextLink from "next/link";
import MUILink from "@mui/material/Link";

export default function Link({ href, children, color, underline }) {
  return (
    <NextLink href={href} passHref>
      <MUILink color={color} underline={underline}>{children}</MUILink>
    </NextLink>
  )
}

Link.propTypes = {
  href: propTypes.string.isRequired,
  color: propTypes.string,
  underline: propTypes.string,
}

Link.defaultProps = {
  color: 'primary',
  underline: 'always',
}