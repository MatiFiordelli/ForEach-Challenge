import { motion } from "framer-motion";
import { logisticsVariant } from "./variants/logistics.variant.ts";

export default function HomeComponent() {
	return (
		<motion.section
			className="w-[75vw] sm:w-[50%] md:w-[40%] h-screen d-flex content-start justify-items-center m-auto text-center"
			variants={logisticsVariant}
			initial={"initial"}
			animate={"animate"}
			exit={"exit"}
		>
			<p>WELCOME TO LOGISTICS APP</p> 
			<p className="italic">The place where you can register the trips of employees and subsequently calculate the carbon footprint associated with those trips.</p>
			<p className="text-xs">Take a look at the Menu</p>
		</motion.section>
	);
}
