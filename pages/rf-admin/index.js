import { getSession, signIn } from "next-auth/react";
import { Fragment } from "react";
import Link from "next/link";

// MUI IMPORTS
import { Button, Container, Typography } from '@mui/material';

// COMPONENTS IMPORTS
import BoxWrapper from "../../components/ui/box-wrapper";

export default function AdminPage() {
  return (
    <Container maxWidth="xs">
      <BoxWrapper title="Se connecter">
        <Fragment>
          <Typography variant="h6" align="center">
            Veuillez vous identifier pour accéder à l&apos;administration.
          </Typography>
          <Button variant="outlined" onClick={signIn}>Se connecter</Button>
          <Link href="/rf-admin/signup" passHref><Button color="secondary">Créer un compte</Button></Link>
        </Fragment>
      </BoxWrapper>
    </Container>
  )
}

export async function getServerSideProps({ req }) {
  // If user is connected, redirect to dashboard
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: '/rf-admin/dashboard',
        permanent: false,
      },
    };
  }
  // If not, do nothing
  return {
    props: {},
  };
}