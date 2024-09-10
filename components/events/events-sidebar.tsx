import { Box, Stack, Typography } from "@mui/material";

import type { Dispatch, FC, SetStateAction } from "react";
import type { ListingEvent } from "../../models/collections/Events";
import { Link } from "../ui";
import { FilterEvents } from "./filter-events";
import { TimelineSingleMini } from "./timeline-single-mini";

interface EventsSidebarProps {
	pastEvents: ListingEvent[];
	events: ListingEvent[];
	setEvents: Dispatch<SetStateAction<ListingEvent[]>>;
	newEvents: ListingEvent[];
}

export const EventsSidebar: FC<EventsSidebarProps> = ({
	pastEvents,
	events,
	setEvents,
	newEvents,
}) => {
	const pastTimeline = pastEvents.map((event) => (
		<TimelineSingleMini key={event._id} event={event} />
	));

	const newlyAddedTimeline = newEvents.map((event) => (
		<TimelineSingleMini key={event._id} event={event} />
	));

	return (
		<Stack direction="column" gap={4} sx={{ width: { xs: "100%", md: "25%" } }}>
			<Box>
				<Typography variant="h5" color="initial" sx={{ mb: 2 }}>
					Ajouter votre événement
				</Typography>
				<Typography variant="body2" sx={{ mb: 1 }}>
					Votre événement est prêt et n&apos;a plus besoin que d&apos;un coup de
					pouce ? <strong>Publiez le sur le site de la fédération !</strong>
				</Typography>
				<Link href="/calendrier/ajouter" buttonIcon="add" isButton>
					Ajouter un tournoi
				</Link>
			</Box>
			<Box>
				<Typography variant="h5" color="initial" sx={{ mb: 2 }}>
					Filtrer
				</Typography>
				<FilterEvents events={events} setEvents={setEvents} />
			</Box>
			<Box sx={{ display: { xs: "none", md: "block" } }}>
				<Typography variant="h5" color="initial" sx={{ mb: 2 }}>
					Derniers ajouts
				</Typography>
				{newlyAddedTimeline}
			</Box>
			<Box sx={{ display: { xs: "none", md: "block" } }}>
				<Typography variant="h5" color="initial" sx={{ mb: 2 }}>
					Evenements passés
				</Typography>
				{pastTimeline}
			</Box>
		</Stack>
	);
};
