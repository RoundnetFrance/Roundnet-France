import propTypes from "prop-types";

import { Stack } from "@mui/material";

export default function RowCenteredStack({ children, sx }) {
  return (
    <Stack direction="row" gap={1} alignItems="center" sx={sx}>
      {children}
    </Stack>
  );
}

RowCenteredStack.propTypes = {
  children: propTypes.node.isRequired,
  sx: propTypes.object,
};

RowCenteredStack.defaultProps = {
  sx: {},
};
