import propTypes from "prop-types";

// MUI IMPORTS
import { Chip, Icon } from "@mui/material";

export default function ChipList({ chips }) {
  return chips.map((chip) => (
    <Chip
      key={chip.label}
      label={chip.label}
      icon={chip.icon && <Icon>{chip.icon}</Icon>}
      color="primary"
      variant="filled"
      sx={{ px: 1 }}
    />
  ));
}

ChipList.propTypes = {
  chips: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      icon: propTypes.string,
    })
  ).isRequired,
};
