import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { pathRoutes } from "../utils/helpers/pathRoutes.ts";
import Error404 from "../features/resources/Error404/index.tsx";
import Spinner from "../features/resources/Spinner/index.tsx";
import LogisticsContainer from "../features/logistics/containers/LogisticsContainer/index.tsx";
import SessionContainer from "../features/session/containers/SessionContainer/index.tsx";

export default function Router() {
	const location = useLocation();
	const isLoggedIn = useSelector(
		(state: { setIsLoggedInReducer: { isLoggedIn: boolean } }) =>
			state.setIsLoggedInReducer.isLoggedIn
	);

	return (
		<>
			{isLoggedIn === null ? (
				<Spinner loadingText={"Authenticating, please wait.."} />
			) : (
				<Routes location={location} key={location.pathname}>
					<Route
						path={pathRoutes.home.path}
						element={
							isLoggedIn ? (
								<LogisticsContainer />
							) : (
								<Navigate to={pathRoutes.login.path} />
							)
						}
					/>
					<Route
						path={pathRoutes.login.path}
						element={
							!isLoggedIn ? (
								<SessionContainer />
							) : (
								<Navigate to={pathRoutes.home.path} />
							)
						}
					/>
					<Route
						path={pathRoutes.signup.path}
						element={
							!isLoggedIn ? (
								<SessionContainer />
							) : (
								<Navigate to={pathRoutes.home.path} />
							)
						}
					/>

					<Route path={"*"} element={<Error404 />} />
				</Routes>
			)}
		</>
	);
}