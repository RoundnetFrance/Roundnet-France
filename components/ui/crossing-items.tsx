import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import InfoBlock from "./info-block";

interface Item {
	_id: string;
	title: string;
	chip?: string;
	image?: string;
	description: string;
	links?:
		| string
		| {
				url: string;
				text?: string;
				outLink?: boolean;
		  }[];
}

interface CrossingItemsProps {
	items: Item[];
	roundedItems?: boolean;
	height?: number;
	roundedEverywhere?: boolean;
	imageFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export default function CrossingItems({
	items,
	roundedItems = false,
	height = 400,
	roundedEverywhere = false,
	imageFit = "cover",
}: CrossingItemsProps) {
	return (
		<Stack direction="column" alignItems="center" spacing={{ xs: 2, md: 4 }}>
			{items.map((item, index) => (
				<Box
					key={item._id}
					sx={{
						position: "relative",
						left: { xs: 0, md: index % 2 === 0 ? "2.5rem" : "-2.5rem" },
					}}
				>
					<InfoBlock
						title={item.title}
						chip={item.chip}
						image={item.image}
						description={item.description}
						links={item.links}
						height={roundedItems ? 260 : height}
						imageToLeft={index % 2 === 0}
						roundedImage={roundedItems}
						roundedEverywhere={roundedEverywhere}
						imageFit={imageFit}
					/>
				</Box>
			))}
		</Stack>
	);
}
