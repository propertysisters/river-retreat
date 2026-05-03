export type AmenityIcon =
	| "wifi"
	| "temperature"
	| "bulb"
	| "alert"
	| "kitchen"
	| "caravan"
	| "tv"
	| "grill"
	| "campfire"
	| "hottub"
	| "chair";

export type Amenity = {
	id: string;
	icon: AmenityIcon;
	title: string;
	summary: string;
	body: string[];
};

// TODO: replace placeholder bodies with River Retreat-specific instructions.
// Items the user can drop or extend depending on what's on the property.
export const amenities: Amenity[] = [
	{
		id: "internet",
		icon: "wifi",
		title: "Internet",
		summary: "Wifi network and password.",
		body: [
			"The wifi reaches the entire house. If signal is weak in any room, restart the router and try again.",
		],
	},
	{
		id: "climate",
		icon: "temperature",
		title: "Heating & Cooling",
		summary: "Thermostat plus the gas fireplace in the great room.",
		body: [
			"Set the temperature on the wall thermostat. We typically run heating around 68°F and cooling around 72°F — adjust to taste.",
			"The fireplace heats the great room nicely on cold evenings. See the remote guide below for how it works.",
		],
	},
	{
		id: "lighting",
		icon: "bulb",
		title: "Lighting",
		summary: "Indoor dimmers and exterior switches.",
		body: [
			"Several rooms are on dimmers. If a room feels dark, check that the dimmer is turned all the way up.",
			"Exterior light switches are by the slider and the entry door. The driveway light is on a motion detector.",
		],
	},
	{
		id: "emergency",
		icon: "alert",
		title: "Emergency & Utilities",
		summary: "Shutoffs, fire extinguisher, and what to do in a power outage.",
		body: [
			"Emergency: call 911. Fire extinguisher is to the right of the utility sink near the entry door.",
			"Water shutoff: whole-house valve is in the closet in the utility/laundry room, low on the wall next to the water heater.",
			"Electrical: breaker box is in the middle bedroom on the mountain wall — all breakers are labeled.",
			"Power outage: lanterns are in a kitchen drawer labeled 'emergency supplies.' The lighter is in the second drawer to the left of the oven. The wood stove will operate without electricity.",
		],
	},
	{
		id: "kitchen",
		icon: "kitchen",
		title: "Kitchen",
		summary: "Fully stocked with everything a family needs to cook.",
		body: [
			"You'll find all the basics plus extras for cooking with kids: kid-safe utensils, melamine plates, and a few favorite snacks in the pantry.",
			"Hand-wash the pots, pans, and bakeware so their finishes last. Small appliances are available — please clean them before putting them away.",
		],
	},
	{
		id: "tvs",
		icon: "tv",
		title: "TVs & Entertainment",
		summary: "Streaming on every TV — sign in to your apps.",
		body: [
			"Each TV has a streaming stick. Use any popular streaming app — Netflix, Prime, Disney+, Hulu — by signing in with your own credentials.",
			"Don't forget to sign out before you leave.",
		],
	},
	{
		id: "bbq",
		icon: "grill",
		title: "Gas Barbecue",
		summary: "Propane grill on the deck — tools in the kitchen drawer.",
		body: [
			"The grill is on the deck. Utensils are in the kitchen drawer on the right side of the island (toward the window).",
			"We keep the propane filled. If the main canister is empty, backup tanks are next to the barbecue — these work on the heat lamp and fire table too. Let us know if one is empty so we can replace it.",
			"Please clean the grill with the brush after use and turn the propane off when you're done.",
		],
	},
	{
		id: "firepit",
		icon: "campfire",
		title: "Firepit",
		summary: "Check for burn bans before lighting.",
		body: [
			"First: check whether a burn ban is in effect. Visit the Lewis County website, or check the bulletin board at the Packwood Post Office or Blanton's Market.",
			"Marshmallow and hot dog roasting sticks are in the silverware drawer in the kitchen.",
			"Never leave the fire unattended, and make sure it is fully out before you leave.",
		],
	},
	{
		id: "hottub",
		icon: "hottub",
		title: "Hot Tub",
		summary: "Rinse before you soak. Cover goes back on when you're done.",
		body: [
			"Rinse off before getting in and dust off your feet before climbing in.",
			"Temperature: press the 'Temp' button to display the current temp, then press it again within 3 seconds to start adjusting. Each press raises or lowers the set point. Let the display revert if you want to change direction. After 3 seconds without input, the display returns to the current water temperature.",
			"If the tub isn't heating, it may be in economy or sleep mode — ask us and we'll walk you through it.",
			"The skimmer resting against the home can be used to clear pine needles or debris from the water.",
			"No glass in or around the hot tub. When you're done, return the cover over the tub.",
		],
	},
	{
		id: "woodstove",
		icon: "campfire",
		title: "Wood Stove",
		summary: "Cozy heat for cold nights — never leave it unattended.",
		body: [
			"The black knob on the bottom left is the oxygen vent. Pull it out to get the fire started.",
			"As the fire builds and gets hotter, push the knob in to slow the burn.",
			"Never leave the fire unattended, and make sure it is fully out before you leave.",
		],
	},
	{
		id: "tvstand",
		icon: "tv",
		title: "Fire Heater TV Stand",
		summary: "Electric fireplace with adjustable heat, timer, and flame effects.",
		body: [
			"Heat: press the heat button to enable. The display blinks and shows temperature. Default is 82°F — keep pressing to cycle between 64°F and 82°F.",
			"Timer: press the timer button to turn it on, then keep pressing to cycle from 1H to 9H and off. The unit shuts off when the countdown hits zero — press the power button to turn it on again.",
			"Ember, brightness, and flame effects: press the button to enable, press again to cycle through colors and brightness levels.",
		],
	},
	{
		id: "games",
		icon: "chair",
		title: "Games",
		summary: "Ping pong, foosball, and darts — house rules below.",
		body: [
			"Ping pong, foosball, and darts are all available. Equipment is set up and ready to use.",
			"Please return equipment to where you found it after use.",
		],
	},
];
