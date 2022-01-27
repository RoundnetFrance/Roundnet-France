import { Container } from "@mui/material";
import { getDocuments } from "../helpers/db";
import { Fragment } from "react";

// COMPONENT IMPORTS
import Head from "../components/head";
import PageTitle from "../components/ui/page-title";
import CrossingItems from "../components/ui/crossing-items";

export default function PartnersPage({ partners }) {
  return (
    <Fragment>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Head title="Partenaires officiels - Fédération Française de Roundnet" />
        <PageTitle title="Partenaires officiels" />
      </Container>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <CrossingItems items={partners} height={300} imageFit="contain" />
      </Container>
    </Fragment>
  );
}

export async function getStaticProps() {
  const partners = await getDocuments("partners");
  return {
    props: {
      partners,
    },
  };
}
