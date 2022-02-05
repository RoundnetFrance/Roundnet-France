// MUI IMPORTS
import { Stack, Box, Typography, Collapse } from "@mui/material";

// MUI ICONS
import EventNoteIcon from "@mui/icons-material/EventNote";

// COMPONENT IMPORTS
import TimelineSingle from "./timeline-single";

export default function EventsTimeline({ events }) {
  // For each event.date in events, extract the year from the date and create a new array with the events that have the same year
  const eventsByYear = events.reduce((acc, event) => {
    const year = event.date.split("-")[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {});

  const timeline = Object.keys(eventsByYear).map((year) => (
    <Box key={year} sx={{ mb: 6 }}>
      <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 4 }}>
        <EventNoteIcon color="primary" fontSize="large" />
        <Typography variant="h4">
          <strong>{year}</strong>
        </Typography>
      </Stack>

      {eventsByYear[year].map((event) => (
        <Stack direction="column" gap={4} key={event._id}>
          <Collapse in={true}>
            <TimelineSingle event={event} />
          </Collapse>
        </Stack>
      ))}
    </Box>
  ));

  return (
    <Box sx={{ width: { xs: "100%", md: "75%" } }}>
      <Typography variant="h4" sx={{ mb: 6 }}>
        Tournois &amp; événements à venir
      </Typography>
      {timeline}
    </Box>
  );
}
