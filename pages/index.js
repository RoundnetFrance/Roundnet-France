import { Fragment } from "react";
import { getDocuments } from "../helpers/db";

// MUI IMPORTS
import {
  Container,
  Divider,
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

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
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <EventsTimeline events={events} fullWidth />
        <Box
          sx={{ display: "flex", direction: "row", justifyContent: "center" }}
        >
          <Link
            color="secondary"
            href="/calendrier"
            isButton
            buttonIcon="arrow_forward"
            legacyBehavior
          >
            Voir les autres tournois
          </Link>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ mb: 12 }}>
        <Typography variant="h4" mb={2}>
          Notre actualité
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={4}
          justifyContent="space-between"
        >
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/blog/ts-angers-2022-1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bilan 2022
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Alors que les championnats de France sont tout juste derrière
                nous, il est temps de tirer le bilan des ces quatre long
                weekends de roundnet aux quatre coins du pays.
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                href="/blog/bilan-2022"
                isButton
                buttonIcon="arrow_forward"
                legacyBehavior
              >
                Lire l&apos;article
              </Link>
            </CardActions>
          </Card>
          <Card sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/blog/recap-2022/pcb.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Le tour stop d&apos;Angers 2022
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Qui seront les 5 équipes hommes et 3 équipes femmes qui
                représenteront la France aux championnats du monde en Belgique
                en septembre prochain ?
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                href="/blog/tour-stop-angers-2022"
                isButton
                buttonIcon="arrow_forward"
                legacyBehavior
              >
                Lire l&apos;article
              </Link>
            </CardActions>
          </Card>
        </Stack>
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
