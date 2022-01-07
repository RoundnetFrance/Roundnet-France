import { Fragment } from 'react';
import { getDocument } from '../../helpers/db';

// MUI IMPORTS
import { Container, Typography, Divider, Box, CardMedia, Stack, Button } from '@mui/material'

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HalfImage from '../../components/ui/half-image';
import Timeliner from '../../components/ui/timeliner';
import PageTitle from '../../components/ui/page-title';
import ColoredBackground from '../../components/ui/colored-background';
import Head from '../../components/head';

// MUI ICONS
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

// Rules
const rulesItems = [
  {
    key: 1,
    text: '4 joueurs (2 vs 2) sont autour du filet de Roundnet. Equipe A vs Equipe B.',
  },
  {
    key: 2,
    text: 'Un joueur de l\'équipe A sert sur un joueur de l\'équipe B.'
  },
  {
    key: 3,
    text: 'L\'équipe B a trois touches pour renvoyer la balle sur le filet. Ils peuvent librement bouger et se placer autour du filet après le service.'
  },
  {
    key: 4,
    text: 'Si l\'équipe B renvoie la balle sur le filet, l\'équipe A a désormais trois touches pour la renvoyer à son tour.'
  },
  {
    key: 5,
    text: 'L\'échange continue jusqu\'à ce qu\'une équipe ne puisse pas renvoyer la balle.'
  }
]

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

      <Container maxWidth="md" sx={{ py: 4 }}>
        <PageTitle title="Comment jouer au roundnet ?" />
        <Typography variant="body1" sx={{ pb: 4 }}>
          Réputé pour sa facilité de prise en main, le roundnet est un sport populaire qui emprunte au meilleur des mondes de nombreux sports pour le plaisir de tous les joueurs. Pratiquable autant en loisir qu&apos;à haut niveau, il ne possède en son coeur qu&apos;une poignée de règles très simples.
        </Typography>
      </Container>

      <ColoredBackground>
        <Box sx={{
          pb: 4,
        }}>
          <Container maxWidth="sm">
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Typography variant="h4" align="center" color="white">
                <strong>Première chose à savoir : vous pouvez jouer sur n&apos;importe quel terrain. Indoor, gazon, synthétique, terre battue,  neige, boue, béton... Soyez créatifs.</strong>
              </Typography>
              <ArrowCircleDownIcon sx={{ fontSize: 80, color: 'secondary.lightest', mb: 4 }} />
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="md" sx={{
          mb: 4,
          p: 20,
          background: `url(/images/misc/blob-lighter-neutral.svg) no-repeat center center`,
          backgroundSize: 'cover',
        }}>
          <Container maxWidth="sm">
            <Timeliner items={rulesItems} color='black' />
          </Container>
        </Container>

        <Typography align="center" variant="h4" color="white">
          <strong>Si tout cela n&apos;est pas clair, <br />la vidéo ci-dessous devrait faire l&apos;affaire.</strong>
        </Typography>


        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0}
          sx={{
            my: 4,
          }}
        >
          <ArrowCircleDownIcon align="center" sx={{ fontSize: 80, color: 'secondary.lightest', mb: 4 }} />
          <CardMedia component="iframe" src="https://www.youtube.com/embed/vGIrNrLyZZg" sx={{ width: [300, 450, 900, 900], height: [200, 300, 600], border: 'none', boxShadow: 8 }} />

        </Stack>

      </ColoredBackground>



      <HalfImage
        image='/images/pages/competition/regles/regles-pdf.jpg'>

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


