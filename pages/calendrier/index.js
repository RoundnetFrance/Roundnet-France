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
      date: 1,
      dateEnd: 1,
      description: 1,
      title: 1,
      slug: 1,
      type: 1,
      format: 1,
      participants: 1,
      field: 1,
      image: 1,
      city: 1,
      category: 1,
    },
    { date: 1 }
  );
  return {
    props: {
      events,
    },
    revalidate: 600,
  };
}
