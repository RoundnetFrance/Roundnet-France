import { Fragment } from 'react';
import { getDocuments } from '../../helpers/db';

// MUI IMPORTS
import { Container, Typography, Box } from '@mui/material';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import PageTitle from '../../components/ui/page-title';
import CrossingItems from '../../components/ui/crossing-items';
import Error from '../../components/ui/error';
import Head from '../../components/head';

function TeamPage({ members, error }) {

  return (
    <Fragment>
      <Head
        title="Les membres du bureau - Fédération Française de Roundnet"
        description="Retrouvez tous les membres du bureau de la Fédération Française de Roundnet."
      />

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
  // Try to fetch members on local API
  try {
    const members = await getDocuments('federation-members');
    return {
      props: {
        members,
      },
      revalidate: 60,
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

export default TeamPage
