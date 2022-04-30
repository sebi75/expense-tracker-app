import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import transactionsReducer from "./reducers/transactionsReducer"
import userReducer from "./reducers/userReducer"

const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
        user: userReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
