import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';

function HallOfFamePage() {
  return (
    <Fragment>
       <Hero
        title="Hall Of Fame"
        image="/images/hero/hall-of-fame.jpg"
        mini
      />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PageTitle title="Ils ont fait l&apos;histoire de Roundnet France" />
        <Typography align="left" variant="body1" sx={{ my: 2 }}>
          Bien que jeune, Roundnet France possède déjà ses personnalités et ses membres historiques. Découvrez les !
        </Typography>
      </Container>
      
    </Fragment>
  )
}

export default HallOfFamePage
