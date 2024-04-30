import { FC, useState } from "react";

import { Stack, Divider } from "@mui/material";

import { EventsSidebar } from "./events-sidebar";
import { EventsTimeline } from "./events-timeline";
import { ListingEvent } from "../../models/collections/Events";

interface EventsProps {
  lastAddedEvents: ListingEvent[];
  futureEvents: ListingEvent[];
  pastEvents: ListingEvent[];
}

export const Events: FC<EventsProps> = ({
  lastAddedEvents,
  futureEvents,
  pastEvents,
}) => {
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
};
