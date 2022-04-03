import { Fragment } from "react";
import { getDocuments } from "../helpers/db";

// MUI IMPORTS
import { Container, Divider, Box } from "@mui/material";

// COMPONENT IMPORTS
import Link from "../components/ui/link";
import Hero from "../components/ui/hero";
import HomeInfoBlock from "../components/home/home-info-block";
import LogoCarousel from "../components/ui/logo-carousel";
import FourSquareInfo from "../components/home/four-square-info";
import CTAFooter from "../components/ui/cta-footer";
import RulesDemo from "../components/home/rules-demo";
import Error from "../components/ui/error";
import EventsTimeline from "../components/events/events-timeline";

export default function HomePage({
  clubLogos,
  partnersLogos,
  events,
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

      {/* Qu'est-ce que Roundnet France ? */}
      <HomeInfoBlock />

      {/* Tournois & événements à venir */}
      <Container maxWidth="md" sx={{ mb: 12 }}>
        <EventsTimeline events={events} fullWidth />
        <Box
          sx={{ display: "flex", direction: "row", justifyContent: "center" }}
        >
          <Link
            color="secondary"
            href="/calendrier"
            isButton
            buttonIcon="arrow_forward"
          >
            Voir les autres tournois
          </Link>
        </Box>
      </Container>

      <Divider />

      {/* Les démarches de la fédération */}
      <FourSquareInfo />

      {/* Les règles du roundnet... */}
      <div id="rules-demo">
        <RulesDemo />
      </div>

      {/* CTA before footer */}
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

      {/* Ils adhèrent à Roundnet France */}
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

      {/* Nos partenaires */}
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
  let events;
  let errorPartnersLogos;
  let partnersLogos;

  // Get club logos
  try {
    const clubs = await getDocuments(
      "clubs",
      { validated: true },
      { image: 1, title: 1, links: 1 },
      { chip: 1 }
    );
    clubLogos = clubs.map((club) => {
      let link;
      if (club.links.length > 0) {
        link = club.links[0].url || club.links[1].url || club.links[2].url;
      }

      return {
        src: club.image,
        alt: club.title,
        link: link,
      };
    });
  } catch (err) {
    errorLogos = err.message;
  }

  // Get partners
  try {
    const partners = await getDocuments("partners", null, {
      image: 1,
      title: 1,
      links: 1,
    });
    partnersLogos = partners.map((partner) => ({
      src: partner.image,
      alt: partner.title,
      link: partner.links,
    }));
  } catch (err) {
    errorPartnersLogos = err.message;
  }

  // Get events
  try {
    events = await getDocuments(
      "events",
      { validated: true, date: { $gte: new Date().toJSON() } },
      {
        price: 0,
        inscriptionUrl: 0,
        address: 0,
        organization: 0,
      },
      { date: 1 },
      3
    );
    partnersLogos = partners.map((partner) => ({
      src: partner.image,
      alt: partner.title,
      link: partner.links,
    }));
  } catch (err) {
    errorPartnersLogos = err.message;
  }

  return {
    props: {
      clubLogos: clubLogos || null,
      partnersLogos: partnersLogos || null,
      events: events || null,
      errorLogos: errorLogos || null,
      errorPartnersLogos: errorPartnersLogos || null,
    },
    revalidate: 3600,
  };
}
