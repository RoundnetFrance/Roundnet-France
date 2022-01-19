import { Fragment } from 'react';
import { getDocument } from '../helpers/db';

// MUI IMPORTS
import { Container, Typography, Divider, Box, Button } from '@mui/material'

// COMPONENT IMPORTS
import Hero from '../components/ui/hero';
import HalfImage from '../components/ui/half-image';
import PageTitle from '../components/ui/page-title';
import Head from '../components/head';
import CTAFooter from '../components/ui/cta-footer';

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
        <Typography variant="body1" color="initial">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quisquam, illum architecto laboriosam sequi illo, cupiditate dolore vero ex perspiciatis, quae modi libero atque reiciendis aperiam sed velit in alias dignissimos porro necessitatibus. Rem sint, optio voluptatibus, necessitatibus magnam expedita blanditiis provident repellat corrupti, cumque aliquam omnis ipsam labore nam voluptatum sapiente dolor ad a natus quis? Aliquam deserunt quibusdam, veniam ipsa aperiam explicabo velit, numquam voluptas quasi, nihil obcaecati nesciunt nisi dolores. Explicabo eaque illum voluptatem odio. Commodi distinctio quidem id voluptatum atque voluptates debitis ratione illum omnis repellat quam cum excepturi tempore et laboriosam, labore accusantium similique vero, perferendis, unde ducimus qui! Quasi, modi cumque vero perferendis ad necessitatibus cupiditate ipsa minima hic cum obcaecati magni sit voluptate voluptatibus! Quas exercitationem doloremque illo, pariatur magni odit!
        </Typography>
      </Container>

      <HalfImage
        image='/images/pages/competition/regles/regles-pdf.jpg'
      >

        <Typography
          variant="h5"
          color="white"
        >
          <strong>Règles officielles 2021 de Roundnet</strong>
        </Typography>

        <Box width="50%">
          <Divider
            color="white"
            sx={{
              mb: 4,
            }} />
        </Box>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "white",
          }}>
          Distance au service, gênes, cas particuliers : pour ceux qui souhaitent être incollables, vous pouvez télécharger les règles officielles de roundnet, éditées par Spikeball et valables en tournoi, en cliquant sur le bouton ci-dessous (et en français !).
        </Typography>

        {rule?.description && (
          <Typography
            variant="body1"
            sx={{
              color: "white",
              mb: 4,
            }}>
            {rule.description}
          </Typography>
        )}


        <Button color="secondary" size="large" variant="contained" href={rule?.url || '/docs/regles-2021.pdf'} target="_blank">
          Télécharger les règles
        </Button>

        <Typography variant="body2" mt={1} color="white">
          Version {rule?.version || 'officielle'}
          <br />
          Dernière mise à jour : {readableUpdateDate || new Date().toLocaleDateString('fr-FR', { year: 'numeric' })}
        </Typography>
      </HalfImage>

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
    const ruleDocument = await getDocument('rules', null, null, { _id: -1 });
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


