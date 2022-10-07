import { Fragment } from "react";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import Hero from "../../components/ui/hero";
import Head from "../../components/head";
import CrossingItems from "../../components/ui/crossing-items";

// CONTENTS
import { shopContent } from "../../contents/boutique/";

function ShopPage() {
  return (
    <Fragment>
      <Head
        title="Boutique - Roundnet France"
        description="Grâce à notre partenariat avec l'équipementier Spikeball, achetez vos sets et vos goodies en ligne via la fédération Roundnet France."
      />

      <Hero
        title="Boutique"
        image="/images/hero/boutique.jpg"
        imagePosition="center 35%"
        mini
      />

      <Container maxWidth="md" sx={{ my: 8 }}>
        <CrossingItems height={450} items={shopContent} />
      </Container>
    </Fragment>
  );
}

export default ShopPage;
