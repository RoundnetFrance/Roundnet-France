import { getEventLabel } from "../../helpers/events";

import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	ButtonBase,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC, MouseEvent as ReactMouseEvent } from "react";

interface FilterSingleProps {
	title: string;
	filters: Record<string, boolean>;
	setFilters: (
		event: ReactMouseEvent<HTMLButtonElement, MouseEvent>,
		type: string,
	) => void;
	type: string;
	handleCheckAll: (type: string, check: boolean) => void;
	form: string;
}

export const FilterSingle: FC<FilterSingleProps> = ({
	title,
	filters,
	setFilters,
	type,
	handleCheckAll,
	form,
}) => {
	// Return as many fields as needed
	const fieldsCheckboxes = Object.keys(filters).map((value) => {
		if (form === "checkbox") {
			return (
				<FormControlLabel
					key={value}
					control={
						<Checkbox
							name={value}
							checked={filters[value]}
							size="small"
							onClick={(event) => {
								setFilters(event, type);
							}}
						/>
					}
					label={getEventLabel(value)}
				/>
			);
		}
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
			{/* CONTENT */}
			<AccordionDetails>
				{/* Fields */}
				<FormGroup>{fieldsCheckboxes}</FormGroup>

				{/* Helpers */}
				<Box mt={1}>
					<ButtonBase onClick={() => handleCheckAll(type, true)}>
						<Typography variant="caption" color="initial">
							Tout cocher
						</Typography>
					</ButtonBase>{" "}
					<Typography variant="caption" color="initial">
						/
					</Typography>{" "}
					<ButtonBase onClick={() => handleCheckAll(type, false)}>
						<Typography variant="caption" color="initial">
							Tout décocher
						</Typography>
					</ButtonBase>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};
