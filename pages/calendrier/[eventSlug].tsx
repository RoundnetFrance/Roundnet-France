import { type FC, Fragment } from "react";
import { getDocument, getDocuments } from "../../helpers/db";

import { Box, Container } from "@mui/material";

import type { GetStaticPaths, GetStaticProps } from "next/types";
import { EventSingleDetails } from "../../components/events/events-single";
import { EventRelated } from "../../components/events/events-single/events-related";
import Head from "../../components/head";
import { Error as ErrorUI, Hero } from "../../components/ui";
import type { Event, ListingEvent } from "../../models/collections/Events";

interface EventSinglePageProps {
  event: Event | null;
  nextEvents: ListingEvent[] | null;
  errorEvent: string | null;
  errorNextEvents: string | null;
}

const EventSinglePage: FC<EventSinglePageProps> = ({
  event,
  nextEvents,
  errorEvent,
  errorNextEvents,
}) => {
  return (
    <Fragment>
      {/* HEAD */}
      <Head
        title={`${event?.title || "Tournoi de Roundnet"} - Roundnet France`}
        description={`${event?.description.substring(0, 130)}...`}
      />

      {/* BODY IMAGE */}
      <Hero image={event?.banner || "/images/misc/placeholder.jpg"} half />

      {/* PAPER CONTENT */}
      <Container
        maxWidth='md'
        sx={{
          position: "relative",
          top: "-35vh",
          mb: "-20vh",
        }}
      >
        {!event ? (
          <Box mt='40vh'>
            <ErrorUI message={errorEvent} />
          </Box>
        ) : (
          <EventSingleDetails event={event} />
        )}

        {!nextEvents ? (
          <ErrorUI message={errorNextEvents} />
        ) : (
          <EventRelated nextEvents={nextEvents} />
        )}
      </Container>
    </Fragment>
  );
};

export const getStaticPaths = (async () => {
  const events = await getDocuments<Event>({
    collection: "events",
    params: { validated: true },
  });
  const paths = events.map((event) => ({
    params: {
      eventSlug: event.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  let errorEvent: string | null = null;
  let errorNextEvents: string | null = null;
  let event: Event | null = null;
  let nextEvents: ListingEvent[] | null = null;

  try {
    event = await getDocument<Event>({
      collection: "events",
      params: { slug: params?.eventSlug },
    });
    // If no event, return 404
    if (!event) {
      return {
        notFound: true,
      };
    }
  } catch (err) {
    errorEvent = err.message;
  }

  // Get the next three events by date (from the current event)
  try {
    nextEvents = await getDocuments<ListingEvent>({
      collection: "events",
      params: { date: { $gt: new Date().toISOString() }, validated: true },
      fields: {
        price: 0,
        inscriptionUrl: 0,
        address: 0,
        organization: 0,
      },
      sort: { date: 1 },
      limit: 3,
    });
  } catch (err) {
    errorNextEvents = err.message;
  }

  return {
    props: {
      event,
      nextEvents,
      errorEvent,
      errorNextEvents,
    },
    revalidate: 600,
  };
}) satisfies GetStaticProps;

export default EventSinglePage;
