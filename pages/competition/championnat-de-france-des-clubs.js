import { Fragment } from "react";
import { getDocument } from "../../helpers/db";

// MUI IMPORTS
import { Container, Typography, Divider } from "@mui/material";

// COMPONENTS IMPORTS
import Hero from "../../components/ui/hero";
import PageTitle from "../../components/ui/page-title";
import InfoBlock from "../../components/ui/info-block";
import HeaderWithIcon from "../../components/ui/header-with-icon";
import FeaturedItems from "../../components/ui/featured-items";
import CTAFooter from "../../components/ui/cta-footer";
import Head from "../../components/head";
import DocumentHalfImage from "../../components/ui/document-half-image";

// CONTENT
import { infoRIC, featuredRIC } from "../../contents/competition";

export default function TournamentsResultsPage({ document }) {
  return (
    <Fragment>
      <Head
        title="Championnat de France des clubs - Roundnet France"
        description="La Championnat de France des clubs"
      />
      <Hero
        title="Championnat de France des clubs"
        image="/images/hero/results.jpg"
        imagePosition="center 80%"
        mini
      />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Le rendez-vous compétitif des clubs français" />
        <Typography variant="body1">
          Le championnat de France des clubs représentent l&apos;initiative de
          Roundnet France de se faire rencontrer les différents viviers de
          joueurs nationaux.
        </Typography>

        <InfoBlock
          imageToLeft
          height={450}
          items={infoRIC}
          title="Comment se déroulent le championnat de France des clubs ?"
          image="/images/pages/competition/inter-clubs/inter-club.jpg"
          description="Des squads représentant les clubs français s'affronterons afin de déterminer le meilleur club français. Retrouvez toutes les informations dans le document en bas de page."
        />
      </Container>
      <Divider />
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <HeaderWithIcon title="Les avantages du format" icon="help_center" />

        <FeaturedItems items={featuredRIC} />
      </Container>
      <Divider />
      <DocumentHalfImage
        document={document}
        title="Le document officiel du Championnat de France des clubs"
        description="Le document officiel de le Championnat de France des clubs est disponible en PDF pour connaître tous les détails de l'organisation de cette compétition."
        image="/images/pages/competition/inter-clubs/inter-club-regles.jpg"
      />
    </Fragment>
  );
}

export async function getStaticProps() {
  let error;
  let document;

  try {
    const RICDocument = await getDocument(
      "official-docs",
      { doctype: "ric" },
      null,
      { _id: -1 }
    );
    document = JSON.parse(JSON.stringify(RICDocument));
  } catch (err) {
    error = err.message;
  }
  return {
    props: {
      document: document || null,
      error: error || null,
    },
    revalidate: 3600,
  };
}
