import { configureStore } from "@reduxjs/toolkit";
import localReducer from "../reducers";

const sessionStore = configureStore({
    reducer: localReducer
})

export type DispatchType = typeof sessionStore.dispatch
export type RootState = ReturnType<typeof sessionStore.getState>

export default sessionStore
