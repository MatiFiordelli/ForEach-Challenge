import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { pathRoutes } from "../utils/helpers/pathRoutes.ts";
import Error404 from "../features/resources/Error404/index.tsx";
import Spinner from "../features/resources/Spinner/index.tsx";
import Home from "../features/logistics/containers/Home/index.tsx";
import SessionContainer from "../features/session/containers/SessionContainer/index.tsx";
import CreateTripRecord from "../features/logistics/containers/CreateTripRecord/index.tsx";
import ModifyTripRecord from "../features/logistics/containers/ModifyTripRecord/index.tsx";
import DeleteTripRecord from "../features/logistics/containers/DeleteTripRecord/index.tsx";
import ShowTripRecords from "../features/logistics/containers/ShowTripRecords/index.tsx";
import SearchTripRecords from "../features/logistics/containers/SearchTripRecords/index.tsx";

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
                                <Home />
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
                    <Route
                        path={pathRoutes.createTrip.path}
                        element={
                            isLoggedIn ? (
                                <CreateTripRecord />
                            ) : (
                                <Navigate to={pathRoutes.login.path} />
                            )
                        }
                    />
                    <Route
                        path={pathRoutes.modifyTrip.path}
                        element={
                            isLoggedIn ? (
                                <ModifyTripRecord />
                            ) : (
                                <Navigate to={pathRoutes.login.path} />
                            )
                        }
                    />
                    <Route
                        path={pathRoutes.deleteTrip.path}
                        element={
                            isLoggedIn ? (
                                <DeleteTripRecord />
                            ) : (
                                <Navigate to={pathRoutes.login.path} />
                            )
                        }
                    />
                    <Route
                        path={pathRoutes.showTrips.path}
                        element={
                            isLoggedIn ? (
                                <ShowTripRecords />
                            ) : (
                                <Navigate to={pathRoutes.login.path} />
                            )
                        }
                    />
                    <Route
                        path={pathRoutes.searchTrips.path}
                        element={
                            isLoggedIn ? (
                                <SearchTripRecords />
                            ) : (
                                <Navigate to={pathRoutes.login.path} />
                            )
                        }
                    />
                    <Route path={"*"} element={<Error404 />} />
                </Routes>
            )}
        </>
    );
}
