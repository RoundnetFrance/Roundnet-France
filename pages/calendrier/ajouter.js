import { Fragment } from "react";

// MUI IMPORTS
import { Container, Typography } from "@mui/material";

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

      <Container maxWidth="md" sx={{ my: 4 }}>
        <PageTitle title="Donnez de la visibilité à votre tournoi !" />
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim
          debitis possimus doloribus ipsam modi odio magni repellat a delectus
          sed iste quis, perferendis excepturi repellendus veritatis. Inventore
          magnam, fuga adipisci ea aspernatur ipsa facere quidem deleniti,
          itaque odio doloremque? Voluptatibus eos voluptas neque sit dicta
          repellat eum.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim
          debitis possimus doloribus ipsam modi odio magni repellat a delectus
          sed iste quis, perferendis excepturi repellendus veritatis. Inventore
          magnam, fuga adipisci ea aspernatur ipsa facere quidem deleniti,
          itaque odio doloremque? Voluptatibus eos voluptas neque sit dicta
          repellat eum.
        </Typography>
      </Container>

      <CreateEventForm />
    </Fragment>
  );
}
