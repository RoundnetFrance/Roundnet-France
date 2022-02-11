import { getDocuments, getDocument } from "../../helpers/db";
import { Fragment } from "react";

// MUI IMPORTS
import { Container, Box } from "@mui/material";

// COMPONENTS IMPORTS
import Head from "../../components/head";
import Hero from "../../components/ui/hero";
import EventSingleDetails from "../../components/events/events-single";
import EventRelated from "../../components/events/events-single/events-related";
import Error from "../../components/ui/error";

export default function EventSingle({
  event,
  nextEvents,
  errorEvent,
  errorNextEvents,
}) {
  return (
    <Fragment>
      {/* HEAD */}
      <Head
        title={`${event?.title || "Tournoi de Roundnet"} - Roundnet France`}
        description={event?.description.substring(0, 130) + "..."}
      />

      {/* BODY IMAGE */}
      <Hero image={event?.banner || "/images/misc/placeholder.jpg"} half />

      {/* PAPER CONTENT */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          top: "-35vh",
          mb: "-20vh",
        }}
      >
        {errorEvent ? (
          <Box mt="40vh">
            <Error message={errorEvent} />
          </Box>
        ) : (
          <EventSingleDetails event={event} />
        )}

        {errorNextEvents ? (
          <Error message={errorNextEvents} />
        ) : (
          <EventRelated nextEvents={nextEvents} />
        )}
      </Container>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const events = await getDocuments("events", { validated: true });
  const paths = events.map((event) => ({
    params: {
      eventSlug: event.slug,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let errorEvent;
  let errorNextEvents;
  let event;
  let nextEvents;

  try {
    event = await getDocument("events", { slug: params.eventSlug });
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
    nextEvents = await getDocuments(
      "events",
      {
        date: { $gt: new Date().toISOString() },
        validated: true,
      },
      {
        price: 0,
        inscriptionUrl: 0,
        address: 0,
        organization: 0,
      },
      {
        date: 1,
      },
      3
    );
  } catch (err) {
    errorNextEvents = err.message;
  }

  return {
    props: {
      event: event ? JSON.parse(JSON.stringify(event)) : null,
      nextEvents: nextEvents || null,
      errorEvent: errorEvent || null,
      errorNextEvents: errorNextEvents || null,
    },
    revalidate: 600,
  };
}
