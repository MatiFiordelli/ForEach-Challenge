import { SETTRANSPORTMODES } from "../types";
import { SetTransportModesAction } from "../../types";

const initState = {
    transportModes: null
}

export default function setTransportModesReducer(state=initState, action: SetTransportModesAction) {
    console.log(action.payload)
    switch(action.type){
        case SETTRANSPORTMODES:
            return {...state, transportModes: action.payload}
        default:
            return state
    }
}