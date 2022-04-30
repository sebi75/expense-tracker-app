import { Routes, Route, Navigate } from "react-router-dom"

import { PrivateRoute } from "./routes/PrivateRoute"
import React, { useEffect, useContext } from "react"

/* IMPORT APP COMPONENTS */
import Home from "./components/HomePage/Home"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./components/Authentication/Login"
import Signup from "./components/Authentication/Signup"

import { ApplicationContext } from "./context/Context"

import { getUserData } from "./firebase"
import { getAuthStateHandler } from "./firebase"

import { useAppDispatch } from "./redux/store"

import { addUser } from "./redux/reducers/userReducer"
import { populateTransactionsFromDb } from "./redux/reducers/transactionsReducer"

const App: React.FC = () => {
    const { appState } = useContext(ApplicationContext)
    const dispatch = useAppDispatch()

    const getTransactionsFromDb = async () => {
        const transactions = await getUserData(appState.user.id)
        dispatch(populateTransactionsFromDb(transactions))
    }

    useEffect(() => {
        if (!appState.user) {
            const user = getAuthStateHandler()
            if (user != undefined) {
                dispatch(addUser(user))
            }
        }
        if (appState.user) {
            getTransactionsFromDb()
        }
    }, [appState.user])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate replace to="/" />} />
            <Route
                path={"/dashboard"}
                element={<PrivateRoute component={Dashboard} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default App
