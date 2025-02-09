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
        title="Classement des équipes - Coupe de France de roundnet"
        description="Le classement de la Coupe de France est calculé par équipe. La participation aux Tour Stop et au Championnat de France permet de gagner des points. Les égalités de points sont départagées comme indiqué dans le règlement officiel. Vous pouvez aussi y trouver le barème de points."
      />

      <Hero
        title="Classement 2025"
        image="/images/hero/hall-of-fame.jpg"
        mini
      />

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PageTitle title="Classement du roundnet français" />
        <Typography align="left" variant="body1" sx={{ my: 2 }}>
          Le classement de la Coupe de France est calculé par équipe. La
          participation aux Tour Stop et au Championnat de France permet de
          gagner des points. Les égalités de points sont départagées comme
          indiqué dans le règlement officiel. Vous pouvez aussi y trouver le
          barème de points.
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ my: 8 }}>
        <HeaderWithIcon icon="equalizer" title="Classement des joueur.euse.s">
          Dernière mise à jour :{" "}
        </HeaderWithIcon>
        <Typography align="left" variant="body1" sx={{ my: 2 }}>
          Le classement est disponible depuis le lien suivant :{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/1uZ7060Bd5nrcryLGHRSUyhKr6e8_mKI7-k-kyZiiR5g/edit?gid=1050869688#gid=1050869688"
            target="_blank"
            rel="noopener noreferrer"
          >
            Classement RF 2025
          </a>
        </Typography>
      </Container>
    </Fragment>
  );
}
