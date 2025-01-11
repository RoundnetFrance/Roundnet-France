import Image from "next/image";

import { Box, Collapse, Divider, Stack, Typography } from "@mui/material";

import EventNoteIcon from "@mui/icons-material/EventNote";

import { RowCenteredStack } from "../ui";
import { TimelineSingle } from "./timeline-single";
import type { ListingEvent } from "../../models/collections/Events";
import type { FC } from "react";

interface EventsTimelineProps {
  events: ListingEvent[];
  fullWidth?: boolean;
}

export const EventsTimeline: FC<EventsTimelineProps> = ({
  events,
  fullWidth = false,
}) => {
  // For each event.date in events, extract the year from the date and create a new array with the events that have the same year
  const eventsByYear = events.reduce((acc, event) => {
    const year = event.date.split("-")[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {} as { [key: string]: ListingEvent[] });

  const timeline = Object.keys(eventsByYear).map((year) => (
    <Box key={year} sx={{ mb: 6 }}>
      <Stack direction='row' alignItems='center' gap={1} sx={{ mb: 4 }}>
        <EventNoteIcon color='primary' fontSize='large' />
        <Typography variant='h4'>
          <strong>{year}</strong>
        </Typography>
      </Stack>

      {eventsByYear[year].map((event) => (
        <Stack direction='column' gap={4} key={event._id}>
          <Collapse in appear>
            <TimelineSingle event={event} />
            <Divider />
          </Collapse>
        </Stack>
      ))}
    </Box>
  ));

  return (
    <Box sx={{ width: { xs: "100%", md: fullWidth ? "100%" : "75%" } }}>
      <Box mb={6}>
        <Typography variant='h4' sx={{ mb: 1 }}>
          Tournois &amp; événements à venir
        </Typography>
        <Typography variant='body1' color='initial'>
          Retrouvez tous les tournois et compétitions officielles et non
          officielles de roundnet en France.{" "}
        </Typography>
        <RowCenteredStack sx={{ mb: 4, mt: 2, ml: 1 }} colBelow='xs'>
          <Box minWidth={50}>
            <Image
              src='/images/logos/roundnet-france-tp.png'
              width={50}
              height={50}
              alt='Roundnet France Official Tournament'
              title='Roundnet France Official Tournament'
            />
          </Box>
          <Typography
            variant='body1'
            color='primary'
            sx={{ fontWeight: "bold" }}
          >
            Les compétitions officielles de la fédération nationale <br />
            sont en bleu et ornées de notre logo !
          </Typography>
        </RowCenteredStack>
        {/* If no events, display error message. */}
        {events.length ? (
          timeline
        ) : (
          <Typography variant='body1' color='initial' fontWeight='bold'>
            Faute ! On dirait qu&apos;aucun événement ne répond à vos critères.
            Essayez peut-être d&apos;autres filtres ?
          </Typography>
        )}
      </Box>
    </Box>
  );
};
