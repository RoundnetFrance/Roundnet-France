// MUI IMPORTS
import { Box } from "@mui/material";

// COMPONENT IMPORTS
import FilterSingle from "./filter-single";

export default function FilterEvents({ events, setEvents }) {
  return (
    <Box>
      {/* Terrain */}
      <FilterSingle
        title="Terrain"
        fields={["indoor", "grass", "sand", "outdoor", "urban"]}
        events={events}
        setEvents={setEvents}
        type="field"
      />
      {/* Format */}
      <FilterSingle
        title="Format"
        fields={["2v2", "3v3", "other"]}
        events={events}
        setEvents={setEvents}
        type="format"
      />

      {/* Catégorie */}
      <FilterSingle
        title="Catégorie"
        fields={["mixed", "male", "female"]}
        events={events}
        setEvents={setEvents}
        type="category"
      />

      {/* Type */}
      <FilterSingle
        title="Evénement"
        fields={["open", "cdf", "ric", "worlds", "europe"]}
        events={events}
        setEvents={setEvents}
        type="type"
      />
    </Box>
  );
}
