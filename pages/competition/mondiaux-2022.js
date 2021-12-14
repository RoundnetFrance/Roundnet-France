import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';

function WorldPage() {
  return (
    <Fragment>
      <Hero
        title="Mondiaux 2022"
        image="/images/hero/hall-of-fame.jpg"
        mini
      />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PageTitle title="Comment participer aux championnats du monde de roundnet 2022 ?" />
        <Typography align="left" variant="body1" sx={{ my: 2 }}>
          Les premiers championnats du monde de roundnet sous l’égide de Spikeball auront lieu en Belgique en septembre 2022 !


          Deux tournois auront lieu en parallèle :

          <ul>
            <li>Un tournoi classique ouvert à tous où la meilleure équipe du monde sera couronnée</li>
            <li>Un tournoi par nation où les cinq meilleures équipes masculines et trois meilleures équipes féminines de chaque pays représenteront leur pays pour élire la meilleure nation de roundnet.</li>
          </ul>
        </Typography>
      </Container>

    </Fragment>
  )
}

export default WorldPage
