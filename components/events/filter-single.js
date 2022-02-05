/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  getEventType,
  getEventCategory,
  getEventFormat,
  getEventField,
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
  fields,
  events,
  setEvents,
  type,
}) {
  // Turn fields into an object with true to each field key
  const initialState = fields.reduce((acc, field) => {
    acc[field] = true;
    return acc;
  }, {});

  const [fieldFilters, setFieldFilters] = useState(initialState);

  // Handle controlled checkbox
  function handleFormatChange(e) {
    setFieldFilters({
      ...fieldFilters,
      [e.target.name]: !fieldFilters[e.target.name],
    });
  }

  // Handle check all / uncheck all buttons
  function handleCheckAll() {
    setFieldFilters(initialState);
  }

  function handleUncheckAll() {
    setFieldFilters(
      fields.reduce((acc, field) => {
        acc[field] = false;
        return acc;
      }, {})
    );
  }

  // Handle controlled events filter
  useEffect(() => {
    const filteredEvents = events.filter((event) => {
      if (fieldFilters[event[type]]) {
        return true;
      }
      return false;
    });

    setEvents(filteredEvents);
  }, [fieldFilters]);

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

    default:
      getLabel = (field) => field;
      break;
  }

  // Return as many field checkboxes as needed
  const fieldsCheckboxes = fields.map((field) => {
    return (
      <FormControlLabel
        key={field}
        control={
          <Checkbox
            name={field}
            checked={fieldFilters[field]}
            size="small"
            onClick={handleFormatChange}
          />
        }
        label={getLabel(field)}
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
          <ButtonBase onClick={handleCheckAll}>
            <Typography variant="caption" color="initial">
              Tout cocher
            </Typography>
          </ButtonBase>{" "}
          <Typography variant="caption" color="initial">
            /
          </Typography>{" "}
          <ButtonBase onClick={handleUncheckAll}>
            <Typography variant="caption" color="initial">
              Tout décocher
            </Typography>
          </ButtonBase>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
