import propTypes from "prop-types";

import { Stack } from "@mui/material";

export default function RowCenteredStack({ children, colBelow, sx }) {
  return (
    <Stack
      direction={colBelow ? { xs: "column", [colBelow]: "row" } : "row"}
      gap={1}
      alignItems="center"
      sx={sx}
    >
      {children}
    </Stack>
  );
}

RowCenteredStack.propTypes = {
  children: propTypes.node.isRequired,
  sx: propTypes.object,
  colBelow: propTypes.string,
};

RowCenteredStack.defaultProps = {
  sx: {},
  colBelow: null,
};
