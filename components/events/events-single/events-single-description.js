import propTypes from "prop-types";

// MUI IMPORTS
import { Box, Icon, Typography } from "@mui/material";

// COMPONENT IMPORTS
import RowCenteredStack from "../../ui/row-centered-stack";

export default function EventSingleDescription({ description }) {
  return (
    <Box
      sx={{
        my: 2,
        py: 2,
        minWidth: { xs: "100%", md: "60%" },
        maxWidth: { xs: "100%", md: "60%" },
      }}
    >
      <RowCenteredStack sx={{ mb: 1 }}>
        <Icon>info</Icon>
        <Typography variant="h5" color="initial" sx={{ fontWeight: "bold" }}>
          À propos de l&apos;événement
        </Typography>
      </RowCenteredStack>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
        {description}
      </Typography>
    </Box>
  );
}

EventSingleDescription.propTypes = {
  description: propTypes.string.isRequired,
};
