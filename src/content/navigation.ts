export type NavItem = {
	id: string;
	label: string;
	summary: string;
};

export const navItems: NavItem[] = [
	{ id: "welcome", label: "Welcome", summary: "About the cabin and your stay" },
	{
		id: "amenities",
		label: "Amenities",
		summary: "Wifi, kitchen, hot tub, game room, and more",
	},
	{ id: "checkout", label: "Checkout", summary: "Checkout checklist for departure day" },
	{
		id: "activities",
		label: "Activities",
		summary: "Family-friendly things to do nearby",
	},
	{ id: "eats", label: "Eats & Drinks", summary: "Local restaurants and family stops" },
];
