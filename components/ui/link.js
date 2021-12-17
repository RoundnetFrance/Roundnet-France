import NextLink from "next/link";
import MUILink from "@mui/material/Link";

export default function Link({ href, children, color }) {
  return (
    <NextLink href={href} passHref>
      <MUILink color={color}>{children}</MUILink>
    </NextLink>
  )
}