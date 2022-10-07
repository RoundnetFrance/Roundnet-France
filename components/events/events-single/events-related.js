// MUI IMPORTS
import { Typography, Box, Button, Divider } from "@mui/material";

// COMPONENT IMPORTS
import TimelineSingle from "../../../components/events/timeline-single";
import Link from "../../../components/ui/link";

export default function EventRelated({ nextEvents }) {
  const nextEventsList = nextEvents.map((event) => (
    <Box key={event._id}>
      <TimelineSingle event={event} withYear />
      <Divider />
    </Box>
  ));

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4 }}>
        Prochains Tournois
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
