import { Fragment } from 'react';

// MUI IMPORTS
import { Container, Typography } from '@mui/material';

// COMPONENTS IMPORTS
import Hero from '../../components/ui/hero';
import PageTitle from '../../components/ui/page-title';
import InfoBlock from '../../components/ui/info-block';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import FeaturedItems from '../../components/ui/featured-items';
import CTAFooter from '../../components/ui/cta-footer';
import Head from '../../components/head';

function TournamentsResultsPage() {
  // Fake InfoBlocks data
  const infoBlocks = [
    {
      id: 1,
      title: '24+',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam aliquid et.',
    },
    {
      id: 2,
      title: '6+',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam aliquid et.',
    },
    {
      id: 3,
      title: '12+',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam aliquid et.',
    },
  ];

  // Fake FeaturedItems data
  const featuredItems = [
    {
      id: 1,
      icon: 'groups',
      title: 'Accompagnement',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam aliquid et.',
    },
    {
      id: 2,
      icon: 'emoji_events',
      title: 'Challenge',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam aliquid et.',
    },
    {
      id: 3,
      icon: 'sports',
      title: 'Compétition',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quisquam aliquid et.',
    },
  ];

  return (
    <Fragment>
      <Head
        title="Rencontres inter-clubs - Roundnet France"
        description="Les rencontres inter-clubs représentent l'initiative de Roundnet France de se faire rencontrer les différents viviers de joueurs nationaux."
      />

      <Hero
        title="Rencontres inter-clubs"
        image="/images/hero/results.jpg"
        imagePosition='center 80%'
        mini
      />


      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Le rendez-vous compétitif des clubs français" />
        <Typography variant="body1">
          Les rencontres inter-clubs représentent l&apos;initiative de Roundnet France de se faire rencontrer les différents viviers de joueurs nationaux.
        </Typography>

        <InfoBlock
          imageToLeft
          height={450}
          items={infoBlocks}
          title="Comment se déroulent les rencontres inter-clubs ?"
          image="/images/pages/competition/inter-clubs/inter-club.jpg"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eveniet possimus quidem, voluptas blanditiis rem beatae hic asperiores inventore nobis quos adipisci laboriosam earum in necessitatibus, accusantium itaque voluptatem aliquid error odio a autem officia eum maxime. Doloribus ducimus, debitis modi libero nesciunt similique excepturi laborum temporibus cumque esse deserunt labore aspernatur expedita consectetur, odit hic quos exercitationem quaerat dolore. Expedita modi neque quam."
        />

      </Container>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <HeaderWithIcon
          title="Comment s'organisent les rencontres ?"
          icon="help_center"
        />

        <FeaturedItems items={featuredItems} />
      </Container>

      <CTAFooter
        title="Vous souhaitez participer aux rencontres inter-clubs ?"
        subtitle="Inscrivez votre club ou crééz votre équipe !"
        mainLink={{
          url: '/qui-sommes-nous/contact',
          text: 'Inscrivez votre club',
        }}
        altLink={{
          url: '/clubs-et-communautes/adherer-a-roundnet-france',
          text: 'Adhérer à la Fédération',
        }}
      />

    </Fragment>

  )
}

export default TournamentsResultsPage
