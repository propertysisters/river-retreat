import { IconCheck } from "@tabler/icons-react";
import { checklistFooter, checkoutItems } from "../../content/checklist";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import classes from "./Checkout.module.css";

export function Checkout() {
	return (
		<Section id="checkout">
			<SectionHeader
				kicker="Checkout"
				title="Before you head out"
				intro="A short checklist to leave the cabin ready for the next family. No need to deep-clean — these are the small things that make a big difference."
			/>

			<ol className={classes.list}>
				{checkoutItems.map((item, idx) => (
					<li key={idx} className={classes.item}>
						<span className={classes.marker}>
							<IconCheck size={18} stroke={2} />
						</span>
						<span className={classes.text}>{item}</span>
					</li>
				))}
			</ol>

			<p className={classes.thanks}>{checklistFooter}</p>
		</Section>
	);
}
