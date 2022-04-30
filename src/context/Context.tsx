import React, { createContext, useState, useReducer } from "react"

/* Interfaces */
import { AppState } from "../interfaces/appState"
import { reducer } from "./reducers/reducer"
import { User } from "../interfaces/user"

/* AUTH FUNCTIONS */
import { deleteTransactionFromDb } from "../firebase"

import { addDocF } from "../firebase/db/mocks"

import { deleteTransaction } from "./action-creators"

interface ApplicationContextInterface {
    setIsSuccessfullyAdded: (p: boolean) => void
    deleteTransactionHandler: (id: string) => void
    appState: AppState
    issuccessfullyAdded: boolean
    addDocF: () => void
}

const initialAppState: AppState = {
    user: undefined as unknown as User,
    transactions: [],
}

export const ApplicationContext = createContext<ApplicationContextInterface>(
    {} as ApplicationContextInterface
)

export const ContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialAppState)
    const [issuccessfullyAdded, setIsSuccessfullyAdded] =
        useState<boolean>(false)

    const deleteTransactionHandler = (transactionId: string) => {
        dispatch(deleteTransaction(transactionId))
        deleteTransactionFromDb(
            state.user.id,
            transactionId,
            state.transactions
        )
    }

    const AppContextSample: ApplicationContextInterface = {
        appState: state,
        deleteTransactionHandler,
        setIsSuccessfullyAdded,
        addDocF,
        issuccessfullyAdded,
    }

    return (
        <ApplicationContext.Provider value={AppContextSample}>
            {children}
        </ApplicationContext.Provider>
    )
}
