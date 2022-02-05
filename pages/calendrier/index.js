import { Fragment } from "react";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import Head from "../../components/head";
import PageTitle from "../../components/ui/page-title";
import Hero from "../../components/ui/hero";
import Events from "../../components/events";

export default function HomePage({ events }) {
  return (
    <Fragment>
      <Head
        title="Events et tournois de roundnet en France - Roundnet France"
        description="Retrouvez tous les tournois et compétitions officielles et non officielles du roundnt en France"
      />

      <Hero
        title="Tournois et événements à venir"
        image="/images/hero/boutique.jpg"
        imagePosition="center 35%"
        mini
      />
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <PageTitle title="Calendrier" />

        <Events events={events} />
      </Container>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 600,
  };
}
