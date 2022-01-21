import { Fragment } from 'react';
import { getDocument } from '../helpers/db';

// MUI IMPORTS
import { Container, Typography } from '@mui/material'

// COMPONENT IMPORTS
import Hero from '../components/ui/hero';
import PageTitle from '../components/ui/page-title';
import Head from '../components/head';
import CTAFooter from '../components/ui/cta-footer';
import DocumentHalfImage from '../components/ui/document-half-image';

function RulesPage({ rule }) {
  let readableUpdateDate;
  if (rule) {
    readableUpdateDate = new Date(rule.createdAt).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <Fragment>
      <Head
        title="Comment jouer au roundnet ? Les règles du roundnet"
        description="Réputé pour sa facilité de prise en main, le roundnet est un sport populaire qui emprunte au meilleur des mondes de nombreux sports pour le plaisir de tous les joueurs. "
      />

      <Hero
        title="Règles"
        image="/images/hero/regles.jpg"
        imagePosition='center 80%'
        mini />

      <Container maxWidth="md" sx={{ my: { xs: 4, md: 12 } }}>
        <PageTitle title="Jouer au roundnet selon les règles officielles" />
        <Typography variant="body1" mb={2}>
          La fédération française de roundnet met régulièrement à jour les règles. Les règles ci-dessous sont la référence des compétitions officielles françaises. N’oubliez pas que le fair-play est la première règle de notre sport !
        </Typography>
        <Typography variant="body1">
          Les règles modifiées dans la dernière version sont surlignées en jaune.
        </Typography>
      </Container>

      <DocumentHalfImage
        document={rule}
        title="Règles officielles 2021 de Roundnet"
        description="Distance au service, gênes, cas particuliers : pour ceux qui souhaitent être incollables, vous pouvez télécharger les règles officielles de roundnet et valables en tournoi, en cliquant sur le bouton ci-dessous (et en français !)."
        buttonText="Télécharger les règles"
      />

      <CTAFooter
        title="Vous vous sentez prêts à en découdre ?"
        subtitle="Passez à la prochaine étape !"
        mainLink={{
          url: '/clubs-et-communautes/liste-des-clubs',
          text: 'Inscrivez votre club',
        }}
        altLink={{
          url: '/competition/calendrier',
          text: 'Participez à un tournoi',
        }}
      />
    </Fragment >
  )
}

export async function getStaticProps() {
  // Try to fetch latest rule document on DB
  try {
    const ruleDocument = await getDocument('official-docs', { doctype: 'rules' }, null, { _id: -1 });
    const rule = JSON.parse(JSON.stringify(ruleDocument));
    return {
      props: {
        rule,
      },
      revalidate: 3600,
    }
  }
  // Return an error on props to display error message in UI
  catch (e) {
    return {
      props: { error: true },
    }
  }
}

export default RulesPage;


