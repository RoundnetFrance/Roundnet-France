import { Fragment } from "react";
import { getDocuments } from "../helpers/db";

// COMPONENT IMPORTS
import Hero from "../components/ui/hero";
import HomeInfoBlock from "../components/home/home-info-block";
import LogoCarousel from "../components/ui/logo-carousel";
import FourSquareInfo from "../components/home/four-square-info";
import CTAFooter from "../components/ui/cta-footer";
import RulesDemo from "../components/home/rules-demo";

export default function HomePage({ clubLogos, partnersLogos }) {
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

      <LogoCarousel title="Ils adhèrent à Roundnet France" logos={clubLogos} />
      <LogoCarousel title="Nos partenaires" logos={partnersLogos} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // Get club logos
  const clubs = await getDocuments(
    "clubs",
    { validated: true },
    { image: 1, title: 1 },
    { chip: 1 }
  );
  const clubLogos = clubs.map((club) => ({
    src: club.image,
    alt: club.title,
  }));

  const partners = await getDocuments("partners", null, { image: 1, title: 1 });

  const partnersLogos = partners.map((partner) => ({
    src: partner.image,
    alt: partner.title,
  }));

  return {
    props: {
      clubLogos,
      partnersLogos,
    },
    revalidate: 3600,
  };
}
