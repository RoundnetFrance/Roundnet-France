import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { type Breakpoint, useTheme } from "@mui/material/styles";
import type { ReactNode } from "react";

interface BoxWrapperProps {
  children: ReactNode;
  title: string;
  size?: Breakpoint;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  noValidate?: boolean;
}

function BoxWrapper({
  children,
  title,
  size = "md",
  onSubmit,
  noValidate = false,
}: Readonly<BoxWrapperProps>) {
  const theme = useTheme();
  const smallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        py: 4,
      }}
    >
      <Container maxWidth={size} disableGutters={smallDevice}>
        <Typography
          variant="h6"
          component="h3"
          sx={{ mb: 1, px: smallDevice ? 2 : 0 }}
        >
          {title}/
        </Typography>
        <Paper variant="outlined" sx={{ p: 4 }}>
          <Box
            component={onSubmit ? "form" : "div"}
            onSubmit={onSubmit}
            noValidate={noValidate}
          >
            <Stack direction="column" spacing={2}>
              {children}
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Stack>
  );
}

export default BoxWrapper;
