import { Box, Divider, Typography } from "@mui/material";
import type { FC } from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Divider sx={{ pb: 2 }} />
    </Box>
  );
};

export default PageTitle;
