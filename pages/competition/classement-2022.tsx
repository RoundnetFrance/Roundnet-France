import { ObjectId } from "mongodb";
import { type FC, Fragment } from "react";
import db from "../../lib/spiketimate-firebase";
import { getDocument } from "../../helpers/db";
import { collection, getDocs } from "firebase/firestore";

import { Container, Typography, Stack } from "@mui/material";

import {
  Hero,
  PageTitle,
  HeaderWithIcon,
  Error as ErrorUI,
} from "../../components/ui";
import Head from "../../components/head";
import TeamRanking from "../../components/competition/team-ranking/team-ranking-2022";
import type { GetStaticProps } from "next";

interface Ranking22PageProps {
  mensRanking: any[];
  womensRanking: any[];
  mixedRanking: any[];
  date: string;
  error: string | null;
}

const Ranking22Page: FC<Ranking22PageProps> = ({
  mensRanking,
  womensRanking,
  mixedRanking,
  date,
  error,
}) => {
  return (
    <Fragment>
      <Head
        title='Classement des équipes - Coupe de France de roundnet'
        description='Le classement de la Coupe de France est calculé par équipe. La participation aux Tour Stop et au Championnat de France permet de gagner des points. Les égalités de points sont départagées comme indiqué dans le règlement officiel. Vous pouvez aussi y trouver le barème de points.'
      />

      <Hero
        title='Classement 2022'
        image='/images/hero/hall-of-fame.jpg'
        mini
      />

      <Container maxWidth='md' sx={{ mt: 4 }}>
        <PageTitle title='Classement des équipes - Coupe de France' />
        <Typography align='left' variant='body1' sx={{ my: 2 }}>
          Le classement de la Coupe de France est calculé par équipe. La
          participation aux Tour Stop et au Championnat de France permet de
          gagner des points. Les égalités de points sont départagées comme
          indiqué dans le règlement officiel. Vous pouvez aussi y trouver le
          barème de points.
        </Typography>
      </Container>

      <Container maxWidth='xl' sx={{ my: 8 }}>
        <HeaderWithIcon icon='equalizer' title='Classement des équipes'>
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
            <TeamRanking title='Classement féminin' ranking={womensRanking} />
            <TeamRanking
              title='Classement masculin'
              ranking={mensRanking}
              altColor
            />
            <TeamRanking title='Classement mixte' ranking={mixedRanking} />
          </Stack>
        )}
      </Container>
    </Fragment>
  );
};

export default Ranking22Page;

export const getStaticProps = (async () => {
  try {
    const getRanking = async (collectionName: string) => {
      const ranking = [];
      const querySnapshot = await getDocs(
        collection(db, `/rankingrf/${collectionName}/teams`),
      );
      querySnapshot.forEach((doc) => {
        ranking.push({
          ...doc.data(),
        });
      });
      ranking.sort((a, b) => a.rank - b.rank);

      return ranking;
    };

    const mensRanking = await getRanking("5HCZN4mXIa3pzBuQ2dQO");
    const womensRanking = await getRanking("3e2Q82BojSaM3RLAGUWp");
    const mixedRanking = await getRanking("elOhheBFTicqpbcyW62l");

    const { date } = await getDocument<{ date: string }>({
      collection: "ranking",
      params: { _id: new ObjectId("6315dbab85098f7156bde68b") },
    });

    return {
      props: {
        mensRanking,
        womensRanking,
        mixedRanking,
        date,
      },
      revalidate: 3600,
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
      revalidate: 3600,
    };
  }
}) satisfies GetStaticProps;
