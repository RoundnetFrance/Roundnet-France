import { Fragment } from "react";

// MUI IMPORTS
import { Box } from "@mui/material";

// COMPONENTS IMPORTS
import Hero from "../../components/ui/hero";
import PageTitle from "../../components/ui/page-title";
import Head from "../../components/head";
import CTAFooter from "../../components/ui/cta-footer";

function TournamentsPage({ tournamentCalendar, error }) {
  return (
    <Fragment>
      <Head
        title="Calendrier des tournois de roundnet en France - Roundnet France"
        description="Le planning des tournois officiels de roundnet pour la saison 2021-2022."
      />

      <Hero
        title="Calendrier"
        image="/images/hero/competitions-tournois.jpg"
        imagePosition="center center"
        mini
      />

      <Box my={12}>
        <CTAFooter
          title="Le calendrier officiel arrive bientôt !"
          subtitle="En attendant, découvrez un club près de chez vous"
          mainLink={{
            text: "Découvrir les clubs",
            url: "/clubs-et-communautes/liste-des-clubs",
          }}
          altLink={{
            text: "Entrer dans la compétition",
            url: "/competition/coupe-de-france-roundnet",
          }}
        />
      </Box>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default TournamentsPage;
