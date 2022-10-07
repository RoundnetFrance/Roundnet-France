import propTypes from "prop-types";
import Image from "next/image";
import getEventLabel from "../../helpers/events";
import { useState } from "react";

// MUI IMPORTS
import { Stack, Typography, Box, Paper, Divider } from "@mui/material";
import { useTheme } from "@mui/styles";

// MUI ICONS
import FavoriteIcon from "@mui/icons-material/Favorite";
import GrassIcon from "@mui/icons-material/Grass";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FactCheckIcon from "@mui/icons-material/FactCheck";

// COMPONENT IMPORTS
import IconWithBackground from "../ui/icon-with-background";
import Link from "../ui/link";
import RowCenteredStack from "../ui/row-centered-stack";

export default function TimelineSingle({ event, withYear }) {
  // Get theme from MUI
  const theme = useTheme();

  // Handle image state in case of error
  const [imageSrc, setImageSrc] = useState(event.image);

  // Get event.description and truncate it to a maximum of 160 characters (without breaking words) and add a "..." at the end
  const truncatedDescription = event.description
    ? event.description.substring(0, 160) + "..."
    : "";

  // Check if event.type is a major french tournament (applies to some event details color)
  const isFrenchMajorEvent =
    event.type === "cdf" || event.type === "ric" || event.type === "tourStop";

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={{ xs: 2, md: 1 }}
      sx={{
        p: 2,
        my: 1,
        backgroundColor: isFrenchMajorEvent ? "primary.lightest" : "neutral",
        borderRadius: 2,
        transition: "all 0.2s ease-in-out",
      }}
    >
      {/* LEFT PANEL */}
      <Stack
        direction={{ xs: "row", md: "column" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={{ xs: 2, md: 0 }}
        sx={{
          minWidth: { xs: "100%", sm: "15%", md: "20%" },
          maxWidth: { xs: "100%", sm: "15%", md: "20%" },
          borderRight: 0,
          borderColor: theme.palette.primary.main,
        }}
      >
        <Box>
          {/* Date */}
          <Typography
            variant="h6"
            color={isFrenchMajorEvent ? "primary" : "initial"}
            sx={{ fontWeight: "bold", lineHeight: "1.2" }}
          >
            {new Date(event.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "short",
              year: withYear ? "numeric" : undefined,
            })}
          </Typography>
          {/* Date End (optional) */}
          {event.dateEnd && (
            <Typography
              variant="h6"
              color={isFrenchMajorEvent ? "primary" : "initial"}
              sx={{ fontWeight: "bold", lineHeight: "1.2" }}
            >
              {event.dateEnd &&
                " - " +
                  new Date(event.dateEnd).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                    year: withYear ? "numeric" : undefined,
                  })}
            </Typography>
          )}
          {/* Type */}
          <Typography
            variant="body2"
            color={isFrenchMajorEvent ? "primary" : "initial"}
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            {getEventLabel(event.type)}
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          {/* Format / Catégorie */}
          <RowCenteredStack>
            <FactCheckIcon fontSize="small" color="disabled" />
            <Typography variant="body2" color="text.disabled">
              {getEventLabel(event.format)} / {getEventLabel(event.category)}
            </Typography>
          </RowCenteredStack>
          {/* Participants */}
          <RowCenteredStack>
            <PeopleAltIcon fontSize="small" color="disabled" />
            <Typography variant="body2" color="text.disabled">
              {event.participants} participants
            </Typography>
          </RowCenteredStack>
          {/* Field */}
          <RowCenteredStack>
            <GrassIcon fontSize="small" color="disabled" />
            <Typography variant="body2" color="text.disabled">
              {getEventLabel(event.field)}
            </Typography>
          </RowCenteredStack>
          {/* Beginner */}
          {event.beginnerFriendly && (
            <RowCenteredStack>
              <FavoriteIcon fontSize="small" color="disabled" />
              <Typography variant="body2" color="text.disabled">
                Ouvert aux débutants
              </Typography>
            </RowCenteredStack>
          )}
        </Box>
      </Stack>

      {/* MAIN PANEL */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{ width: { xs: "100%", md: "85%" } }}
      >
        {/* IMAGE & MAIN DETAILS */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={2}
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          {/* IMAGE & MAIN DETAILS WITHOUT LINK ARROW */}
          <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
            <Link href={`/calendrier/${event.slug}`}>
              <Paper
                sx={{
                  position: "relative",
                  minWidth: "180px",
                  height: "180px",
                  maxHeight: "180px",
                  borderLeft: `4px solid ${
                    isFrenchMajorEvent
                      ? theme.palette.primary.main
                      : theme.palette.neutralDark.main
                  }`,
                }}
              >
                <Image
                  src={imageSrc || "/images/misc/placeholder.jpg"}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  onError={() => setImageSrc("/images/misc/placeholder.jpg")}
                />
              </Paper>
            </Link>
            {/* TEXT DETAIL */}
            <Box>
              <Stack
                direction="row"
                gap={1}
                alignItems="flex-start"
                sx={{ mb: 1 }}
              >
                {/* Verified Icon */}
                {isFrenchMajorEvent && (
                  <Box minWidth={50}>
                    <Image
                      src="/images/logos/roundnet-france-tp.png"
                      width={50}
                      height={50}
                      layout="fixed"
                      alt="Roundnet France Official Tournament"
                      title="Roundnet France Official Tournament"
                    />
                  </Box>
                )}
                <Box>
                  <Typography
                    variant="body2"
                    color={isFrenchMajorEvent ? "primary" : "initial"}
                  >
                    {event.city}
                  </Typography>
                  <Typography
                    variant="h6"
                    color={isFrenchMajorEvent ? "primary" : "initial"}
                    sx={{ fontWeight: "bold" }}
                  >
                    <Link
                      href={`/calendrier/${event.slug}`}
                      color={
                        isFrenchMajorEvent ? "primary" : "neutral.contrastText"
                      }
                    >
                      {event.title}
                    </Link>
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="body1" color="text.disabled" gutterBottom>
                {truncatedDescription}
              </Typography>
            </Box>
          </Stack>
          <Box alignSelf="center">
            <Link href={`/calendrier/${event.slug}`}>
              <IconWithBackground
                icon="arrow_forward"
                size={25}
                color={isFrenchMajorEvent ? "primary" : "neutralDark"}
              />
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

TimelineSingle.propTypes = {
  event: propTypes.object.isRequired,
  withYear: propTypes.bool,
};

TimelineSingle.defaultProps = {
  withYear: false,
};
