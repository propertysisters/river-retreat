import {
	IconChevronDown,
	IconChevronUp,
	IconCircle,
	IconPower,
	IconThermometer,
} from "@tabler/icons-react";
import classes from "./FireplaceRemote.module.css";

export function FireplaceRemote() {
	return (
		<div className={classes.root}>
			<p className={classes.heading}>Fireplace remote</p>
			<p className={classes.intro}>
				The remote is on the mantle — a larger black remote with a temperature display.
			</p>

			<div className={classes.grid}>
				{/* Power */}
				<div className={classes.button}>
					<div className={classes.buttonIcon}>
						<IconPower size={20} stroke={1.5} />
					</div>
					<div className={classes.buttonText}>
						<span className={classes.buttonLabel}>Power</span>
						<span className={classes.buttonDesc}>
							Turns the fireplace (and all its systems) on or off. When off, the display
							shows only the current room temperature.
						</span>
					</div>
				</div>

				{/* Thermostat */}
				<div className={classes.button}>
					<div className={classes.buttonIcon}>
						<IconThermometer size={20} stroke={1.5} />
					</div>
					<div className={classes.buttonText}>
						<span className={classes.buttonLabel}>Thermostat</span>
						<span className={classes.buttonDesc}>
							The number of presses sets the mode:
						</span>
						<ol className={classes.pressList}>
							<li>
								<strong>Once</strong> — thermostat mode. Runs until the room is 1° above
								your set temp, shuts off, restarts when it drops 1° below.
							</li>
							<li>
								<strong>Twice</strong> — smart mode. Automatically adjusts the BTU output
								to reach and hold your set temperature.
							</li>
							<li>
								<strong>Three times</strong> — thermostat off.
							</li>
						</ol>
					</div>
				</div>

				{/* Options */}
				<div className={classes.button}>
					<div className={classes.buttonIcon}>
						<IconCircle size={20} stroke={1.5} />
					</div>
					<div className={classes.buttonText}>
						<span className={classes.buttonLabel}>Options</span>
						<span className={classes.buttonDesc}>
							Cycles through three settings. Use the{" "}
							<span className={classes.arrowInline}>
								<IconChevronUp size={13} stroke={2} />
								<IconChevronDown size={13} stroke={2} />
							</span>{" "}
							arrows to adjust whichever is active:
						</span>
						<ol className={classes.pressList}>
							<li>
								<strong>Flame</strong> — height of the flames, from fully off to fully on.
							</li>
							<li>
								<strong>Blower</strong> — fan speed, higher or lower.
							</li>
							<li>
								<strong>Light</strong> — brightness of the interior light only (no effect
								on heat or fan).
							</li>
						</ol>
					</div>
				</div>
			</div>

			<p className={classes.tip}>
				<strong>Tip:</strong> To switch between °F and °C, turn the fireplace off, then
				press the Options and Thermostat buttons at the same time.
			</p>
		</div>
	);
}
