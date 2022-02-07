// MUI IMPORTS
import { Box, Typography } from "@mui/material";

// COMPONENT IMPORTS
import Link from "../../components/ui/link";

export default function TimelineSinglePast({ event }) {
  // Trim the description to a maximum of 80 characters and add an ellipsis if it's longer
  const trimmedDescription =
    event.description.length > 80
      ? `${event.description.substring(0, 80)}...`
      : event.description;

  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="body1"
        color="primary"
        sx={{ fontWeight: "bold", mb: 0 }}
      >
        <Link href={`/calendrier/${event.slug}`}>{event.title}</Link>
      </Typography>
      {/* <Typography variant="body1" color="text.disabled" sx={{ mb: 1 }}>
        {trimmedDescription}
      </Typography> */}
      <Typography variant="body1" color="text.disabled" sx={{ mb: 2 }}>
        {new Date(event.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Typography>
    </Box>
  );
}
