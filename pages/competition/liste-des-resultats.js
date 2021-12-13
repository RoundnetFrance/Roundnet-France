import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';

function TournamentsResultsPage() {
  return (
    <Fragment>
      <Hero
        title="Résultats"
        image="/images/hero/results.jpg"
        imagePosition='center 80%'
        mini
      />
      <Container maxWidth="md" sx={{ py: 4}}>
        <PageTitle title="Le classement français officiel de roundnet" />
      </Container>
    </Fragment>

  )
}

export default TournamentsResultsPage
