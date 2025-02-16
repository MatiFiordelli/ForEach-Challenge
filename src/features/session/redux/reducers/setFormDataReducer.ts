import { SetFormDataInterface } from "../interfaces";
import { SETFORMDATA } from "../types";

const initState = {
    email: "",
	password: "",
    name: ""
}

export default function setFormDataReducer(state=initState, action: SetFormDataInterface) {
    switch(action.type){
        case SETFORMDATA:
            return {
                ...state, 
                email: action.payload.email, 
                password: action.payload.password,
                name: action.payload.name
            }
        default:
            return state
    }
}