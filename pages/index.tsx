import { type FC, Fragment } from "react";
import { getDocuments } from "../helpers/db";
import type { Event } from "../models/collections/Events";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import {
  CTAFooter,
  Error as ErrorUI,
  Hero,
  Link,
  LogoCarousel,
} from "../components/ui";

import type { GetStaticProps } from "next";
import { EventsTimeline } from "../components/events/events-timeline";
import { FourSquareInfo, HomeInfoBlock, RulesDemo } from "../components/home";
import type { Partner } from "../models/collections/Partners";
import type { Club } from "../models/collections/Clubs";

interface LogoObject {
  src: string;
  alt: string;
  link?: string;
}

type HomePagePropsErrors = (
  | {
      errorLogos: string;
    }
  | { clubLogos: LogoObject[] }
) &
  (
    | {
        errorPartnerLogs: string;
      }
    | { partnersLogos: LogoObject[] }
  ) &
  (
    | {
        errorEvents: string;
      }
    | { events: Event[] }
  );

const HomePage: FC<HomePagePropsErrors> = (props) => {
  return (
    <Fragment>
      <Hero
        title="Roundnet France"
        subtitle="Le site officiel de la fédération française de roundnet"
        image="/images/home-slide.jpg"
        mainButtonText="Le calendrier 2025"
        mainButtonLink="/calendrier"
        altButtonText="Trouver un club"
        altButtonLink="/clubs-et-communautes/liste-des-clubs"
      />

      {/* Qu'est-ce que Roundnet France ? */}
      <HomeInfoBlock />

      {/* Tournois & événements à venir */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        {"events" in props && props.events && (
          <EventsTimeline events={props.events} fullWidth />
        )}
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
              <Link href="/blog/bilan-2022" isButton buttonIcon="arrow_forward">
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
      {"errorLogos" in props && props.errorLogos ? (
        <Container maxWidth="sm">
          <ErrorUI message="Une erreur est survenue lors de la récupération des logos des clubs" />
        </Container>
      ) : (
        <LogoCarousel
          title="Ils adhèrent à Roundnet France"
          logos={"clubLogos" in props ? props.clubLogos : []}
        />
      )}

      {/* Nos partenaires */}
      {"errorPartnersLogos" in props && props.errorPartnersLogos ? (
        <Container maxWidth="sm">
          <ErrorUI message="Une erreur est survenue lors de la récupération des logos des partenaires" />
        </Container>
      ) : (
        <LogoCarousel
          title="Nos partenaires"
          logos={"partnersLogos" in props ? props.partnersLogos : []}
        />
      )}
    </Fragment>
  );
};

export default HomePage;

export const getStaticProps = (async () => {
  let clubLogos: LogoObject[] | null = null;
  let events: Event[] | null = null;
  let partnersLogos: LogoObject[] | null = null;
  let errorEvents: string | null = null;
  let errorLogos: string | null = null;
  let errorPartnersLogos: string | null = null;

  try {
    const clubs = await getDocuments<Club>({
      collection: "clubs",
      params: { validated: true },
      fields: { image: 1, title: 1, links: 1, chip: 1 },
    });
    clubLogos = clubs.map((club) => {
      let link = "";
      if (club.links.length > 0) {
        link = club.links[0].url || club.links[1].url || club.links[2].url;
      }

      return {
        src: club.image,
        alt: club.title,
        link,
      };
    });
  } catch (err) {
    errorLogos = err.message;
  }

  // Get partners
  try {
    const partners = await getDocuments<Partner>({
      collection: "partners",
      fields: { image: 1, title: 1, links: 1 },
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
    events = await getDocuments<Event>({
      collection: "events",
      params: { validated: true, date: { $gte: new Date().toJSON() } },
      fields: {
        price: 0,
        inscriptionUrl: 0,
        address: 0,
        organization: 0,
      },
      sort: { date: 1 },
      limit: 3,
    });
  } catch (err) {
    errorEvents = err.message;
  }

  return {
    props: {
      clubLogos,
      partnersLogos,
      events,
      errorEvents,
      errorLogos,
      errorPartnersLogos,
    },
    revalidate: 3600,
  };
}) satisfies GetStaticProps;
