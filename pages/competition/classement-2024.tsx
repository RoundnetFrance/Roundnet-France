import { ObjectId } from "mongodb";
import { Fragment } from "react";
import { getDocument } from "../../helpers/db";

import { Container, Stack, Typography } from "@mui/material";

import {
  Error as ErrorUI,
  HeaderWithIcon,
  Hero,
  PageTitle,
} from "../../components/ui";

import { TeamRanking } from "../../components/competition/team-ranking/team-ranking";
import Head from "../../components/head";
import type { Ranking2024 } from "../../models/collections/Ranking";

export default function HallOfFamePage({
  mensRanking,
  womensRanking,
  mixedRanking,
  date,
  error,
}) {
  return (
    <Fragment>
      <Head
        title='Classement des équipes - Coupe de France de roundnet'
        description='Le classement de la Coupe de France est calculé par équipe. La participation aux Tour Stop et au Championnat de France permet de gagner des points. Les égalités de points sont départagées comme indiqué dans le règlement officiel. Vous pouvez aussi y trouver le barème de points.'
      />

      <Hero
        title='Classement 2024'
        image='/images/hero/hall-of-fame.jpg'
        mini
      />

      <Container maxWidth='md' sx={{ mt: 4 }}>
        <PageTitle title='Classement du roundnet français' />
        <Typography align='left' variant='body1' sx={{ my: 2 }}>
          Le classement de la Coupe de France est calculé par équipe. La
          participation aux Tour Stop et au Championnat de France permet de
          gagner des points. Les égalités de points sont départagées comme
          indiqué dans le règlement officiel. Vous pouvez aussi y trouver le
          barème de points.
        </Typography>
      </Container>

      <Container maxWidth='xl' sx={{ my: 8 }}>
        <HeaderWithIcon icon='equalizer' title='Classement des joueur.euse.s'>
          Dernière mise à jour :{" "}
          {new Date(date || null).toLocaleDateString("fr-FR")}
        </HeaderWithIcon>

        {error ? (
          <ErrorUI message={"Une erreur est survenue"} />
        ) : (
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={{ xs: 4, lg: 2 }}
          >
            <TeamRanking
              title='Classement féminin'
              ranking={womensRanking}
              headers={{ player: "Joueuse" }}
            />
            <TeamRanking
              title='Classement mixte'
              ranking={mixedRanking}
              altColor
            />
            <TeamRanking
              title='Classement masculin'
              ranking={mensRanking}
              headers={{ player: "Joueur" }}
            />
          </Stack>
        )}
      </Container>
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
    const { ranking, date } = await getDocument<Ranking2024>({
      collection: "ranking",
      params: { _id: new ObjectId("65f93b696c41d2a7f9689312") },
    });

    return {
      props: {
        mensRanking: ranking["Rank Open"]
          .sort((a, b) => a.Rang - b.Rang)
          .filter((p) => p.Points),
        womensRanking: ranking["Rank Women"]
          .sort((a, b) => a.Rang - b.Rang)
          .filter((p) => p.Points),
        mixedRanking: ranking["Rank Coed"]
          .sort((a, b) => a.Rang - b.Rang)
          .filter((p) => p.Points),
        date,
      },
      revalidate: 3600,
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        error: err.message,
      },
      revalidate: 3600,
    };
  }
}
