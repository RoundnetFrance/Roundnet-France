// MUI IMPORTS
import { Paper, Divider, Stack } from "@mui/material";

import EventSingleHead from "./event-single-head";
import EventSingleDescription from "./events-single-description";
import EventSingleSidebar from "./events-single-sidebar";

export default function EventSingleDetails({ event }) {
  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 2,
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        mb: 8,
      }}
    >
      <EventSingleHead
        id={event._id}
        title={event.title}
        city={event.city}
        date={event.date}
        image={event.image}
        address={event.address}
        dateEnd={event.dateEnd}
      />

      {/* Divider */}
      <Divider />

      {/* Second Stack */}
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        gap={{ xs: 1, md: 4 }}
        sx={{ px: { xs: 2, md: 4 } }}
      >
        {/* Description */}
        <EventSingleDescription description={event.description} />

        <Divider orientation="vertical" flexItem />

        {/* DETAILS & REGISTER & HOST */}
        <EventSingleSidebar
          date={event.date}
          field={event.field}
          type={event.type}
          format={event.format}
          category={event.category}
          participants={event.participants}
          organization={event.organization}
          inscriptionUrl={event.inscriptionUrl}
          price={event.price}
          beginnerFriendly={event.beginnerFriendly}
        />
      </Stack>
    </Paper>
  );
}
