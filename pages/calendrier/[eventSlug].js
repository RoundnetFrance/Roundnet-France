import { getDocuments, getDocument } from "../../helpers/db";
import { Fragment } from "react";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENTS IMPORTS
import Head from "../../components/head";
import Hero from "../../components/ui/hero";
import EventSingleDetails from "../../components/events/events-single";
import EventRelated from "../../components/events/events-single/events-related";

export default function EventSingle({ event, nextEvents }) {
  return (
    <Fragment>
      {/* HEAD */}
      <Head
        title={`${event.title} - Roundnet France`}
        description={event.description.substring(0, 130) + "..."}
      />

      {/* BODY IMAGE */}
      <Hero half />

      {/* PAPER CONTENT */}
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          top: "-25vh",
          mb: "-20vh",
        }}
      >
        <EventSingleDetails event={event} />
        <EventRelated nextEvents={nextEvents} />
      </Container>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const events = await getDocuments("events");
  const paths = events.map((event) => ({
    params: {
      eventSlug: event.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = await getDocument("events", { slug: params.eventSlug });

  // Get the next three events by date (from the current event)
  const nextEvents = await getDocuments(
    "events",
    {
      date: { $gt: new Date().toISOString() },
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

  return {
    props: {
      event: JSON.parse(JSON.stringify(event)),
      nextEvents,
    },
    revalidate: 600,
  };
}
