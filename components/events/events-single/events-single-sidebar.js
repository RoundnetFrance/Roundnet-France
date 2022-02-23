import propTypes from "prop-types";
import getEventLabel from "../../../helpers/events";

// MUI IMPORTS
import { Box, Icon, Typography, Button } from "@mui/material";

// COMPONENT IMPORTS
import RowCenteredStack from "../../ui/row-centered-stack";
import ChipList from "../../ui/chip-list";

// MUI ICONS
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export default function EventSingleSidebar({
  field,
  type,
  format,
  category,
  participants,
  organization,
  inscriptionUrl,
  price,
  beginnerFriendly,
  date,
}) {
  // Handle chips of event details
  const chips = [
    { label: getEventLabel(field), icon: "grass" },
    { label: getEventLabel(type), icon: "emoji_events" },
    { label: getEventLabel(format), icon: "group_work" },
    { label: getEventLabel(category), icon: "fact_check" },
    { label: `${participants} équipes max`, icon: "people_alt" },
  ];

  // Optional chips
  if (price) chips.push({ label: `${price} € par équipe`, icon: "euro" });
  if (beginnerFriendly)
    chips.push({ label: "Ouvert aux débutants", icon: "favorite" });

  // Determine if event is past
  const isPastEvent = new Date(date) < new Date();

  return (
    <Box sx={{ my: 4 }}>
      {/* Register */}
      <Box sx={{ mb: 2 }}>
        <RowCenteredStack sx={{ mb: 1 }}>
          <Icon>how_to_reg</Icon>
          <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
            Inscription
          </Typography>
        </RowCenteredStack>
        <Button
          startIcon={isPastEvent ? <DoneAllIcon /> : <ExitToAppIcon />}
          href={inscriptionUrl}
          variant="contained"
          color="secondary"
          target="_blank"
          disabled={isPastEvent}
          fullWidth
        >
          {isPastEvent ? "Evenement terminé" : "S'inscrire"}
        </Button>
      </Box>

      {/* Chip list */}
      <Box sx={{ mb: 2 }}>
        <RowCenteredStack sx={{ mb: 2 }}>
          <Icon>loupe</Icon>
          <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
            Détails
          </Typography>
        </RowCenteredStack>
        <ChipList chips={chips} />
      </Box>

      {/* Host (optional) */}
      {organization && (
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
          <Typography variant="body1">{organization}</Typography>
        </Box>
      )}
    </Box>
  );
}

EventSingleSidebar.propTypes = {
  field: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  format: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  participants: propTypes.number.isRequired,
  organization: propTypes.string,
  inscriptionUrl: propTypes.string.isRequired,
  price: propTypes.number,
  beginnerFriendly: propTypes.bool,
  date: propTypes.string.isRequired,
};

EventSingleSidebar.defaultProps = {
  organization: null,
  price: null,
  beginnerFriendly: false,
};
