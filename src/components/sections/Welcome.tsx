import riverImage from "../../assets/images/river.svg";
import {
	guideSummary,
	welcomeIntro,
	welcomeOutro,
	welcomeSafety,
} from "../../content/welcome";
import { AddressBlock } from "../AddressBlock";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import classes from "./Welcome.module.css";

export function Welcome() {
	return (
		<Section id="welcome">
			<SectionHeader
				kicker="Welcome"
				title="Make yourself at home"
				intro="A short guide to the cabin and the area — written so you can skim it on the porch with a coffee in hand."
			/>

			<div className={classes.layout}>
				<div className={classes.prose}>
					{welcomeIntro.map((p, i) => (
						<p key={i}>{p}</p>
					))}

					<p>In this guide you'll find:</p>
					<ul className={classes.list}>
						{guideSummary.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>

					<p className={classes.safety}>
						<strong>One quick note —</strong> {welcomeSafety}
					</p>

					<p>{welcomeOutro}</p>
				</div>

				<aside className={classes.aside}>
					<figure className={classes.riverImage}>
						<img
							src={riverImage}
							alt="View near River Retreat"
							loading="lazy"
							decoding="async"
						/>
					</figure>
					<AddressBlock />
				</aside>
			</div>
		</Section>
	);
}
