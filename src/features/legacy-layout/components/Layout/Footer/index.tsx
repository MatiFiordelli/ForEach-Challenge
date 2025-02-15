import styles from "./index.module.css";
import socialMediaLinks from "../../../utils/helpers/socialMediaLinks.ts";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer__content']}>
				<div className={styles['left-section']}>
					<p className={styles['left-section__title']}>Foreach Logistics App</p>
					<p className={styles['left-section__content']}>
						This tool allows company employees to register their commutes and calculate the associated carbon footprint. Through a simple form, users can enter the distance traveled and the mode of transportation used. The app automatically calculates the carbon footprint of each commute and displays the total carbon footprint of the company, helping to monitor and reduce environmental impact.
					</p>

					
				</div>
				
				<div className={styles['right-section']}>
					<div className={styles['right-section__content']}>
						<p className={styles['right-section__telefone']}>
							Telephone: +1 234 567 890
							</p>
						<p className={styles['right-section__address']}>
							Address: 123 Street, Rafaela, Santa Fe
						</p>
					</div>
				</div>
			</div>
			<p className={styles['footer__copyright']}>
				Copyright ©2025
				<a
					href={socialMediaLinks.linkedin}
					title="Ir a LinkedIn.."
					className="ms-1 text-white-50"
				>
					Matias Fiordelli
				</a>
			</p>
		</footer>
	);
}