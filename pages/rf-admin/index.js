import { useSession, getSession, signIn } from "next-auth/react";
import { Fragment } from "react";
import Link from "next/link";

// MUI IMPORTS
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// COMPONENTS IMPORTS
import FormWrapper from "../../components/ui/form-wrapper";

export default function Component() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <Container maxWidth="xs" sx={{ minHeight: '75vh', mt: 8 }}>
      <FormWrapper title="Se connecter">
        <Fragment>
          <Typography variant="h6" align="center">
            Veuillez vous identifier pour accéder à l&apos;administration.
          </Typography>
          <Button variant="outlined" onClick={signIn}>Se connecter</Button>
          <Link href="/rf-admin/signup" passHref><Button color="secondary">Créer un compte</Button></Link>
        </Fragment>
      </FormWrapper>
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