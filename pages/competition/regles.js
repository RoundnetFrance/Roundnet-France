import { Fragment } from 'react'

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HalfImage from '../../components/ui/half-image';
import Timeliner from '../../components/ui/timeliner';
import PageTitle from '../../components/ui/page-title';

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

function RulesPage() {
  return (
    <Fragment>

      <Hero
        title="Règles"
        image="/images/hero/regles.jpg"
        imagePosition='center 80%'
        mini />

      <Container maxWidth="md" sx={{ py: 4 }}>

        <PageTitle title="Comment jouer au roundnet ?" />

        <Box sx={{ pb: 4 }}>
          <Typography variant="h6" align="center">
            Première chose à savoir : vous pouvez jouer sur n&apos;importe quel terrain. Indoor, gazon, synthétique, terre battue,  neige, boue, béton... Soyez créatifs.
          </Typography>
        </Box>

        <Box sx={{ pb: 4 }}>
          <Timeliner items={rulesItems} />
        </Box>

        <Box sx={{ pb: 4 }}>
          <Typography align="center" variant="h6">
            Si tout cela n&apos;est pas clair, la vidéo ci-dessous devrait faire l&apos;affaire.
          </Typography>
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <CardMedia component="iframe" src="https://www.youtube.com/embed/vGIrNrLyZZg" sx={{ width: [300, 450, 900, 900], height: [200, 300, 600] }} />

        </Stack>

      </Container>
      <HalfImage
        image='/images/pages/competition/regles/regles-pdf.jpg'>

        <Typography
          variant="h5"
          color="white"
        >
          Règles officielles 2021 de Roundnet
        </Typography>
      
        <Divider
          color="white"
          sx={{
            mb: 4,
          }} />

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "white",
          }}>
          Distance au service, gênes, cas particuliers : pour ceux qui souhaitent être incollables, vous pouvez télécharger les règles officielles de roundnet, éditées par Spikeball et valables en tournoi, en cliquant sur le bouton ci-dessous (et en français !).
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            mb: 4,
          }}>
          Les nouvelles règles ajoutées en 2021 (consecutive blocks, 7 feet serve...) sont surlignées en jaune dans le document.
        </Typography>

        <Button variant="contained" href="/docs/regles-2021.pdf">
          Télécharger les règles 2021
        </Button>
      </HalfImage>
    </Fragment>
  )
}

export default RulesPage
