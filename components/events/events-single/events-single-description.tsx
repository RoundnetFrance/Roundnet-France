import { Box, Icon, Typography } from "@mui/material";

import { RowCenteredStack } from "../../ui";
import { FC } from "react";

interface EventSingleDescriptionProps {
	description: string;
}

export const EventSingleDescription: FC<EventSingleDescriptionProps> = ({
	description,
}) => {
	return (
		<Box
			sx={{
				my: 2,
				py: 2,
				minWidth: { xs: "100%", md: "60%" },
				maxWidth: { xs: "100%", md: "60%" },
			}}
		>
			<RowCenteredStack sx={{ mb: 1 }}>
				<Icon>info</Icon>
				<Typography variant="h5" color="initial" sx={{ fontWeight: "bold" }}>
					À propos de l&apos;événement
				</Typography>
			</RowCenteredStack>
			<Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
				{description}
			</Typography>
		</Box>
	);
};
