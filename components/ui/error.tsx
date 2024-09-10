import { Alert, type SxProps } from "@mui/material";
import type { FC } from "react";

interface ErrorProps {
  message?: string | null;
  sx?: SxProps;
}

const ErrorUI: FC<ErrorProps> = ({
  message = "Une erreur est survenue",
  sx,
}) => {
  return (
    <Alert severity='error' sx={{ my: 2, ...sx }}>
      {message}
    </Alert>
  );
};

export default ErrorUI;
