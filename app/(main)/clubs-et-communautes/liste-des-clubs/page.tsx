import { type FC, Fragment } from "react";

import { Box, Container, Divider, Paper, Typography } from "@mui/material";

import Head from "../../../../components/head";
import {
  CTAFooter,
  CrossingItems,
  Error as ErrorUI,
  HeaderWithIcon,
  Hero,
  PageTitle,
} from "../../../../components/ui";
import type { Club } from "../../../../models/collections/Clubs";
import { PrismaClient } from "@prisma/client";

interface ClubListPageProps {
  clubs: Club[] | null;
  error: string | null;
}

const prisma = new PrismaClient();
const getClubs = async () => {
  try {
    const rawClubs = await prisma.club.findMany({
      where: { validated: true },
      orderBy: { city: "asc" },
      include: {
        links: true,
      },
    });
    return rawClubs.map((club) => ({
      _id: club.id,
      title: club.name,
      clubCreated: club.club_created,
      chip: club.city,
      description: club.description ?? "",
      email: club.mail,
      phone: club.phone,
      image: club.picture ?? undefined,
      links: club.links.map((link) => ({
        url: link.url,
        source: link.source,
      })),
    }));
  } catch (error) {
    console.error(error);
    return {
      error: error.message,
    };
  }
};

const ClubListPage: FC<ClubListPageProps> = async () => {
  const clubs = await getClubs();
  return (
    <Fragment>
      <Head
        title='Liste des clubs de roundnet en France - Roundnet France'
        description='Liste des clubs de roundnet en France. Trouvez le club qui vous correspond le mieux, proche de chez vous !'
      />

      <Hero
        title='Liste des clubs'
        image='/images/hero/liste-clubs.jpg'
        imagePosition='center 60%'
        mini
      />

      <Container maxWidth='md' sx={{ my: 4 }}>
        <PageTitle title='Où jouer en France' />
        <Typography variant='body1' sx={{ pb: 4 }}>
          Le roundnet, particulièrement en France, est un sport dont les clubs
          et les pratiquants augmentent de jour en jour. Vous ne le savez peut
          être pas encore, mais on joue partout, et sûrement pas très loin de là
          où vous êtes ? Trouvez des clubs et sessions près de chez vous !
        </Typography>

        <Box mb={4}>
          <HeaderWithIcon icon='pin_drop' title='Carte des clubs' />
        </Box>

        <Paper elevation={6} sx={{ overflow: "hidden", p: 1, pb: 0.5 }}>
          <iframe
            src='https://www.google.com/maps/d/embed?mid=1xtrSWM6WZKgx9nHKAXTdfTSLBVWUyCl7&ehbc=2E312F'
            width='100%'
            height='480'
            title='Carte des clubs de roundnet en France'
          />
        </Paper>
      </Container>

      <Divider />

      <Container maxWidth='sm' sx={{ my: 4 }}>
        <HeaderWithIcon icon='people' title='Liste des clubs' />
        {"error" in clubs ? (
          <ErrorUI message={clubs.error} />
        ) : (
          <CrossingItems items={clubs} roundedItems roundedEverywhere />
        )}
      </Container>

      <Divider />

      <CTAFooter
        title='Vous souhaitez apparaître sur cette page ?'
        subtitle="Adhérez à Roundnet France et rejoignez l'une des communautés de Roundnet les plus actives de France."
        mainLink={{
          url: "/clubs-et-communautes/adherer-a-roundnet-france",
          text: "S'informer sur l'adhésion",
        }}
      />
    </Fragment>
  );
};

export const revalidate = 600;
export default ClubListPage;
