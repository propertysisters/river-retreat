import { ActionIcon, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy, IconWifi } from "@tabler/icons-react";
import { useState } from "react";
import { property } from "../content/property";
import classes from "./WifiCard.module.css";

type CopyableRowProps = {
	label: string;
	value: string;
};

function CopyableRow({ label, value }: CopyableRowProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			const range = document.createRange();
			const selection = window.getSelection();
			const temp = document.createElement("span");
			temp.textContent = value;
			document.body.appendChild(temp);
			range.selectNodeContents(temp);
			selection?.removeAllRanges();
			selection?.addRange(range);
			window.setTimeout(() => {
				selection?.removeAllRanges();
				document.body.removeChild(temp);
			}, 100);
		}
	};

	return (
		<div className={classes.row}>
			<span className={classes.label}>{label}</span>
			<button
				type="button"
				onClick={handleCopy}
				className={classes.value}
				aria-label={`Copy ${label.toLowerCase()}: ${value}`}
			>
				<span className={classes.code}>{value}</span>
				<Tooltip
					label={copied ? "Copied" : "Tap to copy"}
					opened={copied || undefined}
					withArrow
				>
					<ActionIcon
						component="span"
						variant="subtle"
						color="forest"
						aria-hidden="true"
						tabIndex={-1}
					>
						{copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
					</ActionIcon>
				</Tooltip>
			</button>
		</div>
	);
}

export function WifiCard() {
	return (
		<div className={classes.card}>
			<div className={classes.header}>
				<IconWifi size={22} stroke={1.5} />
				<span>Wifi</span>
			</div>
			<CopyableRow label="Network" value={property.wifi.network} />
			<CopyableRow label="Password" value={property.wifi.password} />
		</div>
	);
}
