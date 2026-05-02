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
		title: "Emergency Utility Shutoffs",
		summary: "Where to find the water, electrical, and propane shutoffs.",
		body: [
			"Water: whole-house shutoff is in the utility/laundry room.",
			"Electrical: breaker box is labeled and in the utility area.",
			"Propane: shutoff valve is on top of the tank outside.",
			"Power outage: flashlights and a lantern are on the utility shelf. The gas fireplace will run without electricity.",
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
		summary: "Propane grill with tools in the kitchen drawer.",
		body: [
			"Instructions are printed on the barbecue itself. Tools are in the kitchen drawer.",
			"We try to keep the propane canister filled. If it's empty, let us know and we'll exchange it.",
			"Please clean the grill with the brush after use.",
		],
	},
	{
		id: "firepit",
		icon: "campfire",
		title: "Firepit",
		summary: "Approved firepit. Check for burn bans before lighting.",
		body: [
			"First: check for a burn ban. The Lewis County website, the Packwood Post Office, or Blanton's Market will all have it posted.",
			"This is an approved firepit, so it can sometimes be used during partial burn bans, but never during a total burn ban.",
			"Firewood and fire starter are available in town at Blanton's. An axe and hatchet for splitting are in the utility closet.",
			"Roasting sticks for marshmallows or hot dogs are in the deck box. Watch the fire at all times, especially in wind and around kids.",
		],
	},
	{
		id: "hottub",
		icon: "hottub",
		title: "Hot Tub",
		summary: "Rinse before you soak. Cover goes back on when you're done.",
		body: [
			"Rinse off before getting in. Unclip the cover straps, fold the cover, and slide it into the holder. Dust off feet before climbing in.",
			"A skimmer is nearby — use it to remove any pine needles or debris.",
			"Please don't bring glass into the hot tub, and supervise kids at all times.",
			"When you're done, return the cover and clip it in place.",
		],
	},
	// TODO: add a "game room" / "kids room" / "bunk room" entry once you confirm what River Retreat has
];
