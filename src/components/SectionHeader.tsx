import classes from "./SectionHeader.module.css";

type Props = {
	kicker?: string;
	title: string;
	intro?: string;
};

export function SectionHeader({ kicker, title, intro }: Props) {
	return (
		<header className={classes.header}>
			{kicker && <p className={classes.kicker}>{kicker}</p>}
			<h2 className={classes.title}>{title}</h2>
			{intro && <p className={classes.intro}>{intro}</p>}
		</header>
	);
}
