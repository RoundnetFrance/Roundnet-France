import { Fragment } from "react";
import { getDocuments } from "../helpers/db";

// MUI IMPORTS
import { Container } from "@mui/material";

// COMPONENT IMPORTS
import Hero from "../components/ui/hero";
import HomeInfoBlock from "../components/home/home-info-block";
import LogoCarousel from "../components/ui/logo-carousel";
import FourSquareInfo from "../components/home/four-square-info";
import CTAFooter from "../components/ui/cta-footer";
import RulesDemo from "../components/home/rules-demo";
import Error from "../components/ui/error";

export default function HomePage({
  clubLogos,
  partnersLogos,
  errorLogos,
  errorPartnersLogos,
}) {
  return (
    <Fragment>
      <Hero
        title="Roundnet France"
        subtitle="Le site officiel de la fédération française de roundnet"
        image="/images/home-slide.jpg"
        mainButtonText="Découvrir"
        mainButtonLink="#rules-demo"
        altButtonText="Trouver un club"
        altButtonLink="/clubs-et-communautes/liste-des-clubs"
      />

      <HomeInfoBlock />
      <FourSquareInfo />

      <div id="rules-demo">
        <RulesDemo />
      </div>

      <CTAFooter
        title="Motivé.e ? Envie de jouer ou de participer ?"
        subtitle="Nous sommes là pour vous accompagner !"
        mainLink={{
          url: "/competition/coupe-de-france-roundnet",
          text: "Je veux jouer",
        }}
        altLink={{
          url: "/clubs-et-communautes/adherer-a-roundnet-france",
          text: "Je veux adhérer",
        }}
      />

      {errorLogos ? (
        <Container maxWidth="sm">
          <Error message="Une erreur est survenue lors de la récupération des logos des clubs" />
        </Container>
      ) : (
        <LogoCarousel
          title="Ils adhèrent à Roundnet France"
          logos={clubLogos}
        />
      )}

      {errorPartnersLogos ? (
        <Container maxWidth="sm">
          <Error message="Une erreur est survenue lors de la récupération des logos des partenaires" />
        </Container>
      ) : (
        <LogoCarousel title="Nos partenaires" logos={partnersLogos} />
      )}
    </Fragment>
  );
}

export async function getStaticProps() {
  let errorLogos;
  let clubLogos;
  let errorPartnersLogos;
  let partnersLogos;

  // Get club logos
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
    errorLogos = err.message;
  }

  try {
    const partners = await getDocuments("partners", null, {
      image: 1,
      title: 1,
    });
    partnersLogos = partners.map((partner) => ({
      src: partner.image,
      alt: partner.title,
    }));
  } catch (err) {
    errorPartnersLogos = err.message;
  }

  return {
    props: {
      clubLogos: clubLogos || null,
      partnersLogos: partnersLogos || null,
      errorLogos: errorLogos || null,
      errorPartnersLogos: errorPartnersLogos || null,
    },
    revalidate: 3600,
  };
}
