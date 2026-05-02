export type Activity = {
	title: string;
	body: string;
	link?: { label: string; url: string };
};

export const safetyNote =
	"A note before you head out: the riverfront can be rocky and the river runs fast. Use caution accessing the river and always supervise children near the water.";

// TODO: tune the activity list for River Retreat (more family/group oriented).
export const activities: Activity[] = [
	{
		title: "Wildlife watching",
		body: "Bring binoculars — elk, deer, eagles, osprey, and herons are all regulars in the area. Kids love spotting tracks along the river bank.",
	},
	{
		title: "Stargazing",
		body: "Far from city lights — the deck and firepit have the best sky visibility. A great way to wind down with the family.",
	},
	{
		title: "Float the river",
		body: "On warm days you can float gentler stretches of the Cowlitz. Life jackets are required for kids — bring your own or check with us.",
		link: { label: "Skate Creek Park info", url: "https://www.lewiscountywa.gov/" },
	},
	{
		title: "Family hikes",
		body: "Plenty of short, kid-friendly hikes nearby. Ask us for current recommendations based on your kids' ages and the season.",
		link: {
			label: "Popular Packwood trails on AllTrails",
			url: "https://www.alltrails.com/us/washington/packwood",
		},
	},
	{
		title: "Skiing & snow play",
		body: "White Pass Ski Area is about 20 minutes up the mountain in winter — kid lessons, sledding hills, and warm lodges.",
		link: { label: "White Pass Ski Area", url: "https://skiwhitepass.com/" },
	},
	{
		title: "Fishing",
		body: "Packwood Lake is a hike-in lake that rewards the effort. Easier roadside fishing spots are available too — ask us.",
	},
	{
		title: "Need ideas?",
		body: "Message us through the hosting app — we're happy to suggest hikes or activities tailored to the ages and interests in your group.",
	},
];
