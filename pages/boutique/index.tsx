import { FC, Fragment } from "react";

import { Container } from "@mui/material";

import Head from "../../components/head";
import { CrossingItems, Hero } from "../../components/ui";

import { shopContent } from "../../contents/boutique/";

const ShopPage: FC = () => {
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
};

export default ShopPage;
