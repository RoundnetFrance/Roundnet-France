import { Paper, Divider, Stack } from "@mui/material";
import type { Event } from "../../../models/collections/Events";

import { EventSingleHead } from "./event-single-head";
import { EventSingleDescription } from "./events-single-description";
import { EventSingleSidebar } from "./events-single-sidebar";
import { FC } from "react";

interface EventSingleDetailsProps {
	event: Event;
}

export const EventSingleDetails: FC<EventSingleDetailsProps> = ({ event }) => {
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
			<EventSingleHead event={event} />

			<Divider />

			<Stack
				direction={{ xs: "column-reverse", md: "row" }}
				gap={{ xs: 1, md: 4 }}
				sx={{ px: { xs: 2, md: 4 } }}
			>
				<EventSingleDescription description={event.description} />

				<Divider orientation="vertical" flexItem />

				{/* DETAILS & REGISTER & HOST */}
				<EventSingleSidebar event={event} />
			</Stack>
		</Paper>
	);
};
