import { Container, Paper, Typography, Link } from "@mui/material";

import Head from "../components/head";
import type { FC } from "react";

const LinksPage: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Head title="Liens - Fédération Française de Roundnet" />
      <Paper sx={{ p: 4 }} variant="outlined">
        <Typography variant="h5" mb={2}>
          Images
        </Typography>
        <Typography variant="body1">
          Les images d&apos;illustration sont fournies par{" "}
          <Link href="https://www.corentinbureau.com/" target="_blank">
            Corentin Bureau
          </Link>
          .
        </Typography>
        <Typography variant="body1">
          Les logos des clubs, associations et fédérations présentées
          appartiennent à leur club respectif.
        </Typography>
      </Paper>
    </Container>
  );
};

export default LinksPage;
