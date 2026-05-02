import { IconArrowUpRight } from "@tabler/icons-react";
import {
	greaterAreaRestaurants,
	packwoodRestaurants,
	type Restaurant,
} from "../../content/restaurants";
import { PhoneLink } from "../PhoneLink";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import classes from "./EatsAndDrinks.module.css";

function RestaurantCard({ r }: { r: Restaurant }) {
	return (
		<article className={classes.card}>
			<div className={classes.cardTop}>
				<h3 className={classes.name}>{r.name}</h3>
				{r.phone && <PhoneLink number={r.phone} />}
			</div>
			<p className={classes.description}>{r.description}</p>
		</article>
	);
}

export function EatsAndDrinks() {
	return (
		<Section id="eats">
			<SectionHeader kicker="Eats & Drinks" title="Where to eat in Packwood" />

			<div className={classes.grid}>
				{packwoodRestaurants.map((r) => (
					<RestaurantCard key={r.name} r={r} />
				))}
			</div>

			<h2 className={classes.subheading}>Worth the drive</h2>
			<p className={classes.subintro}>A bit further afield, but all locally beloved.</p>

			<div className={classes.grid}>
				{greaterAreaRestaurants.map((r) => (
					<RestaurantCard key={r.name} r={r} />
				))}
			</div>

			<p className={classes.note}>
				Hours and availability change with the seasons — a quick call or search before you
				head out is always worth it.{" "}
				<a
					href="https://www.google.com/maps/search/restaurants+near+Packwood+WA"
					target="_blank"
					rel="noopener noreferrer"
					className={classes.moreLink}
				>
					More options on Google Maps <IconArrowUpRight size={13} stroke={1.75} />
				</a>
			</p>
		</Section>
	);
}
