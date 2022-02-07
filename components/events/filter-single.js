import {
  getEventType,
  getEventCategory,
  getEventFormat,
  getEventField,
  getEventLevel,
} from "../../helpers/events";

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
} from "@mui/material";

// MUI ICONS
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FilterSingle({
  title,
  filters,
  setFilters,
  type,
  handleCheckAll,
}) {
  // Get litteral label from specified type. If type is not supported, simply return the field as is.
  let getLabel;
  switch (type) {
    case "format":
      getLabel = getEventFormat;
      break;

    case "field":
      getLabel = getEventField;
      break;

    case "category":
      getLabel = getEventCategory;
      break;

    case "type":
      getLabel = getEventType;
      break;

    case "level":
      getLabel = getEventLevel;
      break;

    default:
      getLabel = (field) => field;
      break;
  }

  // Return as many field checkboxes as needed
  const fieldsCheckboxes = Object.keys(filters).map((value) => {
    console.log(value);
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
        label={getLabel(value)}
      />
    );
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
      <AccordionDetails>
        <FormGroup>{fieldsCheckboxes}</FormGroup>
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
