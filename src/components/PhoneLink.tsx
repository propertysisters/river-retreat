import { IconPhone } from "@tabler/icons-react";
import classes from "./PhoneLink.module.css";

type Props = {
	number: string;
};

function format(number: string): string {
	const trimmed = number.replace(/^\+1/, "");
	const digits = trimmed.replace(/\D/g, "");
	if (digits.length === 10) {
		return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
	}
	return number;
}

export function PhoneLink({ number }: Props) {
	return (
		<a href={`tel:${number}`} className={classes.link}>
			<IconPhone size={14} stroke={1.5} />
			<span>{format(number)}</span>
		</a>
	);
}
