import { Container } from "@mui/material";
import { getDocuments } from "../helpers/db";
import { Fragment } from "react";

// COMPONENT IMPORTS
import Head from "../components/head";
import PageTitle from "../components/ui/page-title";
import CrossingItems from "../components/ui/crossing-items";
import Error from "../components/ui/error";

export default function PartnersPage({ partners, error }) {
  return (
    <Fragment>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Head title="Partenaires officiels - Fédération Française de Roundnet" />
        <PageTitle title="Partenaires officiels" />
      </Container>
      <Container maxWidth="md" sx={{ py: 4 }}>
        {error ? (
          <Error message={error} />
        ) : (
          <CrossingItems items={partners} height={300} imageFit="contain" />
        )}
      </Container>
    </Fragment>
  );
}

export async function getStaticProps() {
  let partners;
  let error;
  try {
    partners = await getDocuments("partners");
  } catch (err) {
    error = err.message;
  }

  return {
    props: {
      partners: partners || null,
      error: error || null,
    },
    revalidate: 600,
  };
}
