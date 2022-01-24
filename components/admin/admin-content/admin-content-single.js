// MUI IMPORTS
import { Container, Paper } from "@mui/material";

import PageTitle from "../../../components/ui/page-title";

export default function AdminContentSingle({ config }) {
  console.log(config);
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 2 }}>
      <PageTitle title={config.title} />
      <Paper>
        <p>Coucou</p>
      </Paper>
    </Container>
  );
}
