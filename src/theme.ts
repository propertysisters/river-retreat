import { createTheme, type MantineColorsTuple } from "@mantine/core";

const forest: MantineColorsTuple = [
	"#f1f4f1",
	"#dde6de",
	"#bbcbbd",
	"#94ae98",
	"#73977a",
	"#5d8966",
	"#52835c",
	"#2f3e32",
	"#263227",
	"#1b261c",
];

const river: MantineColorsTuple = [
	"#f3f5f6",
	"#e2e6e9",
	"#c4ccd2",
	"#a4b1ba",
	"#8a9aa5",
	"#7a8c98",
	"#6c7a82",
	"#5b6770",
	"#4a555e",
	"#3a444b",
];

const cedar: MantineColorsTuple = [
	"#fbf3e9",
	"#f1e1cb",
	"#e3c8a4",
	"#d6ae7a",
	"#cb9858",
	"#c58a42",
	"#b8804a",
	"#9d6c3a",
	"#825a30",
	"#684923",
];

export const theme = createTheme({
	primaryColor: "forest",
	primaryShade: { light: 7, dark: 5 },
	colors: {
		forest,
		river,
		cedar,
	},
	fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
	headings: {
		fontFamily: 'Fraunces, Georgia, "Times New Roman", serif',
		fontWeight: "500",
		sizes: {
			h1: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: "1.05" },
			h2: { fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.15" },
			h3: { fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: "1.25" },
			h4: { fontSize: "1.25rem", lineHeight: "1.35" },
		},
	},
	defaultRadius: "md",
	black: "#1C1C1C",
	white: "#F5F0E8",
	other: {
		cream: "#F5F0E8",
		fog: "#E4E2DB",
		charcoal: "#1C1C1C",
		cedarHex: "#B8804A",
		forestHex: "#2F3E32",
		riverHex: "#6C7A82",
	},
});
