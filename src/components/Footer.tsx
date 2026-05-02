import { IconBrandAirbnb } from "@tabler/icons-react";
import { property } from "../content/property";
import classes from "./Footer.module.css";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className={classes.footer}>
			<div className={classes.inner}>
				<div className={classes.brandBlock}>
					<p className={classes.brand}>{property.name}</p>
					<p className={classes.tagline}>{property.tagline}</p>
				</div>

				<div className={classes.links}>
					<a
						href={property.airbnbUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={classes.link}
					>
						<IconBrandAirbnb size={18} stroke={1.5} />
						<span>View listing on Airbnb</span>
					</a>
				</div>

				<p className={classes.copy}>
					© {year} {property.copyrightHolder}
				</p>
			</div>
		</footer>
	);
}
