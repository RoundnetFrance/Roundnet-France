import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import PageTitle from '../../components/ui/page-title';
import CrossingItems from '../../components/ui/crossing-items';
import CTAFooter from '../../components/ui/cta-footer'; 

function ClubListPage() {

  // Fake data for the CrossingItems component
  const items = [
    {
      id: '1',
      image: '/images/pages/clubs-et-communautes/clubs/club-1.jpg',
      title: 'Roundnet Paris',
      chip: 'Paris',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: {
        url: 'https://www.facebook.com/roundnet.paris/',
        outLink: true,
      },
    },
    {
      id: '2',
      image: '/images/pages/clubs-et-communautes/clubs/club-2.jpg',
      title: 'Titans Roundnet',
      chip: 'Nantes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: {
        url: 'https://titansroundnet.fr/',
        outLink: true,
      },
    },
    {
      id: '3',
      image: '/images/pages/clubs-et-communautes/clubs/club-3.jpg',
      chip: 'Toulouse',
      title: 'Roundnet Toulouse',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: {
        url: 'https://www.facebook.com/RoundnetToulouse/',
        outLink: true,
      },
    },
  ];

  return (
    <Fragment>

      <Hero
        title="Liste des clubs"
        image="/images/hero/liste-clubs.jpg"
        imagePosition='center 60%'
        mini />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Où jouer en France" />
        <Typography variant="body1" sx={{ pb: 4 }}>
          Le roundnet, particulièrement en France, est un sport dont les clubs et les pratiquants augmentent de jour en jour. Vous ne le savez peut être pas encore, mais on joue partout, et sûrement pas très loin de là où vous êtes ? Trouvez des clubs et sessions près de chez vous !
        </Typography>

        <Box mb={4}>
          <HeaderWithIcon
            icon="pin_drop"
            title="Carte des clubs"
          />
        </Box>

        <iframe src="https://www.google.com/maps/d/embed?mid=1xtrSWM6WZKgx9nHKAXTdfTSLBVWUyCl7&ehbc=2E312F" width="100%" height="480"></iframe>
      </Container>

      <Container maxWidth="sm" sx={{ my: 8 }}>
        <HeaderWithIcon
          icon="people"
          title="Liste des clubs"
        />
        <CrossingItems items={items} roundedItems />
      </Container>

      <CTAFooter 
        title="Vous souhaitez inscrire votre&nbsp;club&nbsp;?"
        subtitle="Adhérez à Roundnet France et rejoignez l'une des communautés de Roundnet les plus actives de France."
        mainLink={{
          url: '/clubs-et-communautes/liste-des-clubs',
          text: 'Inscrire votre club'
        }}
      />

    </Fragment>
  )
}

export default ClubListPage
