import { FC, Fragment } from "react";
import { getDocuments } from "../../helpers/db";

import { Container } from "@mui/material";

import { GetStaticProps } from "next";
import { Events } from "../../components/events";
import Head from "../../components/head";
import { CTAFooter, Error, Hero } from "../../components/ui";
import { ListingEvent } from "../../models/collections/Events";

interface EventsPageProps {
  error: string | null;
  lastAddedEvents: ListingEvent[] | null;
  futureEvents: ListingEvent[] | null;
  pastEvents: ListingEvent[] | null;
}

const EventsPage: FC<EventsPageProps> = ({
  error,
  lastAddedEvents,
  futureEvents,
  pastEvents,
}: EventsPageProps) => {
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
          <Error message={error} />
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
};

export default EventsPage;

export const getStaticProps = (async () => {
  let lastAddedEvents: ListingEvent[] = null;
  let futureEvents: ListingEvent[] = null;
  let pastEvents: ListingEvent[] = null;
  let error: string = null;

  try {
    const events = await getDocuments<ListingEvent>({
      collection: "events",
      params: { validated: true },
      fields: {
        price: 0,
        inscriptionUrl: 0,
        address: 0,
        organization: 0,
      },
      sort: { date: 1 },
    });

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
    lastAddedEvents = [...futureEvents].reverse().slice(0, 3);
  } catch (err) {
    console.error(err);
    error =
      "Une erreur est survenue lors de la récupération du calendrier Roundnet France. Veuillez réessayer plus tard.";
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
}) satisfies GetStaticProps;
