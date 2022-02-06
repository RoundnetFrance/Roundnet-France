import { getDocuments, getDocument } from "../../helpers/db";
import { Fragment } from "react";
import {
  getEventFormat,
  getEventType,
  getEventField,
  getEventCategory,
} from "../../helpers/events";

// MUI IMPORTS
import {
  Container,
  Paper,
  Typography,
  Box,
  Divider,
  Stack,
  Chip,
} from "@mui/material";

// MUI ICONS
import PinDropIcon from "@mui/icons-material/PinDrop";
import EventIcon from "@mui/icons-material/Event";

// COMPONENTS IMPORTS
import Head from "../../components/head";
import Hero from "../../components/ui/hero";

export default function EventSingle({ event }) {
  const chips = [
    getEventField(event.field),
    getEventType(event.type),
    getEventFormat(event.format),
    getEventCategory(event.category),
    event.price + " €",
  ];

  const chipsList = chips.map((chip) => (
    <Chip key={chip} label={chip} color="primary" variant="filled" />
  ));

  return (
    <Fragment>
      {/* HEAD */}
      <Head
        title={`${event.title} - Roundnet France`}
        description={event.description.substring(0, 130) + "..."}
      />

      {/* BODY IMAGE */}
      <Hero half />

      {/* PAPER CONTENT */}
      <Container maxWidth="md">
        <Paper sx={{ position: "relative", top: "-25vh", borderRadius: 4 }}>
          <Box sx={{ p: 2 }}>
            {/* Title */}
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "bold", my: 2 }}
            >
              {event.title}
            </Typography>
            {/* Details */}
            <Stack
              direction="row"
              gap={0.5}
              alignItems="center"
              sx={{ mb: 0.5 }}
            >
              <PinDropIcon color="disabled" fontSize="small" />
              <Typography
                variant="body1"
                color="text.disabled"
                sx={{ fontWeight: "bold" }}
              >
                {event.city}
              </Typography>
            </Stack>
            <Stack direction="row" gap={0.5} alignItems="center" sx={{ mb: 2 }}>
              <EventIcon color="disabled" fontSize="small" />
              <Typography
                variant="body1"
                color="text.disabled"
                sx={{ fontWeight: "bold" }}
              >
                {new Date(event.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            </Stack>
            {/* Chip list */}
            <Stack
              direction="row"
              gap={0.5}
              alignItems="center"
              sx={{ flexWrap: "wrap" }}
            >
              {chipsList}
            </Stack>
          </Box>
          <Divider sx={{ my: 4 }} />
          {/* Description */}
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="initial" sx={{ mb: 1 }}>
              A propos de l&apos;événement
            </Typography>
            <Typography variant="body1" color="text.disabled">
              {event.description}
            </Typography>
          </Box>
          {/* Host */}
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="initial" sx={{ mb: 1 }}>
              Hôte
            </Typography>
            <Typography variant="body1" color="text.disabled">
              {event.organization}
            </Typography>
          </Box>
          {/* Register */}
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="initial" sx={{ mb: 1 }}>
              S&apos;inscrire à l&apos;événement
            </Typography>
            <Typography variant="body1" color="text.disabled">
              {event.organization}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const events = await getDocuments("events");
  const paths = events.map((event) => ({
    params: {
      eventSlug: event.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const event = await getDocument("events", { slug: params.eventSlug });
  return {
    props: {
      event: JSON.parse(JSON.stringify(event)),
    },
    revalidate: 600,
  };
}
