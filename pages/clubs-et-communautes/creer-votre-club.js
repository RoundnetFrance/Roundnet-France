import { Fragment } from "react";

// MUI IMPORTS
import { Container, Typography, Alert, AlertTitle } from "@mui/material";

// COMPONENT IMPORTS
import Hero from "../../components/ui/hero";
import PageTitle from "../../components/ui/page-title";
import Head from "../../components/head";
import CreateClubForm from "../../components/forms/create-club-form";
import Link from "../../components/ui/link";

export default function CreateClubPage() {
  return (
    <Fragment>
      <Head
        title="Créer votre club - Roundnet France"
        description="Créez votre club et rejoignez la communauté Roundnet France."
      />

      <Hero
        title="Créer votre club"
        image="/images/hero/liste-clubs.jpg"
        imagePosition="center 60%"
        mini
      />

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Devenez club officiel affilié à Roundnet France" />
        <Typography variant="body1" gutterBottom>
          Si vous souhaitez plus d&apos;informations sur les avantages et les
          accompagnements que proposent Roundnet France, vous pouvez{" "}
          <Link href="/clubs-et-communautes/adherer-a-roundnet-france">
            cliquer sur ce lien pour plus d&apos;informations.{" "}
          </Link>
        </Typography>
        <Alert severity="info" sx={{ mt: 4 }}>
          <AlertTitle>
            <strong>Important !</strong>
          </AlertTitle>
          <Typography variant="body1">
            N&apos;oubliez pas de payer votre cotisation <strong>avant</strong>{" "}
            de remplir ce formulaire via ce lien :<br />
            <Link href="https://www.helloasso.com/associations/roundnet-france/adhesions/adhesion-clubs-2023">
              <strong>Formulaire d&apos;adhésion HelloAsso</strong>
            </Link>
            .
          </Typography>
        </Alert>
      </Container>

      <CreateClubForm />
    </Fragment>
  );
}
