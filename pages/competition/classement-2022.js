import { Fragment } from "react";
import db from "../../lib/spiketimate-firebase";
import { collection, getDocs } from "firebase/firestore";

// MUI IMPORTS
import { Container, Typography, Stack } from "@mui/material";

// COMPONENTS IMPORTS
import Hero from "../../components/ui/hero";
import PageTitle from "../../components/ui/page-title";
import Head from "../../components/head";
import TeamRanking from "../../components/competition/team-ranking/team-ranking";
import HeaderWithIcon from "../../components/ui/header-with-icon";

export default function HallOfFamePage({
  mensRanking,
  womensRanking,
  mixedRanking,
}) {
  return (
    <Fragment>
      <Head
        title="Classement des équipes - Coupe de France de roundnet"
        description="Le classement de la Coupe de France est calculé par équipe. La participation aux Tour Stop et au Championnat de France permet de gagner des points. Les égalités de points sont départagées comme indiqué dans le règlement officiel. Vous pouvez aussi y trouver le barème de points."
      />

      <Hero
        title="Classement 2022"
        image="/images/hero/hall-of-fame.jpg"
        mini
      />

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PageTitle title="Classement des équipes - Coupe de France" />
        <Typography align="left" variant="body1" sx={{ my: 2 }}>
          Le classement de la Coupe de France est calculé par équipe. La
          participation aux Tour Stop et au Championnat de France permet de
          gagner des points. Les égalités de points sont départagées comme
          indiqué dans le règlement officiel. Vous pouvez aussi y trouver le
          barème de points.
        </Typography>
      </Container>

      <Container maxWidth="xl" sx={{ my: 8 }}>
        <HeaderWithIcon icon="equalizer" title="Classement des équipes">
          Dernière mise à jour : {new Date().toLocaleDateString()}
        </HeaderWithIcon>

        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 4, lg: 2 }}
        >
          <TeamRanking title="Classement féminin" ranking={womensRanking} />
          <TeamRanking
            title="Classement masculin"
            ranking={mensRanking}
            altColor
          />
          <TeamRanking title="Classement mixte" ranking={mixedRanking} />
        </Stack>
      </Container>
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
    const getRanking = async (collectionName) => {
      const ranking = [];
      const querySnapshot = await getDocs(
        collection(db, `/rankingrf/${collectionName}/teams`)
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

    return {
      props: {
        mensRanking,
        womensRanking,
        mixedRanking,
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
}
