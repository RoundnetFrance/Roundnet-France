import propTypes from "prop-types";

// MUI IMPORTS
import { Chip, Icon, Stack } from "@mui/material";

export default function ChipList({ chips, sx }) {
  const list = chips.map((chip) => (
    <Chip
      key={chip.value}
      label={chip.label}
      icon={chip.icon && <Icon>{chip.icon}</Icon>}
      color="primary"
      variant="filled"
      sx={{ px: 1 }}
    />
  ));

  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      sx={{ ...sx, flexWrap: "wrap", width: { xs: "100%", md: "60%" } }}
    >
      {list}{" "}
    </Stack>
  );
}

ChipList.propTypes = {
  chips: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      icon: propTypes.string,
    })
  ).isRequired,
  sx: propTypes.object,
};

ChipList.defaultProps = {
  sx: {},
};
