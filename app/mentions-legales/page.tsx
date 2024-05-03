import { Container, Paper, Typography } from "@mui/material";

import { PageTitle, Accordion } from "../../components/ui";

import { mentionsLegalesElements } from "../../contents/misc";
import type { FC } from "react";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Mentions Légales - Fédération française de roundnet",
};

const LegalsPage: FC = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <PageTitle title='Mentions légales' />
      <Paper sx={{ p: { xs: 1, sm: 2, md: 4 } }}>
        <Typography variant='body1' sx={{ mb: 2 }}>
          Conformément aux dispositions des Articles 6-III et 19 de la Loi
          n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
          numérique, dite L.C.E.N., il est porté à la connaissance des
          utilisateurs et visiteurs, ci-après &quot;Utilisateur&quot;, du site
          roundnetfrance.fr , ci-après le &quot;Site&quot;, les présentes
          mentions légales.
        </Typography>
        <Typography variant='body1' sx={{ mb: 2 }}>
          La connexion et la navigation sur le Site par l’Utilisateur implique
          acceptation intégrale et sans réserve des présentes mentions légales.
        </Typography>
        <Typography variant='body1' sx={{ mb: 2 }}>
          Ces dernières sont accessibles sur le Site à la rubrique « Mentions
          légales ».
        </Typography>
      </Paper>
      <Accordion items={mentionsLegalesElements} />
    </Container>
  );
};

export default LegalsPage;
