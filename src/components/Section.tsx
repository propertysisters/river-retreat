import type { ReactNode } from "react";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";
import classes from "./Section.module.css";

type Props = {
	id: string;
	tone?: "cream" | "fog";
	children: ReactNode;
};

export function Section({ id, tone = "cream", children }: Props) {
	const ref = useFadeInOnScroll<HTMLElement>();
	return (
		<section id={id} ref={ref} className={`${classes.section} ${classes[tone]} fade-in`}>
			<div className={classes.inner}>{children}</div>
		</section>
	);
}
