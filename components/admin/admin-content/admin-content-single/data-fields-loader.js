import { Fragment } from "react";

// MUI IMPORTS
import { Skeleton, Stack, Divider, Box } from "@mui/material";

export default function DataFieldsLoader() {
  return (
    <Fragment>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 0, md: 4 }}
        alignItems="flex-start"
        my={2}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 1, md: 2 }}
          sx={{ width: "180px", maxWidth: "180px", pt: 0.5 }}
        >
          <Skeleton variant="rectangular" width={30} height={30} />
          <Skeleton variant="rectangular" width={120} height={30} />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ width: "100%" }}>
          <Skeleton width="100%" height={50} />
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 0, md: 4 }}
        alignItems="flex-start"
        my={2}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 1, md: 2 }}
          sx={{ width: "180px", maxWidth: "180px", pt: 0.5 }}
        >
          <Skeleton variant="rectangular" width={30} height={30} />
          <Skeleton variant="rectangular" width={120} height={30} />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ width: "100%" }}>
          <Skeleton width="100%" height={200} />
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 0, md: 4 }}
        alignItems="flex-start"
        my={2}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 1, md: 2 }}
          sx={{ width: "180px", maxWidth: "180px", pt: 0.5 }}
        >
          <Skeleton variant="rectangular" width={30} height={30} />
          <Skeleton variant="rectangular" width={120} height={30} />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ width: "100%" }}>
          <Skeleton width="100%" height={50} />
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 0, md: 4 }}
        alignItems="flex-start"
        my={2}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 1, md: 2 }}
          sx={{ width: "180px", maxWidth: "180px", pt: 0.5 }}
        >
          <Skeleton variant="rectangular" width={30} height={30} />
          <Skeleton variant="rectangular" width={120} height={40} />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ width: "100%" }}>
          <Skeleton width="100%" height={50} />
        </Box>
      </Stack>
    </Fragment>
  );
}
