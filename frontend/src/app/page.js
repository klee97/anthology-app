import { Bricolage_Grotesque } from "next/font/google";
import styles from "./page.module.css";

const appNameFont = Bricolage_Grotesque({
	weight: "800",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className={styles.cover}>
			<div className={styles.coverTitleGroup}>
				<h1 className={appNameFont.className}>Anthology</h1>
				<p>Find your next short story</p>
			</div>
		</div>
	);
}
