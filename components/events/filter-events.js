/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

// MUI IMPORTS
import { Box, Typography, Button } from "@mui/material";

// COMPONENT IMPORTS
import FilterSingle from "./filter-single";

const fieldsInitialState = {
  field: {
    indoor: true,
    grass: true,
    sand: true,
    turf: true,
    urban: true,
    other: true,
  },
  format: {
    "2v2": true,
    "3v3": true,
    other: true,
  },
  category: {
    mixed: true,
    male: true,
    female: true,
  },
  type: {
    open: true,
    cdf: true,
    ric: true,
    worlds: true,
    europe: true,
  },
};

export default function FilterEvents({ events, setEvents }) {
  // Handle checkboxes state
  const [fieldFilters, setFieldFilters] = useState(fieldsInitialState);

  function handleFormatChange(event, type) {
    setFieldFilters({
      ...fieldFilters,
      [type]: {
        ...fieldFilters[type],
        [event.target.name]: !fieldFilters[type][event.target.name],
      },
    });
  }

  // Handle controlled events filter
  useEffect(() => {
    const filteredEvents = events.filter((event) => {
      if (
        fieldFilters.field[event.field] &&
        fieldFilters.format[event.format] &&
        fieldFilters.category[event.category] &&
        fieldFilters.type[event.type]
      ) {
        return true;
      }
    });

    setEvents(filteredEvents);
  }, [fieldFilters]);

  // Handle reset of events filter
  function handleReset() {
    setEvents(events);
    setFieldFilters(fieldsInitialState);
  }

  // Handle check all / uncheck all buttons
  function handleCheckAll(type, check) {
    setFieldFilters((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        ...Object.keys(prev[type]).reduce((acc, key) => {
          acc[key] = check;
          return acc;
        }, {}),
      },
    }));
  }

  return (
    <Box>
      {/* Terrain */}
      <FilterSingle
        title="Terrain"
        filters={fieldFilters.field}
        setFilters={handleFormatChange}
        handleCheckAll={handleCheckAll}
        type="field"
      />
      {/* Format */}
      <FilterSingle
        title="Format"
        filters={fieldFilters.format}
        setFilters={handleFormatChange}
        handleCheckAll={handleCheckAll}
        type="format"
      />

      {/* Catégorie */}
      <FilterSingle
        title="Catégorie"
        filters={fieldFilters.category}
        setFilters={handleFormatChange}
        handleCheckAll={handleCheckAll}
        type="category"
      />

      {/* Type */}
      <FilterSingle
        title="Evénement"
        filters={fieldFilters.type}
        setFilters={handleFormatChange}
        handleCheckAll={handleCheckAll}
        type="type"
      />

      <Button onClick={handleReset} sx={{ mt: 2 }}>
        Réinitialiser les filtres
      </Button>
    </Box>
  );
}
