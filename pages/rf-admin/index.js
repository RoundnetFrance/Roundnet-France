import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import Link from "next/link";

// MUI IMPORTS
import { Button, Container, Typography, Box } from "@mui/material";

// COMPONENTS IMPORTS
import BoxWrapper from "../../components/ui/box-wrapper";
import Loader from "../../components/ui/loader";

export default function AdminPage() {
  const router = useRouter();
  // Handle redirect if no session
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) router.push(`/rf-admin/dashboard`);
  }, [router, session]);

  // If loading, display loading screen
  if (status === "loading")
    return (
      <Box mt={24}>
        <Loader />
      </Box>
    );

  if (status === "unauthenticated")
    return (
      <Container maxWidth="xs" sx={{ mt: 8 }}>
        <BoxWrapper title="Se connecter">
          <Fragment>
            <Typography variant="h6" align="center">
              Veuillez vous identifier pour accéder à l&apos;administration.
            </Typography>
            <Button variant="outlined" onClick={signIn}>
              Se connecter
            </Button>
            <Link href="/rf-admin/signup" passHref>
              <Button color="secondary">Créer un compte</Button>
            </Link>
          </Fragment>
        </BoxWrapper>
      </Container>
    );

  return (
    <Box mt={24}>
      <Loader />
    </Box>
  );
}
