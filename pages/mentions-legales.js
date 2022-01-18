import { Container, Paper, Typography } from '@mui/material';

// COMPONENT IMPORTS
import Head from '../components/head';
import PageTitle from '../components/ui/page-title';
import Accordion from '../components/ui/accordion';

// CONTENT
import { mentionsLegalesElements } from '../contents/misc';

export default function LegalsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Head title="Liens - Fédération Française de Roundnet" />
      <PageTitle title="Mentions légales" />
      <Accordion items={mentionsLegalesElements} />
    </Container>
  )
}
