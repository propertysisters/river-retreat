import { IconMapPin } from "@tabler/icons-react";
import { property } from "../content/property";
import classes from "./AddressBlock.module.css";

export function AddressBlock() {
	const display = property.address || `${property.name}, ${property.location}`;
	const query = encodeURIComponent(property.address || property.mapsQuery);
	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

	return (
		<a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={classes.block}>
			<IconMapPin size={20} stroke={1.5} />
			<span>
				<span className={classes.label}>{display}</span>
				<span className={classes.cta}>Open in Maps</span>
			</span>
		</a>
	);
}
