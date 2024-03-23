import { Stack, type SxProps } from "@mui/material";
import { FC, ReactNode } from "react";

interface RowCenteredStackProps {
  children: ReactNode;
  sx?: SxProps;
  colBelow?: string;
}

const RowCenteredStack: FC<RowCenteredStackProps> = ({
  children,
  colBelow = undefined,
  sx = {},
}) => {
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
};

export default RowCenteredStack;
