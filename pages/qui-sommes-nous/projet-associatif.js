import { Fragment } from 'react';

// MUI IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import PageTitle from '../../components/ui/page-title';
import InfoBlock from '../../components/ui/info-block';
import PaperGrid from '../../components/ui/paper-grid';
import CTAFooter from '../../components/ui/cta-footer';
import Head from '../../components/head';

function AssociationPage() {

  // Fake items for the paper grid component
  const items = [
    {
      id: '1',
      icon: 'accessibility',
      title: 'Inclusivité',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facere. Molestias error, reprehenderit autem asperiores explicabo reiciendis.',
    },
    {
      id: '2',
      icon: 'restart_alt',
      title: 'Fair play',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facere. Molestias error, reprehenderit autem asperiores explicabo reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: '3',
      icon: 'arrow_circle_up',
      title: 'Progrès',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facere. Molestias error, reprehenderit autem asperiores explicabo reiciendis. Lorem ipsum dolor.',
    },
    {
      id: '4',
      icon: 'emoji_events',
      title: 'Compétitivité',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, facere. Molestias error, reprehenderit. Lorem ipsum dolor sit amet.',
    },
  ];

  return (
    <Fragment>
      <Head 
      title="Le projet associatif - Fédération Française de Roundnet"
      />


      <Hero
        title="Le projet associatif"
        image="/images/hero/equipe-roundnet-france.jpg"
        imagePosition='center 45%'
        mini />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Les idées et envies derrière Roundnet France" />
        <Typography variant="body1" sx={{ pb: 4 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quae ipsum quisquam quis numquam, odit vel exercitationem accusamus dolore deserunt iusto dicta id deleniti dolores et ipsa, magnam animi debitis dolorem pariatur architecto quo repellendus asperiores odio. Vitae quia sed autem ab in, ipsam blanditiis, repellendus eos itaque iure illo deleniti doloribus tempora, quam ex iste necessitatibus provident. Voluptates iusto ducimus libero voluptas id.
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ my: 8 }}>
        <Box mb={4}>
          <HeaderWithIcon
            icon="workspaces"
            title="Comment est née la fédération ?"
          />
        </Box>

        <InfoBlock
          title="Tout commence en 2021"
          image="/images/pages/qui-sommes-nous/projet-associatif/creation-roundnet-france.jpg"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quae ipsum quisquam quis numquam, odit vel exercitationem accusamus dolore deserunt iusto dicta id deleniti dolores et ipsa, magnam animi debitis dolorem pariatur architecto quo repellendus asperiores odio. Vitae quia sed autem ab in, ipsam blanditiis, repellendus eos itaque iure illo deleniti doloribus tempora, quam ex iste necessitatibus provident. Voluptates iusto ducimus libero voluptas id."
          height={400}
        />

        <InfoBlock
          title="La volonté de se développer"
          image="/images/pages/qui-sommes-nous/projet-associatif/volonte-developper.jpg"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quae ipsum quisquam quis numquam, odit vel exercitationem accusamus dolore deserunt iusto dicta id deleniti dolores et ipsa, magnam animi debitis dolorem pariatur architecto quo repellendus asperiores odio. Vitae quia sed autem ab in, ipsam blanditiis, repellendus eos itaque iure illo deleniti doloribus tempora, quam ex iste necessitatibus provident. Voluptates iusto ducimus libero voluptas id."
          height={400}
          imageToLeft
        />
      </Container>

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Box my={4}>
          <HeaderWithIcon
            icon="recommend"
            title="Nos valeurs"
          />
        </Box>
        <PaperGrid items={items} />
      </Container>

      <CTAFooter 
        title="Motivé.e ? Envie de jouer ou de participer ?"
        subtitle="Nous sommes là pour vous accompagner !"
        mainLink={{
          url: '/competition/calendrier',
          text: 'Je veux jouer'
        }}
        altLink={{
          url: '/clubs-et-communautes/adherer-a-roundnet-france',
          text: 'Je veux adhérer'
        }}          
      />

    </Fragment>
  )
}

export default AssociationPage
