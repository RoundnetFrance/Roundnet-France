// MUI IMPORTS
import { Stack, Box, Typography, Collapse } from "@mui/material";

// MUI ICONS
import EventNoteIcon from "@mui/icons-material/EventNote";

// COMPONENT IMPORTS
import TimelineSingle from "./timeline-single";

export default function EventsTimeline({ events }) {
  const timeline = events.map((event) => (
    <Collapse in appear key={event._id} timeout={500} unmountOnExit>
      <TimelineSingle event={event} />
    </Collapse>
  ));

  return (
    <Box sx={{ width: { xs: "100%", md: "75%" } }}>
      <Typography variant="h4" sx={{ mb: 6 }}>
        Tournois &amp; événements à venir
      </Typography>
      <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 4 }}>
        <EventNoteIcon color="primary" fontSize="large" />
        <Typography variant="h4">
          <strong>2022</strong>
        </Typography>
      </Stack>
      <Stack direction="column" gap={4}>
        {timeline}
      </Stack>
    </Box>
  );
}
