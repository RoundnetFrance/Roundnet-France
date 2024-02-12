import { useState } from "react";

// MUI IMPORTS
import { Stack, Divider } from "@mui/material";

// COMPONENT IMPORTS
import EventsSidebar from "./events-sidebar";
import EventsTimeline from "./events-timeline";

export default function Events({ lastAddedEvents, futureEvents, pastEvents }) {
  const [controlledEvents, setControlledEvents] = useState(futureEvents);

  return (
    <Stack direction={{ xs: "column-reverse", md: "row" }} gap={4}>
      <EventsTimeline events={controlledEvents} />
      <Divider orientation="vertical" flexItem />
      <EventsSidebar
        events={futureEvents}
        setEvents={setControlledEvents}
        pastEvents={pastEvents}
        newEvents={lastAddedEvents}
      />
    </Stack>
  );
}
