export type Restaurant = {
	name: string;
	phone?: string;
	description: string;
};

// Same Packwood restaurant scene as the River House — these are well-tested family picks.
export const packwoodRestaurants: Restaurant[] = [
	{
		name: "The Blue Spruce Bar and Grill",
		phone: "+13604945605",
		description:
			"Bar food done well — burgers, fried chicken, fried baskets, steaks, and salad, plus a full bar. Wednesdays are taco night, plentiful and cheap. Kids welcome in the non-bar area. Eat in or take out.",
	},
	{
		name: "Packwood Brewing Company",
		description:
			"Microbrews, plus wine, ciders, and other cocktails depending on the day. Chips and salsa, an assortment of tacos, and rotating food. In busier seasons keep an eye out for the Ice Cream Airstream and other food trucks.",
	},
	{
		name: "Droppers",
		phone: "+13604942055",
		description:
			"Burger specialists with several to choose from, plus fish and chips, chicken strips, and other classics. Eat in or take out.",
	},
	{
		name: "Cruiser's Pizza",
		phone: "+13604945400",
		description:
			"Pizza-first menu but plenty of other options, including breakfast. The Packwood Special and the Taco Pizza are visitor favorites. Eat in or take out.",
	},
	{
		name: "Nachos Mexican Restaurant",
		phone: "+13604944000",
		description:
			"Solid Mexican fare — tacos, burritos, enchiladas, fajitas. Eat in, take out, or order online.",
	},
	{
		name: "The Mountain Goat Café and Bakery",
		phone: "+13604945600",
		description: "Baked goods and a full coffee menu — a good morning stop.",
	},
	{
		name: "White Pass Tacqueria and Tap Room",
		phone: "+13604927137",
		description:
			"Open 8–3, Wednesday through Monday. A great stop on the way up to the ski area — tacos and Tex-Mex. Eat in or take out.",
	},
];

export const greaterAreaRestaurants: Restaurant[] = [
	{
		name: "White Pass Ski Lodge",
		phone: "+15096723101",
		description:
			"Open during ski season, with eight different places to eat across the resort, including High Camp Lodge partway down the slopes. Fun spot to watch the mountain even if you're not skiing.",
	},
	{
		name: "Paradise Inn Dining Room",
		phone: "+13605692275",
		description:
			"Open summer through early fall for breakfast, lunch, and dinner. Sunday brunch in summer is a tradition.",
	},
	{
		name: "Copper Creek Inn",
		phone: "+13605692326",
		description:
			"A local favorite for breakfast, lunch, and dinner. Country food — beef stew, salmon, fresh trout — and the homemade blackberry pie is the thing to order. Best in summer when Skate Creek Road is open.",
	},
];
