import getEventLabel from "../../../helpers/events";
import Image from "next/image";

// MUI IMPORTS
import {
  Paper,
  Typography,
  Box,
  Divider,
  Stack,
  Button,
  Link,
  Icon,
} from "@mui/material";

// MUI ICONS
import PinDropIcon from "@mui/icons-material/PinDrop";
import EventIcon from "@mui/icons-material/Event";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DoneAllIcon from "@mui/icons-material/DoneAll";

// COMPONENT IMPORTS
import ChipList from "../../ui/chip-list";
import RowCenteredStack from "../../ui/row-centered-stack";

export default function EventSingleDetails({ event }) {
  // Handle chips of event details
  const chips = [
    { label: getEventLabel(event.field), icon: "grass" },
    { label: getEventLabel(event.type), icon: "emoji_events" },
    { label: getEventLabel(event.format), icon: "group_work" },
    { label: getEventLabel(event.category), icon: "fact_check" },
    { label: `${event.participants} équipes max`, icon: "people_alt" },
  ];

  // Optional chips
  if (event.price)
    chips.push({ label: `${event.price} € par équipe`, icon: "euro" });
  if (event.beginnerFriendly)
    chips.push({ label: "Ouvert aux débutants", icon: "favorite" });

  // Determine if event is past
  const isPastEvent = new Date(event.date) < new Date();

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        mb: 8,
      }}
    >
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: { xs: 2, md: 4 } }}
        gap={2}
      >
        <Box width={{ xs: "100%", md: "60%" }}>
          {/* Title */}
          <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
            {event.title}
          </Typography>
          {/* City */}
          <Stack direction="row" gap={0.5} alignItems="center" sx={{ mb: 0.5 }}>
            <PinDropIcon color="disabled" fontSize="mdall" />
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
            <Stack
              direction="row"
              gap={0.5}
              alignItems="center"
              sx={{ mb: 0.5 }}
            >
              <MyLocationIcon color="disabled" fontSize="mdall" />
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
            <EventIcon color="disabled" fontSize="mdall" />
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
        </Box>
        <Paper
          sx={{
            position: "relative",
            height: { xs: "300px", sm: "200px" },
            minWidth: { xs: "100%", sm: "200px" },
            maxWidth: { xs: "100%", sm: "200px" },
          }}
        >
          <Image
            src={event.image || "/images/pages/event-single/placeholder.jpg"}
            alt={event.title}
            title={event.title}
            objectFit="cover"
            layout="fill"
          />
        </Paper>
      </Stack>

      {/* Divider */}
      <Divider />

      {/* Second Stack */}
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        gap={{ xs: 1, md: 4 }}
        sx={{ px: { xs: 2, md: 4 } }}
      >
        {/* Description */}
        <Box
          sx={{
            my: 2,
            py: 2,
            minWidth: { xs: "100%", md: "60%" },
            maxWidth: { xs: "100%", md: "60%" },
          }}
        >
          <RowCenteredStack sx={{ mb: 1 }}>
            <Icon>info</Icon>
            <Typography
              variant="h5"
              color="initial"
              sx={{ fontWeight: "bold" }}
            >
              À propos de l&apos;événement
            </Typography>
          </RowCenteredStack>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {event.description}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem />

        {/* DETAILS & REGISTER & HOST */}

        <Box sx={{ mt: 4 }}>
          {/* Chip list */}
          <Box sx={{ mb: 2 }}>
            <RowCenteredStack sx={{ mb: 2 }}>
              <Icon>loupe</Icon>
              <Typography
                variant="h6"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Détails
              </Typography>
            </RowCenteredStack>
            <ChipList chips={chips} />
          </Box>

          {/* Register */}
          <Box sx={{ mt: 2 }}>
            <RowCenteredStack sx={{ mb: 1 }}>
              <Icon>how_to_reg</Icon>
              <Typography
                variant="h6"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Inscription
              </Typography>
            </RowCenteredStack>
            <Button
              startIcon={isPastEvent ? <DoneAllIcon /> : <ExitToAppIcon />}
              href={event.inscriptionUrl}
              variant="contained"
              color="secondary"
              target="_blank"
              disabled={isPastEvent}
              fullWidth
            >
              {isPastEvent ? "Evenement terminé" : "S'inscrire"}
            </Button>
          </Box>
          {/* Host (optional) */}
          {event.organization && (
            <Box sx={{ mt: 2, mb: 4 }}>
              <RowCenteredStack sx={{ mb: 0 }}>
                <Icon>gite</Icon>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{ fontWeight: "bold" }}
                >
                  Hôte
                </Typography>
              </RowCenteredStack>
              <Typography variant="body1">{event.organization}</Typography>
            </Box>
          )}
        </Box>
      </Stack>
    </Paper>
  );
}
