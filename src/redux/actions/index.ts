import { TransportModes } from "../../types";
import { SETISLOGGEDIN, SETTRANSPORTMODES } from "../types";

export const setIsLoggedInAction = (payload: boolean | null) => ({
    type: SETISLOGGEDIN,
    payload: payload
})

export const setTransportModesAction = (payload: TransportModes | null) => ({
    type: SETTRANSPORTMODES,
    payload: payload
})