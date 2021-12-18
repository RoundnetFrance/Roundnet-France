import { useRouter } from "next/router";

// MUI IMPORTS
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Divider from "@mui/material/Divider";

// COMPONENTS IMPORTS
import FormWrapper from "../../components/ui/form-wrapper";
import Link from '../../components/ui/link';

export default function AdminErrorPage() {
  const router = useRouter();
  const { error } = router.query;

  return (
    <Container maxWidth="xs" sx={{ minHeight: '75vh', mt: 8 }}>
      <FormWrapper title="Connexion">
        <Alert severity="error">
          <AlertTitle><strong>Erreur</strong></AlertTitle>
          {error}
        </Alert>
        <Divider />
        <Typography variant="body2">
          <Link href="/rf-admin" passHref>Retour</Link>
        </Typography>
      </FormWrapper>
    </Container>
  )
}