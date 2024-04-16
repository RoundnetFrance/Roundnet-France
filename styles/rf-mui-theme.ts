"use client";

import { frFR } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
	interface PaletteColorOptions {
		lightest?: string;
		lighter?: string;
		light?: string;
		lightGrey?: string;
		main: string;
		dark?: string;
		darker?: string;
		analogous?: string;
		contrastText?: string;
	}

	interface PaletteOptions {
		neutral: PaletteColorOptions;
		neutralDark: PaletteColorOptions;
	}

	interface Palette {
		neutral: PaletteColorOptions;
		neutralDark: PaletteColorOptions;
	}
}

// Create a theme instance. Affet colors, typography, and localization (frFR, imported from @mui/material/locale)
const rfMuiTheme = createTheme(
	{
		typography: {
			fontFamily: "Urbanist, sans-serif",
			body1: {
				lineHeight: 1.6,
			},
		},
		palette: {
			primary: {
				lightest: "#f1f3fb",
				lighter: "#c1cdf0",
				light: "#778edc",
				main: "#315bcd",
				dark: "#1e48b6",
				darker: "#0f245b",
				analogous: "#31a9cd",
			},
			secondary: {
				lightest: "#feeef3",
				light: "#fb5d89",
				main: "#f50057",
				dark: "#ab003c",
			},
			neutral: {
				main: "#fff",
				lightGrey: "#f1f1f1",
				light: "#f1f1f1",
				contrastText: "#333",
			},
			neutralDark: {
				main: "#555",
				contrastText: "#fff",
			},
			warning: {
				light: "#ff9800",
				main: "#ed6c02",
				dark: "#e65100",
			},
		},
	},
	frFR,
);

export default rfMuiTheme;
