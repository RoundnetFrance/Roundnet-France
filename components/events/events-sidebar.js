// MUI IMPORTS
import { Box, Typography, Stack } from "@mui/material";

// COMPONENT IMPORTS
import FilterEvents from "./filter-events";
import TimelineSingleMini from "./timeline-single-mini";

export default function EventsSidebar({
  pastEvents,
  events,
  setEvents,
  newEvents,
}) {
  const pastTimeline = pastEvents.map((event) => (
    <TimelineSingleMini key={event._id} event={event} />
  ));

  const newlyAddedTimeline = newEvents.map((event) => (
    <TimelineSingleMini key={event._id} event={event} />
  ));

  return (
    <Stack direction="column" gap={4} sx={{ width: { xs: "100%", md: "25%" } }}>
      <Box>
        <Typography variant="h5" color="initial" sx={{ mb: 2 }}>
          Filtrer
        </Typography>
        <FilterEvents events={events} setEvents={setEvents} />
      </Box>
      <Box>
        <Typography variant="h5" color="initial" sx={{ mb: 2 }}>
          Derniers ajouts
        </Typography>
        {newlyAddedTimeline}
      </Box>
      <Box>
        <Typography variant="h5" color="initial" sx={{ mb: 2 }}>
          Evenements passés
        </Typography>
        {pastTimeline}
      </Box>
    </Stack>
  );
}
