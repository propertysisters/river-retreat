import { IconArrowUpRight } from "@tabler/icons-react";
import airImage from "../../assets/images/air.svg";
import { activities, safetyNote } from "../../content/activities";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import classes from "./Activities.module.css";

export function Activities() {
	return (
		<Section id="activities" tone="fog">
			<SectionHeader kicker="Local activities" title="Things to do, near and far" />

			<div className={classes.layout}>
				<figure className={classes.figure}>
					<img
						src={airImage}
						alt="Aerial view of River Retreat and the surrounding forest"
						loading="lazy"
						decoding="async"
					/>
				</figure>

				<div className={classes.list}>
					<p className={classes.safety}>{safetyNote}</p>

					{activities.map((activity) => (
						<article key={activity.title} className={classes.item}>
							<h3 className={classes.title}>{activity.title}</h3>
							<p className={classes.body}>{activity.body}</p>
							{activity.link && (
								<a
									className={classes.link}
									href={activity.link.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<span>{activity.link.label}</span>
									<IconArrowUpRight size={14} stroke={1.75} />
								</a>
							)}
						</article>
					))}
				</div>
			</div>
		</Section>
	);
}
