import { Fragment } from "react";
import { getDocuments } from "../../helpers/db";

// MUI IMPORTS
import { Container, Typography, Box, Paper, Divider } from "@mui/material";

// COMPONENT IMPORTS
import Hero from "../../components/ui/hero";
import HeaderWithIcon from "../../components/ui/header-with-icon";
import PageTitle from "../../components/ui/page-title";
import CrossingItems from "../../components/ui/crossing-items";
import CTAFooter from "../../components/ui/cta-footer";
import Error from "../../components/ui/error";
import Head from "../../components/head";

export default function ClubListPage({ clubs, error }) {
  return (
    <Fragment>
      <Head
        title="Liste des clubs de roundnet en France - Roundnet France"
        description="Liste des clubs de roundnet en France. Trouvez le club qui vous correspond le mieux, proche de chez vous !"
      />

      <Hero
        title="Liste des clubs"
        image="/images/hero/liste-clubs.jpg"
        imagePosition="center 60%"
        mini
      />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Où jouer en France" />
        <Typography variant="body1" sx={{ pb: 4 }}>
          Le roundnet, particulièrement en France, est un sport dont les clubs
          et les pratiquants augmentent de jour en jour. Vous ne le savez peut
          être pas encore, mais on joue partout, et sûrement pas très loin de là
          où vous êtes ? Trouvez des clubs et sessions près de chez vous !
        </Typography>

        <Box mb={4}>
          <HeaderWithIcon icon="pin_drop" title="Carte des clubs" />
        </Box>

        <Paper elevation={6} sx={{ overflow: "hidden", p: 1, pb: 0.5 }}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1xtrSWM6WZKgx9nHKAXTdfTSLBVWUyCl7&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </Paper>
      </Container>

      <Divider />

      <Container maxWidth="sm" sx={{ my: 4 }}>
        <HeaderWithIcon icon="people" title="Liste des clubs" />
        {error ? (
          <Error message={error} />
        ) : (
          <CrossingItems items={clubs} roundedItems roundedEverywhere />
        )}
      </Container>

      <Divider />

      <CTAFooter
        title="Vous souhaitez apparaître sur cette page ?"
        subtitle="Adhérez à Roundnet France et rejoignez l'une des communautés de Roundnet les plus actives de France."
        mainLink={{
          url: "/clubs-et-communautes/adherer-a-roundnet-france",
          text: "S'informer sur l'adhésion",
        }}
      />
    </Fragment>
  );
}

export async function getStaticProps() {
  let clubs;
  let error;

  try {
    clubs = await getDocuments("clubs", { validated: true }, null, {
      chip: 1,
    });
  } catch (err) {
    error = err.message;
  }

  return {
    props: {
      clubs: clubs || null,
      error: error || null,
    },
    revalidate: 600,
  };
}
