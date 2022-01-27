import { Container, Paper, Typography } from "@mui/material";

// COMPONENT IMPORTS
import Head from "../components/head";
import PageTitle from "../components/ui/page-title";
import Accordion from "../components/ui/accordion";

export default function PartnersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Head title="Partenaires officiels - Fédération Française de Roundnet" />
      <PageTitle title="Partenaires officiels" />
    </Container>
  );
}
