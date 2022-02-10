import { Fragment } from "react";

// MUI IMPORTS
import { Container, Typography, Alert, AlertTitle } from "@mui/material";

// COMPONENT IMPORTS
import Hero from "../../components/ui/hero";
import PageTitle from "../../components/ui/page-title";
import Head from "../../components/head";
import CreateEventForm from "../../components/forms/create-event-form";

export default function CreateEventPage() {
  return (
    <Fragment>
      <Head
        title="Ajouter un évent ou tournoi de roundnet - Roundnet France"
        description="Profitez de la visibilité de Roundnet France pour ajouter un évent ou un tournoi de roundnet le faire connaître !"
      />

      <Hero
        title="Ajouter un tournoi"
        image="/images/hero/liste-clubs.jpg"
        imagePosition="center 60%"
        mini
      />

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <PageTitle title="Donnez de la visibilité à votre tournoi !" />
        <Typography variant="body1" sx={{ mb: 4 }}>
          Votre tournoi est fin prêt et vous avez besoin d&apos;un petit coup de
          pouce dans votre communication ? Ajoutez-le dans le calendrier
          officiel des tournois et événements de roundnet en France !
        </Typography>

        <Alert severity="info" sx={{ my: 2, fontWeight: "bold" }}>
          Chaque demande de tournoi doit être validée par un membre de la
          fédération pour apparaître en ligne.
        </Alert>

        <Alert severity="warning" sx={{ fontWeight: "bold" }}>
          <AlertTitle sx={{ fontWeight: "bold" }}>Attention !</AlertTitle>
          Lorsque vous validez votre tournoi, vous ne pourrez plus le modifier
          par la suite. Soyez bien sûrs des informations que vous entrez ! Dans
          le cas où certaines informations vous sont encore inconnues (prix,
          date exacte...), préférez remplir ce formulaire une fois votre
          événement et ses détails fixés.
        </Alert>
      </Container>

      <CreateEventForm />
    </Fragment>
  );
}
