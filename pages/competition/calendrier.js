import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import Criteria from '../../components/competition/tournaments/criteria';
import PlanningTable from '../../components/ui/planning-table';
import PageTitle from '../../components/ui/page-title';

function TournamentsPage() {
  return (
    <Fragment>
      <Hero
        title="Calendrier"
        image="/images/hero/competitions-tournois.jpg"
        imagePosition='center center'
        mini
      />

      <Container maxWidth="md" sx={{ my: 4 }}>

        <PageTitle title="Calendrier des tournois à venir" />
        <Typography variant="body1">
              Le planning des tournois officiels de roundnet pour la saison 2021-2022.
            </Typography>
        </Container>

        <Container maxWidth="lg" sx={{ mb: 4 }}>
          <PlanningTable />
        </Container>

        <Container maxWidth="md" sx={{ my: 4 }}>

          <PageTitle title="Roundnet France accompagne les tournois français" />

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

        <Container maxWidth="lg" sx={{ mb: 4 }}>
          <Criteria />
        </Container>

    </Fragment>
  )
}

export default TournamentsPage
