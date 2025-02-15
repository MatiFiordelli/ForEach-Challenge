import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SETISLOGGEDIN } from "../../../../../../../redux/types/index.ts";
import { PropsHamburgerButton } from "../../../../../types/MobileNav.ts";
import { pathRoutes } from "../../../../../../../utils/helpers/pathRoutes.ts"
import styles from "./index.module.css";

export default function NavList({
	isActiveHamburgerButton,
	setIsActiveHamburgerButton,
}: PropsHamburgerButton) {

	const [filteredPathRoutes, setFilteredPathRoutes] = useState(null)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const isLoggedIn = useSelector(
		(state: { setIsLoggedInReducer: { isLoggedIn: boolean } }) =>
			state.setIsLoggedInReducer.isLoggedIn
	);

	useEffect(()=>{
		const filteredRoutes = Object.values(pathRoutes).filter((e: any) => e.isLogInRequired === isLoggedIn)
		setFilteredPathRoutes(filteredRoutes as any)

	},[isLoggedIn])
	
	const handleClickCloseNavList = (route: string) => {
		setIsActiveHamburgerButton(!isActiveHamburgerButton)

		if(route!=="") navigate(route)
	}

	const logOut = () => {
		localStorage.removeItem('token')
		dispatch({ type: SETISLOGGEDIN, payload: false })
		setIsActiveHamburgerButton(false)
	}
	
	return (
		<section
			className={`${styles["nav-list-container"]} ${
				isActiveHamburgerButton
					? styles["nav-container-effect-active"]
					: styles["nav-container-effect-inactive"]
			}`}
			onClick={() => handleClickCloseNavList("")}
		>
			<nav
				className={`${styles["nav-list"]} ${
					isActiveHamburgerButton
						? styles["nav-list-width-active"]
						: styles["nav-list-width-inactive"]
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				<ul className={styles["nav-list__ul"]}>
					{filteredPathRoutes && Object.values(filteredPathRoutes).map((e, i) => {
						const route = e as {name:string, path: string, isLogInRequired: boolean}

						return (
							<li 
								key={route.name + i} 
								data-text={route.name} 
								aria-label={route.name}
								role="link"
								tabIndex={0}
								onClick={() => handleClickCloseNavList((route.path))}
							>
								{route.name}
							</li>
						)}
					)}
					{isLoggedIn && 
						(<li 
							key={'routeLogout'} 
							data-text={'LOGOUT'} 
							aria-label={'Logout'}
							role="link"
							tabIndex={0}
							onClick={logOut}
						>
							LOGOUT
						</li>)
					}
				</ul>
			</nav>
		</section>
	);
}