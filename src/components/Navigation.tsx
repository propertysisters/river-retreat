import { Burger, Drawer, Group, Stack, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandAirbnb } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { navItems } from "../content/navigation";
import { property } from "../content/property";
import classes from "./Navigation.module.css";

export function Navigation() {
	const [drawerOpen, { open, close }] = useDisclosure(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleNavClick = (id: string) => {
		close();
		requestAnimationFrame(() => {
			const target = document.getElementById(id);
			if (target) {
				target.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		});
	};

	return (
		<header
			className={`${classes.header} ${scrolled ? classes.scrolled : ""}`}
			data-no-print
		>
			<div className={classes.inner}>
				<a
					href="#welcome"
					className={classes.brand}
					onClick={(e) => {
						e.preventDefault();
						handleNavClick("welcome");
					}}
				>
					{property.name}
				</a>

				<Group gap="xl" visibleFrom="md" className={classes.desktopNav}>
					{navItems.map((item) => (
						<UnstyledButton
							key={item.id}
							className={classes.navLink}
							onClick={() => handleNavClick(item.id)}
						>
							{item.label}
						</UnstyledButton>
					))}
					<a
						href={property.airbnbUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={classes.airbnb}
						aria-label="View listing on Airbnb"
					>
						<IconBrandAirbnb size={22} stroke={1.5} />
					</a>
				</Group>

				<Burger
					opened={drawerOpen}
					onClick={open}
					hiddenFrom="md"
					aria-label="Open menu"
					color="currentColor"
				/>
			</div>

			<Drawer
				opened={drawerOpen}
				onClose={close}
				position="right"
				size="80%"
				title={property.name}
				classNames={{ title: classes.drawerTitle }}
			>
				<Stack gap="xs">
					{navItems.map((item) => (
						<UnstyledButton
							key={item.id}
							className={classes.drawerLink}
							onClick={() => handleNavClick(item.id)}
						>
							<span className={classes.drawerLabel}>{item.label}</span>
							<span className={classes.drawerSummary}>{item.summary}</span>
						</UnstyledButton>
					))}
					<a
						href={property.airbnbUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={classes.drawerAirbnb}
					>
						<IconBrandAirbnb size={20} stroke={1.5} />
						<span>View on Airbnb</span>
					</a>
				</Stack>
			</Drawer>
		</header>
	);
}
