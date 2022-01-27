import { Container } from "@mui/material";

// COMPONENT IMPORTS
import CTAFooter from "../components/ui/cta-footer";
import Head from "../components/head";

export default function Custom404() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Head title="Page introuvable - Fédération Française de Roundnet" />
      <CTAFooter
        title="Page introuvable"
        subtitle="La page que vous recherchez n'existe pas."
        mainLink={{
          text: "Retour à l'accueil",
          url: "/",
        }}
      />
    </Container>
  );
}
