// MUI IMPORTS
import { Typography, Box, Button } from "@mui/material";

// COMPONENT IMPORTS
import TimelineSingle from "../../../components/events/timeline-single";
import Link from "../../../components/ui/link";

export default function EventRelated({ nextEvents }) {
  const nextEventsList = nextEvents.map((event) => (
    <TimelineSingle key={event.id} event={event} withYear />
  ));

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4 }}>
        Autres Tournois
      </Typography>
      {nextEventsList}

      <Link href="/calendrier" decoration="none">
        <Button variant="contained" sx={{ mt: 2 }}>
          Tous les tournois
        </Button>
      </Link>
    </Box>
  );
}
