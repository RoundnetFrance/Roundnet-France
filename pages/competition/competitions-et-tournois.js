import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import Criteria from '../../components/competition/tournaments/criteria';

function Tournaments() {
  return (
    <Fragment>
      <Hero
        title="Compétitions et tournois"
        image="/images/hero/competitions-tournois.jpg"
        imagePosition='center center'
        mini
      />

      <Container maxWidth="md" sx={{ my: 4 }}>

        <Box sx={{ pb: 4 }}>
          <Typography variant="h4">Le planning de tous les tournois officiels français</Typography>
          <Divider sx={{ pb: 2 }} />
        </Box>

        <Box sx={{ pb: 4 }}>
          <Typography variant="h5">Les avantages</Typography>
          <Typography variant="body1">
            En tant que fédération sportive nationale, Roundnet France organise et accompagne les tournois officiels français de roundnet par l&apos;ensemble des associations et des joueurs, partout en France. En tant que tournoi officiel, vous bénéficiez de nombreux avantages. D&apos;une part, une <strong>visiblité</strong> sur votre tournoi : la fédération communique sur l&apos;événement sur l&apos;ensemble des réseaux sociaux et ses plateformes de communication. D&apos;autre part, un <strong>accompagnement</strong> : une question ? Pas assez de sets ? La fédération est là pour vous accompagner.
          </Typography>
        </Box>

        <Box sx={{ pb: 4 }}>
          <Typography variant="h5">Les critères</Typography>
          <Typography variant="body1">
            Les tournois indépendants peuvent compter pour le classement national s&apos;ils respectent les critères suivants.
          </Typography>
        </Box>

      </Container >

      <Container maxWidth="lg" sx={{ mb: 4, pb: 4 }}>
        <Criteria />
      </Container>

      <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h5">Calendrier des tournois à venir</Typography>
          <Typography variant="body1">
            Les tournois indépendants peuvent compter pour le classement national s&apos;ils respectent les critères suivants.
          </Typography>
      </Container>

    </Fragment>
  )
}

export default Tournaments
