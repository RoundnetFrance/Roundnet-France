import MenuIcon from "@mui/icons-material/Menu";
import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import { FC, Fragment, useState } from "react";
import MobileNavItems from "./mobile-nav-items";
import { MenuItem } from "../../../models/Header";

interface MenuDrawerProps {
	menuElements: MenuItem[];
	adminLayout: boolean;
}

const MenuDrawer: FC<MenuDrawerProps> = ({ menuElements, adminLayout }) => {
	const [menuOpen, setMenuOpen] = useState({});
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

	const handleCollapseElements = (slug: string) => {
		const newMenuOpen = { ...menuOpen };
		newMenuOpen[slug] = !menuOpen[slug];
		setMenuOpen((prev) => ({ ...prev, ...newMenuOpen }));
	};

	return (
		<Fragment>
			<IconButton
				onClick={toggleDrawer}
				size="small"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{
					display: { xs: "inherit", lg: adminLayout ? "inherit" : "none" },
				}}
			>
				<MenuIcon />
			</IconButton>
			<Drawer
				anchor="right"
				variant="temporary"
				open={isDrawerOpen}
				onClose={toggleDrawer}
			>
				<Box>
					<Typography
						color={adminLayout ? "secondary" : "primary"}
						variant="h5"
						gutterBottom
						sx={{
							mt: 2,
							ml: 2,
							mb: 2,
							lineHeight: 1,
						}}
					>
						{adminLayout ? "Administration" : "Roundnet France"}
					</Typography>
					<Divider />

					<MobileNavItems
						items={menuElements}
						toggleDrawer={toggleDrawer}
						handleCollapseElements={handleCollapseElements}
						menuOpen={menuOpen}
						adminLayout={adminLayout}
					/>
				</Box>
			</Drawer>
		</Fragment>
	);
};

export default MenuDrawer;
