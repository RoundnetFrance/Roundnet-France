import propTypes from "prop-types";

// MUI IMPORTS
import { Box, Divider, Typography } from "@mui/material";

function PageTitle({ title }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Divider sx={{ pb: 2 }} />
    </Box>
  );
}

PageTitle.propTypes = {
  title: propTypes.string.isRequired,
};

export default PageTitle;
