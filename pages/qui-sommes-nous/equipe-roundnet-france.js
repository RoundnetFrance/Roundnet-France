import { Fragment } from 'react';
import localAPIFetcher from '../../helpers/local-api-fetcher';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import PageTitle from '../../components/ui/page-title';
import CrossingItems from '../../components/ui/crossing-items';
import Error from '../../components/ui/error'

function TeamPage({ members, error }) {

  return (
    <Fragment>

      <Hero
        title="L'équipe Roundnet France"
        image="/images/hero/equipe-roundnet-france.jpg"
        imagePosition='center 45%'
        mini />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Découvrez celles et ceux qui font la fédération" />
        <Typography variant="body1" sx={{ pb: 4 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quae ipsum quisquam quis numquam, odit vel exercitationem accusamus dolore deserunt iusto dicta id deleniti dolores et ipsa, magnam animi debitis dolorem pariatur architecto quo repellendus asperiores odio. Vitae quia sed autem ab in, ipsam blanditiis, repellendus eos itaque iure illo deleniti doloribus tempora, quam ex iste necessitatibus provident. Voluptates iusto ducimus libero voluptas id.
        </Typography>

        <Box mb={4}>
          <HeaderWithIcon
            icon="workspaces"
            title="C'est qui, Roundnet France ?"
          />
        </Box>
      </Container>

      <Container maxWidth="sm" sx={{ my: 8 }}>
        {error ? <Error /> : <CrossingItems items={members} roundedItems />}
      </Container>
    </Fragment>
  )
}

export async function getStaticProps() {

  try {
    const members = await localAPIFetcher('/api/federation-members');
    return {
      props: { 
        members,
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { error: true },
    }
  }
}

export default TeamPage
