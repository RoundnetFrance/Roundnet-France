import { Box, Typography } from "@mui/material";
import { Link } from "../ui";
import type { FC } from "react";
import type { ListingEvent } from "../../models/collections/Events";

interface TimelineSingleMiniProps {
  event: ListingEvent;
}

export const TimelineSingleMini: FC<TimelineSingleMiniProps> = ({ event }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="body1"
        color="primary"
        sx={{ fontWeight: "bold", mb: 0 }}
      >
        <Link href={`/calendrier/${event.slug}`}>{event.title}</Link>
      </Typography>
      <Typography variant="body1" color="text.disabled" sx={{ mb: 2 }}>
        {new Date(event.date).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Typography>
    </Box>
  );
};
