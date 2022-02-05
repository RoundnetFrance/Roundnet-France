import { useState } from "react";

// MUI IMPORTS
import { Stack, Divider } from "@mui/material";

// COMPONENT IMPORTS
import EventsSidebar from "./events-sidebar";
import EventsTimeline from "./events-timeline";

export default function Events({ events }) {
  // Get only the events that are in the future
  const futureEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    return eventDate > today;
  });

  // Get only the events that are in the past
  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    return eventDate < today;
  });
  // Filter the past events to only show the last 5, in reverse chronological order
  const pastEventsFiltered = pastEvents.slice(0, 5).reverse();

  const [controlledEvents, setControlledEvents] = useState(futureEvents);

  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={4}>
      <EventsSidebar
        pastEvents={pastEventsFiltered}
        setEvents={setControlledEvents}
        events={futureEvents}
      />
      <Divider orientation="vertical" flexItem />
      <EventsTimeline events={controlledEvents} />
    </Stack>
  );
}
