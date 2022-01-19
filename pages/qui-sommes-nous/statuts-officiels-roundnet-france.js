import { Fragment } from 'react';
import { getDocument } from '../../helpers/db';

// MUI IMPORTS
import { Container, Typography, Divider, Box, Button } from '@mui/material'

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HalfImage from '../../components/ui/half-image';
import PageTitle from '../../components/ui/page-title';
import Head from '../../components/head';
import CTAFooter from '../../components/ui/cta-footer';

// MUI ICONS

function StatusPage({ officialDoc }) {
  let readableUpdateDate;
  if (officialDoc) {
    readableUpdateDate = new Date(officialDoc.createdAt).toLocaleDateString('fr-FR', {
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
        title="Statuts officiels"
        image="/images/hero/statuts.jpg"
        imagePosition='center 20%'
        mini />

      <Container maxWidth="md" sx={{ my: { xs: 4, md: 12 } }}>
        <PageTitle title="Comment est constituée la fédération française de roundnet ?" />
        <Typography variant="body1" sx={{ mb: 2 }}>
          La fédération est constituée de membres adhérents, qui sont les clubs de roundnet en France. Chaque année, les membres adhérents élisent un Conseil d’Administration (CA). Le CA est composé de membres de plusieurs clubs, il est chargé de diriger la fédération, en lien direct avec les clubs et les joueurs et joueuses de France.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Le CA a un fonctionnement collégial, c’est à dire qu’il n’y a aucune hiérarchie, chaque membre a les mêmes droits et les mêmes devoirs que les autres. Chacun peut intervenir sur les sujets qu’il souhaite. Mais pour simplifier, il y a quand même des équipes spécialisées, car chaque membre a ses sujets de prédilection.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Les équipes sont :
        </Typography>
        <ul>
          <Typography component="li" variant="body1">
            Communauté
          </Typography>
          <Typography component="li" variant="body1">
            Communication
          </Typography>
          <Typography component="li" variant="body1">
            Compétition
          </Typography>
          <Typography component="li" variant="body1">
            Partenariats
          </Typography>
          <Typography component="li" variant="body1">
            Secrétariat
          </Typography>
          <Typography component="li" variant="body1">
            Trésorerie
          </Typography>
        </ul>
      </Container>

      <HalfImage
        image='/images/pages/statuts/telecharger-statuts.jpg'>

        <Typography
          variant="h5"
          color="white"
        >
          <strong>Télécharger les statuts officiels 2021 de Roundnet</strong>
        </Typography>

        <Box width="50%">
          <Divider
            color="white"
            sx={{
              mb: 4,
            }} />
        </Box>

        {/* <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "white",
          }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid porro necessitatibus eius quisquam suscipit laborum, odit in, cumque alias quam quibusdam! Assumenda consequatur delectus dolorum est consequuntur, veniam aperiam saepe voluptate, commodi ducimus beatae dolores dolorem odio velit ullam fuga minima doloribus voluptatem.
        </Typography> */}

        {officialDoc?.description && (
          <Typography
            variant="body1"
            sx={{
              color: "white",
              mb: 4,
            }}>
            {officialDoc.description}
          </Typography>
        )}


        <Button color="secondary" size="large" variant="contained" href={officialDoc?.url || '/docs/regles-2021.pdf'} target="_blank">
          Télécharger les statuts
        </Button>

        <Typography variant="body2" mt={1} color="white">
          <strong>Note de mise à jour : </strong>{officialDoc?.version || 'officielle'}
          <br />
          Dernière mise à jour : {readableUpdateDate || new Date().toLocaleDateString('fr-FR', { year: 'numeric' })}
        </Typography>
      </HalfImage>

      <CTAFooter
        title="Vous avez une question précise à nous demander ?"
        subtitle="Contactez-nous directement via le formulaire du site."
        mainLink={{
          url: '/qui-sommes-nous/contact',
          text: 'Nous écrire'
        }}
      />

    </Fragment >
  )
}

export async function getStaticProps() {
  // Try to fetch latest officialDoc document on DB
  try {
    const officialDocument = await getDocument('official-docs', null, null, { _id: -1 });
    const officialDoc = JSON.parse(JSON.stringify(officialDocument));
    return {
      props: {
        officialDoc,
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

export default StatusPage;


