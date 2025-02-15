import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./index.module.css";
import { verifyToken } from "../../../../services/verifyToken";
import { useDispatch } from "react-redux";
import { SETISLOGGEDIN } from "../../../../redux/types";

export default function Layout({ children }: { children: React.ReactNode }) {
	const dispatch = useDispatch();

	const verifyTokenOnRefresh = () => {
		const token = localStorage.getItem("token") 
		if (token) {
			verifyToken().then((res) => {
				if (!res) {
					localStorage.removeItem("token");
					dispatch({ type: SETISLOGGEDIN, payload: false });
				} else {
					dispatch({ type: SETISLOGGEDIN, payload: true });
				}
			});
		} else {
			dispatch({ type: SETISLOGGEDIN, payload: false });
		}
	}

	useEffect(() => {
		verifyTokenOnRefresh()
	}, []);

	return (
		<section className={styles["component-layout"]}>
			<Header />
			<section className={styles["main-content"]}>{children}</section>
			<Footer />
		</section>
	);
}