import getEventLabel from "../../helpers/events";

// MUI IMPORTS
import {
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ButtonBase,
  Box,
  RadioGroup,
  Radio,
} from "@mui/material";

// MUI ICONS
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FilterSingle({
  title,
  filters,
  setFilters,
  type,
  handleCheckAll,
  form,
}) {
  // Return as many fields as needed
  const fieldsCheckboxes = Object.keys(filters).map((value) => {
    if (form === "checkbox") {
      return (
        <FormControlLabel
          key={value}
          control={
            <Checkbox
              name={value}
              checked={filters[value]}
              size="small"
              onClick={(event) => {
                setFilters(event, type);
              }}
            />
          }
          label={getEventLabel(value)}
        />
      );
    }
  });

  return (
    <Accordion elevation={0} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="body1" color="initial">
          {title}
        </Typography>
      </AccordionSummary>
      {/* CONTENT */}
      <AccordionDetails>
        {/* Fields */}
        <FormGroup>{fieldsCheckboxes}</FormGroup>

        {/* Helpers */}
        <Box mt={1}>
          <ButtonBase onClick={() => handleCheckAll(type, true)}>
            <Typography variant="caption" color="initial">
              Tout cocher
            </Typography>
          </ButtonBase>{" "}
          <Typography variant="caption" color="initial">
            /
          </Typography>{" "}
          <ButtonBase onClick={() => handleCheckAll(type, false)}>
            <Typography variant="caption" color="initial">
              Tout décocher
            </Typography>
          </ButtonBase>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
