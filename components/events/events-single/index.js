import {
  getEventFormat,
  getEventType,
  getEventField,
  getEventCategory,
} from "../../../helpers/events";

// MUI IMPORTS
import {
  Paper,
  Typography,
  Box,
  Divider,
  Stack,
  Chip,
  Button,
  Link,
} from "@mui/material";

// MUI ICONS
import PinDropIcon from "@mui/icons-material/PinDrop";
import EventIcon from "@mui/icons-material/Event";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export default function EventSingleDetails({ event }) {
  // Handle chips of event details
  const chips = [
    getEventField(event.field),
    getEventType(event.type),
    getEventFormat(event.format),
    getEventCategory(event.category),
  ];
  if (event.price) chips.push(`${event.price} €`);
  const chipsList = chips.map((chip) => (
    <Chip key={chip} label={chip} color="primary" variant="filled" />
  ));

  // Determine if event is past
  const isPastEvent = new Date(event.date) < new Date();

  return (
    <Paper
      elevation={8}
      sx={{
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        mb: 8,
      }}
    >
      <Box sx={{ p: 2 }}>
        {/* Title */}
        <Typography
          variant="h4"
          color="primary"
          sx={{ fontWeight: "bold", my: 2 }}
        >
          {event.title}
        </Typography>
        {/* City */}
        <Stack direction="row" gap={0.5} alignItems="center" sx={{ mb: 0.5 }}>
          <PinDropIcon color="disabled" fontSize="small" />
          <Typography
            variant="body1"
            color="text.disabled"
            sx={{ fontWeight: "bold" }}
          >
            {event.city}
          </Typography>
        </Stack>
        {/* Address (optional) */}
        {event.address && (
          <Stack direction="row" gap={0.5} alignItems="center" sx={{ mb: 0.5 }}>
            <MyLocationIcon color="disabled" fontSize="small" />
            <Typography
              variant="body1"
              color="text.disabled"
              sx={{ fontWeight: "bold" }}
            >
              <Link
                href={`https://www.google.com/maps/search/${event.address} ${event.city}`}
                color="text.disabled"
                target="_blank"
              >
                {event.address}
              </Link>
            </Typography>
          </Stack>
        )}
        {/* Date */}
        <Stack direction="row" gap={0.5} alignItems="center" sx={{ mb: 2 }}>
          <EventIcon color="disabled" fontSize="small" />
          <Typography
            variant="body1"
            color="text.disabled"
            sx={{ fontWeight: "bold" }}
          >
            {event.dateEnd ? "Du" : "Le"}{" "}
            {new Date(event.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }) || "TBD"}
            {event.dateEnd &&
              " au " +
                new Date(event.dateEnd).toLocaleDateString("fr-FR", {
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
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {event.description}
        </Typography>
      </Box>
      {/* Host */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="initial" sx={{ mb: 1 }}>
          Hôte
        </Typography>
        <Typography variant="body1">{event.organization}</Typography>
      </Box>
      {/* Register */}
      <Box sx={{ p: 2, pb: 6 }}>
        <Typography variant="h6" color="initial" sx={{ mb: 1 }}>
          S&apos;inscrire à l&apos;événement
        </Typography>
        <Button
          startIcon={isPastEvent ? <DoneAllIcon /> : <ExitToAppIcon />}
          href={event.inscriptionUrl}
          variant="contained"
          target="_blank"
          disabled={isPastEvent}
        >
          {isPastEvent ? "Evenement terminé" : "S'inscrire en ligne"}
        </Button>
      </Box>
    </Paper>
  );
}