import { Box, Button, Divider, Typography } from "@mui/material";

import type { FC } from "react";
import { TimelineSingle } from "../../../components/events/timeline-single";
import { Link } from "../../../components/ui";
import { ListingEvent } from "../../../models/collections/Events";

interface EventRelatedProps {
	nextEvents: ListingEvent[];
}

export const EventRelated: FC<EventRelatedProps> = ({ nextEvents }) => {
	const nextEventsList = nextEvents.map((event, index) => (
		<Box key={event._id}>
			<TimelineSingle event={event} withYear />
			{index + 1 !== nextEvents.length && <Divider />}
		</Box>
	));

	return (
		<Box>
			<Typography variant="h5" sx={{ fontWeight: "bold", mb: 4 }}>
				Prochains Tournois
			</Typography>
			{nextEventsList}

			<Link href="/calendrier">
				<Button variant="contained" sx={{ mt: 2 }}>
					Tous les tournois
				</Button>
			</Link>
		</Box>
	);
};
