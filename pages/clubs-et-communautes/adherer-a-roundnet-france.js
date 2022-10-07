import { Fragment } from "react";
import { getDocuments } from "../../helpers/db";

// MUI IMPORTS
import { Container, Typography, Box, Divider } from "@mui/material";

// COMPONENT IMPORTS
import Hero from "../../components/ui/hero";
import HeaderWithIcon from "../../components/ui/header-with-icon";
import PageTitle from "../../components/ui/page-title";
import FeaturedItems from "../../components/ui/featured-items";
import CrossingItems from "../../components/ui/crossing-items";
import CTAFooter from "../../components/ui/cta-footer";
import LogoCarousel from "../../components/ui/logo-carousel";
import Head from "../../components/head";
import Error from "../../components/ui/error";

// CONTENT
import { whyJoinUs, clubKit } from "../../contents/clubs-communautes";

export default function JoinRoundnetFrancePage({ clubLogos, error }) {
  return (
    <Fragment>
      <Head
        title="Rejoignez la fédération Roundnet France"
        description="Créez votre club et faites officiellement partie de Roundnet France !"
      />

      <Hero
        title="Adhérer à Roundnet France"
        image="/images/hero/liste-clubs.jpg"
        imagePosition="center 60%"
        mini
      />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Créez votre club et faites officiellement partie de Roundnet France !" />
        <Typography variant="body1" sx={{ pb: 4 }}>
          Chaque année, le nombre de clubs de roundnet en France augmente de
          façon exponentielle. La fédération est là pour représenter et
          accompagner les clubs français. Les clubs peuvent adhérer à la
          fédération pour bénéficier de certains avantages (partenariats,
          organisation de tournois officiels, vote pour les représentants, ...),
          sous certaines conditions (être un club, payer l&apos;adhésion
          annuelle et respecter le règlement intérieur).
        </Typography>
        <Typography variant="body1" sx={{ pb: 4 }}>
          Si vous souhaitez participer à l&apos;aventure, vous trouverez les
          informations sur cette page.
        </Typography>

        <Box mb={4}>
          <HeaderWithIcon
            icon="workspaces"
            title="Pourquoi créer un club de Roundnet ?"
            color="secondary"
          />
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <FeaturedItems items={whyJoinUs} color="secondary" />
      </Container>

      <Divider />

      <Container maxWidth="sm" sx={{ my: 4 }}>
        <Box mb={4}>
          <HeaderWithIcon icon="arrow_circle_down" title="Le kit des clubs">
            Pour chaque nouveau club, Roundnet France vous offre un kit de
            matériel et de services qui vous permet de booster votre communauté.
          </HeaderWithIcon>
        </Box>

        <CrossingItems items={clubKit} height={250} />
      </Container>

      <Divider />

      <Box mt={6}>
        {error ? (
          <Error message={error} />
        ) : (
          <LogoCarousel
            title="Ils adhèrent à Roundnet France"
            logos={clubLogos}
          />
        )}
      </Box>

      <CTAFooter
        title="On saute le pas ?"
        subtitle="Créez votre club dès aujourd'hui et faites entrer votre ville et vos joueurs dans la compétition officielle."
        mainLink={{
          url: "/clubs-et-communautes/creer-votre-club",
          text: "Adhérer à la fédération",
        }}
      />
    </Fragment>
  );
}

export async function getStaticProps() {
  let error;
  let clubLogos;

  try {
    const clubs = await getDocuments(
      "clubs",
      { validated: true },
      { image: 1, title: 1 },
      { chip: 1 }
    );
    clubLogos = clubs.map((club) => ({
      src: club.image,
      alt: club.title,
    }));
  } catch (err) {
    error = err.message;
  }

  return {
    props: {
      clubLogos: clubLogos || null,
      error: error || null,
    },
    revalidate: 600,
  };
}
