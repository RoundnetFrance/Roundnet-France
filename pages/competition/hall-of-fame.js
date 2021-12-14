import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import CrossingItems from '../../components/ui/crossing-items';

function HallOfFamePage() {

  // Fake crossing items data
  const crossingItems = [
    {
      id: '1',
      title: 'Jean Roger',
      chip: 'Premier champion de France',
      image: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: '2',
      title: 'Jeanne Simon',
      chip: 'Première présidente de Club',
      image: 'https://images.unsplash.com/photo-1496361001419-80f0d1be777a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: '3',
      title: 'André Martin',
      chip: 'Trésorier de Roundnet France',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

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

      <Container maxWidth="sm" sx={{ my: 8 }}>
        <CrossingItems items={crossingItems} />
      </Container>
      
    </Fragment>
  )
}

export default HallOfFamePage
