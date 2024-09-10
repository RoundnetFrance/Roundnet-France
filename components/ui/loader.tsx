import { Stack, CircularProgress } from "@mui/material";
import type { FC } from "react";

const Loader: FC = () => {
  return (
    <Stack sx={{ width: "100%" }} justifyContent="center" alignItems="center">
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
