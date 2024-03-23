import { Container } from "@mui/material";
import { FC, Fragment } from "react";
import { getDocuments } from "../helpers/db";

import Head from "../components/head";
import { CrossingItems, Error, PageTitle } from "../components/ui";
import { Partner } from "../models/collections/Partners";

interface PartnersPageProps {
  partners: Partner[] | null;
  error: string | null;
}

const PartnersPage: FC<PartnersPageProps> = ({ partners, error }) => {
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
};

export default PartnersPage;

export async function getStaticProps() {
  let partners: Partner[] = null;
  let error: string = null;
  try {
    partners = await getDocuments<Partner>({ collection: "partners" });
  } catch (err) {
    const { message } = err as Error;
    error = message;
  }

  return {
    props: {
      partners,
      error,
    },
    revalidate: 600,
  };
}
