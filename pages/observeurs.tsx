import { FC, Fragment } from "react";
import { getDocument } from "../helpers/db";
import type { GetStaticProps } from "next";

import { Container, Typography } from "@mui/material";
import Head from "../components/head";
import {
  CTAFooter,
  DocumentHalfImage,
  Error,
  Hero,
  PageTitle,
} from "../components/ui";
import { FileDocument } from "../models/DB";

interface ObserversPageProps {
  observerDocument: FileDocument;
}

const ObserversPage: FC<ObserversPageProps> = ({ observerDocument }) => {
  return (
    <Fragment>
      <Head
        title="Comment observer au roundnet ? Les directives française en terme d'observation"
        description="L'observation est l'équivalent de l'arbitrage pour le roundnet. Venez apprendre à observer grace aux directives et à la formation mise en place par Roundnet France"
      />

      <Hero
        title="Observation et arbitrage"
        image="/images/hero/regles.jpg"
        imagePosition="center 80%"
        mini
      />

      <Container maxWidth="md" sx={{ my: { xs: 4, md: 12 } }}>
        <PageTitle title="Observer des matchs de roundnet" />
        <Typography variant="body1" mb={2}>
          Comme dans tout sport, il faut pouvoir appliquer les règles. Et même
          si l&apos;autoaribtrage peut fonctionner, il est souvent préférable
          d&apos;avoir un parti neutre pour prendre les décisions. Au roundnet
          ce sont les observeurs !
        </Typography>
      </Container>

      {observerDocument ? (
        <DocumentHalfImage
          document={observerDocument}
          title="Directives pour les Observeurs Français 2023"
          description="Vous souhaitez devenir un observeur certifié par Roundnet France ? Vous trouverez dans ce document toutes les directives et conseils liés au rôle d'observeur, ainsi que le lien vers le questionnaire d'entrée pour suivre la formation d'observeur. Que vous soyez un joueur expérimenté ou non, tout le monde peut y apprendre quelque chose et approfondir ses connaissances des règles."
          buttonText="Télécharger les directives"
          image="/images/pages/competition/observeurs/observeurs.jpg"
        />
      ) : (
        <Container
          sx={{
            width: "50%",
          }}
        >
          <Error message="Une erreur est survenue pour récupérer ce document." />
        </Container>
      )}

      <CTAFooter
        title="Vous pensez pouvoir devenir un observeur ?"
        subtitle="Passez à la prochaine étape !"
        mainLink={{
          url: "https://forms.gle/gsdW2838qGJGEN9J7",
          text: "Répondez au questionnaire",
        }}
      />
    </Fragment>
  );
};

export const getStaticProps = (async () => {
  // Try to fetch latest rule document on DB
  try {
    const observerDocument = await getDocument({
      collection: "official-docs",
      params: { doctype: "observers" },
      sort: { _id: -1 },
    });
    return {
      props: {
        observerDocument,
      },
      revalidate: 3600,
    };
  } catch (e) {
    return {
      props: { observerDocument: undefined },
    };
  }
}) satisfies GetStaticProps;

export default ObserversPage;
