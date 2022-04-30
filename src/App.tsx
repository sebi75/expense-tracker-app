import { Routes, Route, Navigate } from "react-router-dom"

import { PrivateRoute } from "./routes/PrivateRoute"
import React, { useEffect } from "react"

/* IMPORT APP COMPONENTS */
import Home from "./components/HomePage/Home"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./components/Authentication/Login"
import Signup from "./components/Authentication/Signup"

import { getUserData } from "./firebase"
import { getAuthStateHandler } from "./firebase"

import { useAppDispatch } from "./redux/store"

import { addUser } from "./redux/reducers/userReducer"
import { populateTransactionsFromDb } from "./redux/reducers/transactionsReducer"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { User } from "./interfaces/user"

const App: React.FC = () => {
    const dispatch = useAppDispatch()

    const user = useSelector((state: RootState) => state.user.user)

    const getTransactionsFromDb = async () => {
        const transactions = await getUserData(user.id)
        dispatch(populateTransactionsFromDb(transactions))
    }

    const getCurrentUser = async () => {
        console.log(user)
        if (!user) {
            const user = await getAuthStateHandler(dispatch)
        }
        if (user) {
            getTransactionsFromDb()
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [user])

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
