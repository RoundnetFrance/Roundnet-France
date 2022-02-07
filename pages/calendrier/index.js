import { Fragment } from "react";
import { getDocuments } from "../../helpers/db";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import Head from "../../components/head";
import Hero from "../../components/ui/hero";
import Events from "../../components/events";
import CTAFooter from "../../components/ui/cta-footer";

export default function HomePage({ events }) {
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
        <Events events={events} />
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
  const events = await getDocuments(
    "events",
    null,
    {
      price: 0,
      inscriptionUrl: 0,
      address: 0,
      organization: 0,
    },
    { date: 1 }
  );
  console.log(events);
  return {
    props: {
      events,
    },
    revalidate: 600,
  };
}
