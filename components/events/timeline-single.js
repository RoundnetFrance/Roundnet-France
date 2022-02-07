import propTypes from "prop-types";
import Image from "next/image";
import {
  getEventFormat,
  getEventType,
  getEventField,
} from "../../helpers/events";

// MUI IMPORTS
import { Stack, Typography, Box, Paper } from "@mui/material";

// MUI ICONS
import VerifiedIcon from "@mui/icons-material/Verified";

// COMPONENT IMPORTS
import IconWithBackground from "../ui/icon-with-background";
import Link from "../ui/link";

export default function TimelineSingle({ event, withYear }) {
  // Get event.description and truncate it to a maximum of 160 characters (without breaking words) and add a "..." at the end
  const truncatedDescription = event.description
    ? event.description.substring(0, 160) + "..."
    : "";

  // Check if event.type is a major french tournament (applies to some event details color)
  const isFrenchMajorEvent = event.type === "cdf" || event.type === "ric";

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={2}
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
        direction="column"
        sx={{
          width: { xs: "100%", md: "15%" },
          pr: 1,
          borderRight: 0,
          borderColor: "#315bcd",
        }}
      >
        <Typography
          variant="h6"
          color={isFrenchMajorEvent ? "primary" : "initial"}
          sx={{ fontWeight: "bold" }}
        >
          {new Date(event.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: withYear ? "numeric" : undefined,
          })}
        </Typography>
        <Typography
          variant="body2"
          color={isFrenchMajorEvent ? "primary" : "text.disabled"}
          sx={{ fontWeight: "bold" }}
        >
          {getEventType(event.type)} / {getEventFormat(event.format)}
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {event.participants} participants
        </Typography>
        <Typography variant="body2" color="text.disabled">
          {getEventField(event.field)}
        </Typography>
      </Stack>

      {/* MAIN PANEL */}
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: { xs: "100%", md: "85%" } }}
      >
        {/* IMAGE & MAIN DETAILS */}
        <Stack direction={{ xs: "column", sm: "row" }} gap={2}>
          <Link href={`/calendrier/${event.slug}`}>
            <Paper
              sx={{
                position: "relative",
                minWidth: "150px",
                height: "150px",
                maxHeight: "150px",
                borderLeft: `4px solid #${
                  isFrenchMajorEvent ? "315bcd" : "333"
                }`,
              }}
            >
              <Image
                src={event.image || "/images/misc/placeholder.jpg"}
                alt={event.title}
                layout="fill"
                objectFit="cover"
              />
            </Paper>
          </Link>

          {/* TEXT DETAIL */}
          <Box>
            <Typography
              variant="body2"
              color={isFrenchMajorEvent ? "primary" : "initial"}
            >
              {event.city}
            </Typography>
            <Stack direction="row" gap={1} alignItems="center" sx={{ mb: 1 }}>
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
              {isFrenchMajorEvent && <VerifiedIcon color="primary" />}
            </Stack>
            <Typography variant="body1" color="text.disabled" gutterBottom>
              {truncatedDescription}
            </Typography>
          </Box>
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
