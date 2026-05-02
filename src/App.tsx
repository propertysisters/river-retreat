import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Activities } from "./components/sections/Activities";
import { Amenities } from "./components/sections/Amenities";
import { Checkout } from "./components/sections/Checkout";
import { EatsAndDrinks } from "./components/sections/EatsAndDrinks";
import { Welcome } from "./components/sections/Welcome";

export function App() {
	return (
		<>
			<Navigation />
			<main id="main-content">
				<Hero />
				<Welcome />
				<Amenities />
				<Checkout />
				<Activities />
				<EatsAndDrinks />
			</main>
			<Footer />
		</>
	);
}
