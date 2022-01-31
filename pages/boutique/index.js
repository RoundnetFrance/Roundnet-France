import { Fragment } from "react";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import Hero from "../../components/ui/hero";
import CTAFooter from "../../components/ui/cta-footer";
import Head from "../../components/head";
import CrossingItems from "../../components/ui/crossing-items";

// CONTENTS
import { urbanPartnership } from "../../contents/boutique/";

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
        imagePosition="center 35%"
        mini
      />

      <Container maxWidth="md" sx={{ my: 8 }}>
        <CrossingItems height={450} items={urbanPartnership} />
      </Container>
    </Fragment>
  );
}

export default ShopPage;
