import { Fragment } from 'react';
import { getDocuments } from '../../helpers/db';

// MUI IMPORTS
import { Container, Typography, Box, Divider } from '@mui/material';

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import HeaderWithIcon from '../../components/ui/header-with-icon';
import PageTitle from '../../components/ui/page-title';
import FeaturedItems from '../../components/ui/featured-items';
import CrossingItems from '../../components/ui/crossing-items';
import CTAFooter from '../../components/ui/cta-footer';
import LogoCarousel from '../../components/ui/logo-carousel';
import Head from '../../components/head';

// CONTENT
import { whyJoinUs, clubKit } from '../../contents/clubs-communautes'

function JoinRoundnetFrancePage({ clubLogos }) {
  return (
    <Fragment>
      <Head
        title="Rejoignez la fédération Roundnet France"
        description="Créez votre club et faites officiellement partie de Roundnet France !"
      />

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
        <FeaturedItems items={whyJoinUs} color="secondary" />
      </Container>

      <Divider />

      <Container maxWidth="sm" sx={{ my: 4 }}>
        <Box mb={4}>
          <HeaderWithIcon
            icon="arrow_circle_down"
            title="Le kit des clubs"
          >
            Pour chaque nouveau club, Roundnet France vous offre un kit de matériel et de services qui vous permet de booster votre communauté.
          </HeaderWithIcon>
        </Box>

        <CrossingItems items={clubKit} height={250} />
      </Container>

      <Divider />

      <Box mt={6}>
        <LogoCarousel logos={clubLogos} />
      </Box>

      <CTAFooter
        title="On saute le pas ?"
        subtitle="Créez votre club dès aujourd'hui et faites entrer votre ville et vos joueurs dans la compétition officielle."
        mainLink={{
          url: '/clubs-et-communautes/creer-votre-club',
          text: 'Adhérer à la fédération'
        }}
      />

    </Fragment>


  )
}

export async function getStaticProps() {
  const clubs = await getDocuments('clubs', null, { image: 1, title: 1 }, { chip: 1 });
  const clubLogos = clubs.map((club) => ({
    src: club.image,
    alt: club.title,
  }));

  return {
    props: {
      clubLogos
    },
    revalidate: 600
  }
}

export default JoinRoundnetFrancePage
