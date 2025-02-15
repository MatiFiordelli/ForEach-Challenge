import { configureStore } from "@reduxjs/toolkit"
import reducer from "../reducers"

const mainStore = configureStore({
    reducer: reducer
})

export type DispatchType = typeof mainStore.dispatch
export type RootState = ReturnType<typeof mainStore.getState>

export default mainStore