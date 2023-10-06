import { Fragment } from "react";
import { getDocument } from "../helpers/db";

// MUI IMPORTS
import { Container, Typography } from "@mui/material";

// COMPONENT IMPORTS
import Hero from "../components/ui/hero";
import PageTitle from "../components/ui/page-title";
import Head from "../components/head";
import CTAFooter from "../components/ui/cta-footer";
import DocumentHalfImage from "../components/ui/document-half-image";

function ObserversPage({ obs }) {
  let readableUpdateDate;
  if (obs) {
    readableUpdateDate = new Date(obs.createdAt).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

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

      <DocumentHalfImage
        document={obs}
        title="Directives pour les Observeurs Français 2023"
        description="Vous souhaitez devenir un observeur certifié par Roundnet France ? Vous trouverez dans ce document toutes les directives et conseils liés au rôle d'observeur, ainsi que le lien vers le questionnaire d'entrée pour suivre la formation d'observeur. Que vous soyez un joueur expérimenté ou non, tout le monde peut y apprendre quelque chose et approfondir ses connaissances des règles."
        buttonText="Télécharger les directives"
        image="/images/pages/competition/observeurs/observeurs.jpg"
      />

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
}

export async function getStaticProps() {
  // Try to fetch latest rule document on DB
  try {
    const ruleDocument = await getDocument(
      "official-docs",
      { doctype: "observers" },
      null,
      { _id: -1 }
    );
    const obs = JSON.parse(JSON.stringify(ruleDocument));
    return {
      props: {
        obs,
      },
      revalidate: 3600,
    };
  } catch (e) {
    // Return an error on props to display error message in UI
    return {
      props: { error: true },
    };
  }
}

export default ObserversPage;
