import { Fragment } from "react";
import { getDocuments } from "../../helpers/db";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import Head from "../../components/head";
import Hero from "../../components/ui/hero";
import Events from "../../components/events";
import CTAFooter from "../../components/ui/cta-footer";
import Error from "../../components/ui/error";

export default function EventsPage({
  error,
  lastAddedEvents,
  futureEvents,
  pastEvents,
}) {
  return (
    <Fragment>
      <Head
        title="Events et tournois de roundnet en France - Roundnet France"
        description="Retrouvez tous les tournois et compétitions officielles et non officielles du roundnt en France"
      />

      <Hero
        title="Calendrier"
        image="/images/hero/calendrier.jpg"
        imagePosition="center 30%"
        mini
      />
      <Container maxWidth="lg" sx={{ my: 8 }}>
        {error ? (
          <Error error={error} />
        ) : (
          <Events
            lastAddedEvents={lastAddedEvents}
            futureEvents={futureEvents}
            pastEvents={pastEvents}
          />
        )}
      </Container>

      <CTAFooter
        title="Proposez votre événement !"
        subtitle="Vous avez une idée de tournoi ou d'événement ? Nous vous aidons à organiser cette activité en France."
        mainLink={{
          url: "/calendrier/ajouter",
          text: "Ajouter votre tournoi",
        }}
      />
    </Fragment>
  );
}

export async function getStaticProps() {
  let lastAddedEvents = [];
  let futureEvents = [];
  let pastEvents = [];
  let error = false;

  try {
    const events = await getDocuments(
      "events",
      { validated: true },
      {
        price: 0,
        inscriptionUrl: 0,
        address: 0,
        organization: 0,
      },
      { date: -1 }
    );

    // [MAIN TIMELINE] Get only the events that are in the future and sort them by event.date
    futureEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      const today = new Date();
      return eventDate > today;
    });

    // [PAST EVENTS SIDE] Get only the 5 last events that are in the past, in reverse chronological order
    pastEvents = events
      .filter((event) => {
        const eventDate = new Date(event.date);
        const today = new Date();
        return eventDate < today;
      })
      .slice(0, 5)
      .reverse();

    // [LASTLY ADDED EVENTS SIDE] Get only the three newer events set in the future
    lastAddedEvents = futureEvents.reverse().slice(0, 3);
  } catch (err) {
    console.log(err);
    error = err.message;
  }

  return {
    props: {
      futureEvents,
      pastEvents,
      lastAddedEvents,
      error,
    },
    revalidate: 600,
  };
}
