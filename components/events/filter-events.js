/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

// MUI IMPORTS
import { Box, Button } from "@mui/material";

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
    free: true,
    mixed: true,
    male: true,
    female: true,
  },
  type: {
    open: true,
    cdf: true,
    ric: true,
    // worlds: true,
    // europe: true,
    tourStop: true,
  },
  level: {
    beginnerFriendly: true,
    noBeginner: true,
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
        // Handle level filter (true/false to beginnerFriendly in db)
        if (
          fieldFilters.level.beginnerFriendly &&
          fieldFilters.level.noBeginner
        ) {
          return true;
        }
        if (fieldFilters.level.beginnerFriendly) {
          return event.beginnerFriendly === true;
        }
        if (fieldFilters.level.noBeginner) {
          return !event.beginnerFriendly;
        }
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
        form="checkbox"
      />
      {/* Format */}
      <FilterSingle
        title="Format"
        filters={fieldFilters.format}
        setFilters={handleFormatChange}
        handleCheckAll={handleCheckAll}
        type="format"
        form="checkbox"
      />

      {/* Catégorie */}
      <FilterSingle
        title="Catégorie"
        filters={fieldFilters.category}
        setFilters={handleFormatChange}
        handleCheckAll={handleCheckAll}
        type="category"
        form="checkbox"
      />

      {/* Type */}
      <FilterSingle
        title="Evénement"
        filters={fieldFilters.type}
        setFilters={handleFormatChange}
        handleCheckAll={handleCheckAll}
        type="type"
        form="checkbox"
      />

      {/* Type */}
      <FilterSingle
        title="Niveau"
        filters={fieldFilters.level}
        setFilters={handleFormatChange}
        handleCheckAll={handleCheckAll}
        type="level"
        form="checkbox"
      />

      <Button onClick={handleReset} sx={{ mt: 2 }}>
        Réinitialiser les filtres
      </Button>
    </Box>
  );
}
