import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import PlanningTable from '../../components/ui/planning-table';

function TournamentsResultsPage() {
  return (
    <Fragment>
      <Hero
        title="Résultats"
        image="/images/hero/results.jpg"
        imagePosition='center 80%'
        mini
      />

      <Container maxWidth="md" sx={{ my: 4}}>
        <PageTitle title="Tous les résultats des tournois de roundnet français" />
        <Typography variant="body1">
          Consultez les résultats de tous les tournois officiel de roundnet français, classés par saison.
        </Typography>
      </Container>

      <Container maxWidth="lg" sx={{ my: 4}}>
      <Typography variant="h6">
          Saison 2022/
        </Typography>
        <Typography variant="body1">
          Pas encore de résultats enregistrés.
        </Typography>
      </Container>

      <Container maxWidth="lg" sx={{ my: 4}}>
      <Typography variant="h6">
          Saison 2021/
        </Typography>
        <PlanningTable resultsTable />
      </Container>




    </Fragment>

  )
}

export default TournamentsResultsPage
