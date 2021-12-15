import { Fragment } from 'react'

// COMPONENT IMPORTS
import Hero from '../../components/ui/hero';
import CTAFooter from '../../components/ui/cta-footer';

function ShopPage() {
  return (
    <Fragment>

      <Hero
        title="Boutique"
        image="/images/hero/boutique.jpg"
        imagePosition='center 35%'
        mini />

      <CTAFooter 
        title="Votre propre équipement, vos propres règles !"
        subtitle="Grâce à notre partenariat avec l'équipementier Spikeball, achetez vos sets et vos goodies en ligne via la fédération Roundnet France."
        mainLink={{
          url: 'http://www.spikeball.com/',
          text: 'Accéder à la boutique',
          outLink: true,
        }}
      />


    </Fragment>
  )
}

export default ShopPage
