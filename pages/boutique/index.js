import { Fragment } from 'react'

// MUI IMPORTS
import { Container, Typography, Divider, Box } from '@mui/material'

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import CTAFooter from '../../components/ui/cta-footer';
import Head from '../../components/head';
import PageTitle from '../../components/ui/page-title';
import InfoBlock from '../../components/ui/info-block';
import CrossingItems from '../../components/ui/crossing-items';

// CONTENTS
import { urbanPartnership } from '../../contents/boutique/'

function ShopPage() {
  return (
    <Fragment>
      <Head
        title="Boutique - Roundnet Francce"
        description="Grâce à notre partenariat avec l'équipementier Spikeball, achetez vos sets et vos goodies en ligne via la fédération Roundnet France."
      />

      <Hero
        title="Boutique"
        image="/images/hero/boutique.jpg"
        imagePosition='center 35%'
        mini />

      <Container maxWidth="md" sx={{ my: 8 }}>
        <CrossingItems height={450} items={urbanPartnership} />
      </Container>

      {/* <CTAFooter
        title="Votre propre équipement, vos propres règles !"
        subtitle="Grâce à notre partenariat avec l'équipementier Spikeball, achetez vos sets et vos goodies en ligne via la fédération Roundnet France."
        mainLink={{
          url: 'http://www.spikeball.com/',
          text: 'Accéder à la boutique',
          outLink: true,
        }}
      /> */}


    </Fragment>
  )
}

export default ShopPage
