import { Accordion } from "@mantine/core";
import {
	IconArmchair,
	IconBath,
	IconBulb,
	IconCampfire,
	IconCaravan,
	IconChefHat,
	IconDeviceTv,
	IconFlame,
	IconShieldExclamation,
	IconTemperatureSun,
	IconWifi,
	type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import hottubImage from "../../assets/images/hottub.jpg";
import { amenities, type Amenity, type AmenityIcon } from "../../content/amenities";
import { FireplaceRemote } from "../FireplaceRemote";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { WifiCard } from "../WifiCard";
import classes from "./Amenities.module.css";

const iconMap: Record<AmenityIcon, ComponentType<IconProps>> = {
	wifi: IconWifi,
	temperature: IconTemperatureSun,
	bulb: IconBulb,
	alert: IconShieldExclamation,
	kitchen: IconChefHat,
	caravan: IconCaravan,
	tv: IconDeviceTv,
	grill: IconFlame,
	campfire: IconCampfire,
	hottub: IconBath,
	chair: IconArmchair,
};

function AmenityItem({ amenity }: { amenity: Amenity }) {
	const Icon = iconMap[amenity.icon];
	return (
		<Accordion.Item value={amenity.id} className={classes.item}>
			<Accordion.Control icon={<Icon size={22} stroke={1.5} className={classes.icon} />}>
				<div className={classes.label}>
					<span className={classes.title}>{amenity.title}</span>
					<span className={classes.summary}>{amenity.summary}</span>
				</div>
			</Accordion.Control>
			<Accordion.Panel>
				{amenity.id === "internet" && (
					<div className={classes.wifiInline}>
						<WifiCard />
					</div>
				)}
				<div className={classes.body}>
					{amenity.body.map((para, i) => (
						<p key={i}>{para}</p>
					))}
				</div>
				{amenity.id === "climate" && <FireplaceRemote />}
			</Accordion.Panel>
		</Accordion.Item>
	);
}

export function Amenities() {
	return (
		<Section id="amenities" tone="fog">
			<SectionHeader
				kicker="Amenities"
				title="Everything you need"
				intro="Tap any item to expand the instructions. The internet card unlocks one-tap copying so you can join the wifi without retyping anything."
			/>

			<figure className={classes.featureImage}>
				<img
					src={hottubImage}
					alt="The deck at River Retreat"
					loading="lazy"
					decoding="async"
				/>
			</figure>

			<Accordion
				multiple
				variant="separated"
				radius="md"
				chevronPosition="right"
				defaultValue={["internet"]}
				classNames={{ root: classes.root }}
			>
				{amenities.map((amenity) => (
					<AmenityItem key={amenity.id} amenity={amenity} />
				))}
			</Accordion>
		</Section>
	);
}
