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

const App: React.FC = () => {
    const { getAuthState, appState, populateFromDb } =
        useContext(ApplicationContext)

    useEffect(() => {
        if (!appState.user) {
            getAuthState()
        }
        if (appState.user) {
            getUserData(appState.user.id, populateFromDb)
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
