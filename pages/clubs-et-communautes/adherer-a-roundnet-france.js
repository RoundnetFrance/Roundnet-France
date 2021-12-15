import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import PageTitle from '../../components/ui/page-title';
import FeaturedItems from '../../components/ui/featured-items';
import CrossingItems from '../../components/ui/crossing-items';
import CTAFooter from '../../components/ui/cta-footer';

function JoinRoundnetFrancePage() {

  // Fake data for the FeaturedItems component
  const items = [
    {
      id: '1',
      icon: 'public',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '2',
      icon: 'emoji_flags',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '3',
      icon: 'emoji_objects',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '4',
      icon: 'emoji_events',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ];

  // Fake items for the CrossingItems component
  const crossingItems = [
    {
      id: '1',
      icon: 'public',
      title: 'Une première mondiale',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/pages/competition/world-championship/roundnet-world-championship-1.jpg',
    },
    {
      id: '2',
      icon: 'people_alt',
      title: 'Faites partie de l\'aventure',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/pages/competition/world-championship/roundnet-world-championship-2.jpg'
    },
    {
      id: '3',
      icon: 'person_pin',
      title: 'Pourquoi pas vous ?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/pages/competition/world-championship/roundnet-world-championship-3.jpg'
    },
  ];


  return (
    <Fragment>

      <Hero
        title="Adhérer à Roundnet France"
        image="/images/hero/liste-clubs.jpg"
        imagePosition='center 60%'
        mini />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Créez votre club et faites officiellement partie de Roundnet France !" />
        <Typography variant="body1" sx={{ pb: 4 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quae ipsum quisquam quis numquam, odit vel exercitationem accusamus dolore deserunt iusto dicta id deleniti dolores et ipsa, magnam animi debitis dolorem pariatur architecto quo repellendus asperiores odio. Vitae quia sed autem ab in, ipsam blanditiis, repellendus eos itaque iure illo deleniti doloribus tempora, quam ex iste necessitatibus provident. Voluptates iusto ducimus libero voluptas id.
        </Typography>

        <Box mb={4}>
          <HeaderWithIcon
            icon="workspaces"
            title="Pourquoi créer un club de Roundnet ?"
          />
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <FeaturedItems items={items} color="secondary" />
        </Container>

        <Container maxWidth="sm" sx={{ my: 8 }}>
        <Box mb={4}>
          <HeaderWithIcon
            icon="arrow_circle_down"
            title="Vos avantages"
          />
        </Box>

        <CrossingItems items={crossingItems} height={250} />
      </Container>

      <CTAFooter 
        title="On saute le pas ?"
        subtitle="Créez votre club dès aujourd'hui et faites entrer votre ville et vos joueurs dans la compétition officielle."
        mainLink={{
          url: '/clubs-et-communautes/creer-votre-club',
          text: 'Créer et inscrire votre club'
        }}
      />
    </Fragment>

    
  )
}

export default JoinRoundnetFrancePage
