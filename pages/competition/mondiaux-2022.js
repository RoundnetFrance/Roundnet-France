import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import FeaturedItems from '../../components/ui/featured-items';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import CrossingItems from '../../components/ui/crossing-items';
import CTAFooter from '../../components/ui/cta-footer';

function WorldChampionshipPage() {

  // Fake items for the FeaturedItems component
  const items = [
    {
      id: '1',
      icon: 'public',
      title: 'Une première mondiale',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/pages/competition/world-championship/roundnet-world-championship-1.jpg',
    },
    {
      id: '2',
      icon: 'people_alt',
      title: 'Faites partie de l\'aventure',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/pages/competition/world-championship/roundnet-world-championship-2.jpg'
    },
    {
      id: '3',
      icon: 'person_pin',
      title: 'Pourquoi pas vous ?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/pages/competition/world-championship/roundnet-world-championship-3.jpg'
    },
  ];


  return (
    <Fragment>
      <Hero
        title="Mondiaux 2022"
        image="/images/hero/world-2022.jpg"
        imagePosition='center 42%'
        mini
      />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PageTitle title="Comment participer aux championnats du monde de roundnet 2022 ?" />
        <Typography align="left" variant="body1" component="div" sx={{ my: 2 }}>
          Les premiers championnats du monde de roundnet sous l’égide de Spikeball auront lieu en Belgique en septembre 2022 !


          Deux tournois auront lieu en parallèle :
          <ul>
            <li>Un tournoi classique ouvert à tous où la meilleure équipe du monde sera couronnée</li>
            <li>Un tournoi par nation où les cinq meilleures équipes masculines et trois meilleures équipes féminines de chaque pays représenteront leur pays pour élire la meilleure nation de roundnet.</li>
          </ul>
        </Typography>
      </Container>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <HeaderWithIcon
          title="Pourquoi participer ?"
          icon="question_mark"
        />
        <FeaturedItems items={items} color="secondary" />
        </Container>

        <Container maxWidth="md" sx={{ my: 8 }}>
        <HeaderWithIcon
          title="Suis-je éligible ?"
          icon="add_task"
        />
        <CrossingItems items={items} height={300} />
        </Container>

      <Container maxWidth="md" sx={{ my: 4 }}>
        <CTAFooter
          title="Alors, on s'inscrit ?"
          subtitle="Participez avec nous à un événément unique !"
          mainLink={{
            url: '/inscription',
            text: 'S\'inscrire'
          }}
          altLink={{
            url: '/competition',
            text: 'Rejoindre un club'
          }}
          />
      </Container>


    </Fragment>
  )
}

export default WorldChampionshipPage
