import { Fragment } from "react";
import db from "../../lib/spiketimate-firebase";
import { collection, getDocs } from "firebase/firestore";

// MUI IMPORTS
import { Container, Typography } from "@mui/material";

// COMPONENTS IMPORTS
import Hero from "../../components/ui/hero";
import PageTitle from "../../components/ui/page-title";
import Head from "../../components/head";
import TeamRanking from "../../components/competition/team-ranking/team-ranking";

export default function HallOfFamePage({ ranking }) {
  console.log(
    "🚀 ~ file: classement-2022.js ~ line 15 ~ HallOfFamePage ~ ranking",
    ranking
  );
  return (
    <Fragment>
      <Head
        title="Celles et ceux qui ont fait Roundnet France"
        description="Bien que jeune, Roundnet France possède déjà ses personnalités et ses membres historiques. Découvrez les !"
      />

      <Hero title="Hall Of Fame" image="/images/hero/hall-of-fame.jpg" mini />

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PageTitle title="Ils ont fait l'histoire de Roundnet France" />
        <Typography align="left" variant="body1" sx={{ my: 2 }}>
          Bien que jeune, Roundnet France possède déjà ses personnalités et ses
          membres historiques. Découvrez les !
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ my: 8 }}>
        <TeamRanking ranking={ranking} />
      </Container>
    </Fragment>
  );
}

export async function getStaticProps() {
  try {
    const ranking = [];
    const querySnapshot = await getDocs(
      collection(db, "/rankingrf/5HCZN4mXIa3pzBuQ2dQO/teams")
    );
    querySnapshot.forEach((doc) => {
      ranking.push({
        ...doc.data(),
      });
    });

    ranking.sort((a, b) => a.rank - b.rank);
    return {
      props: {
        ranking,
      },
      revalidate: 600,
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
      revalidate: 600,
    };
  }
}
