import { Fragment } from 'react';
import { getClubs } from '../../helpers/db/clubs';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import PageTitle from '../../components/ui/page-title';
import CrossingItems from '../../components/ui/crossing-items';
import CTAFooter from '../../components/ui/cta-footer';
import Error from '../../components/ui/error';

function ClubListPage({ clubs, error }) {
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

        <Paper elevation={6} sx={{ overflow: 'hidden', p: 1, pb: 0.5}}><iframe src="https://www.google.com/maps/d/embed?mid=1xtrSWM6WZKgx9nHKAXTdfTSLBVWUyCl7&ehbc=2E312F" width="100%" height="480"></iframe></Paper>
      </Container>

      <Container maxWidth="sm" sx={{ my: 8 }}>
        <HeaderWithIcon
          icon="people"
          title="Liste des clubs"
        />
        {error ? <Error /> : <CrossingItems items={clubs} roundedItems />}
      </Container>

      <CTAFooter 
        title="Vous souhaitez inscrire votre&nbsp;club&nbsp;?"
        subtitle="Adhérez à Roundnet France et rejoignez l'une des communautés de Roundnet les plus actives de France."
        mainLink={{
          url: '/clubs-et-communautes/creer-votre-club',
          text: 'Créer et inscrire votre club'
        }}
        altLink={{
          url: '/clubs-et-communautes/adherer-a-roundnet-france',
          text: 'S\'informer sur l\'adhésion'
        }}
      />


    </Fragment>
  )
}

export async function getStaticProps() {
  // Try to fetch members on local API
  try {
    const data = await getClubs();
    return {
      props: { 
        clubs: data,
      },
    }
  } 
  // Return an error on props to display error message in UI
  catch (e) {
    console.error(e)
    return {
      props: { error: true },
    }
  }
}

export default ClubListPage
