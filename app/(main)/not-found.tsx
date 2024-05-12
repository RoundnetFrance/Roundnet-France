import { Container } from "@mui/material";

import { CTAFooter } from "../../components/ui";
import type { FC } from "react";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Page introuvable - Fédération Française de Roundnet",
};

const NotFound: FC = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <CTAFooter
        title='Page introuvable'
        subtitle="La page que vous recherchez n'existe pas."
        mainLink={{
          text: "Retour à l'accueil",
          url: "/",
        }}
      />
    </Container>
  );
};

export default NotFound;
