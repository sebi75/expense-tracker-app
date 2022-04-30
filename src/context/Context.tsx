import React, { createContext, useState, useReducer } from "react"

/* Interfaces */
import { AppState } from "../interfaces/appState"
import { reducer } from "./reducers/reducer"

import { addTransaction } from "./action-creators/index"
import { User } from "../interfaces/user"
import { Transaction } from "../interfaces/transactions"

/* AUTH FUNCTIONS */
import {
    authWithPopup,
    signOutHandler,
    getAuthStateHandler,
    createAccountWithEmail,
    signWithEmail,
    deleteTransactionFromDb,
    addTransactionToDb,
} from "../firebase"

import { addDocF } from "../firebase/db/mocks"

import {
    populateTransactionsFromDb,
    clearState,
    addUserToState,
    deleteTransaction,
} from "./action-creators"

interface ApplicationContextInterface {
    signWithGooglePopup: () => void
    addTransactionHandler: (p: Transaction) => void
    setIsSuccessfullyAdded: (p: boolean) => void
    populateFromDb: (transactions: Transaction[]) => void
    deleteTransactionHandler: (id: string) => void
    createAccountWithEmailHandler: (
        email: string,
        password: string,
        setError: any
    ) => void
    signWithEmailHandler: (
        email: string,
        password: string,
        setError: any
    ) => void
    getAuthState: () => void
    signOut: () => void
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

    const addUser = (user: User) => {
        dispatch(addUserToState(user))
    }

    const populateFromDb = (transactions: Transaction[]) => {
        dispatch(populateTransactionsFromDb(transactions))
    }

    const signWithGooglePopup = async () => {
        await authWithPopup(addUser)
    }
    const createAccountWithEmailHandler = async (
        email: string,
        password: string,
        setError: any
    ) => {
        await createAccountWithEmail(email, password, addUser, setError)
    }
    const signWithEmailHandler = async (
        email: string,
        password: string,
        setError: any
    ) => {
        await signWithEmail(email, password, addUser, setError)
    }

    const getAuthState = () => {
        getAuthStateHandler(addUser)
    }

    const signOut = () => {
        signOutHandler(addUser)
        dispatch(clearState())
    }

    const addTransactionHandler = (transaction: Transaction) => {
        dispatch(addTransaction(transaction))
        addTransactionToDb(state.user.id, transaction)
    }

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
        createAccountWithEmailHandler,
        deleteTransactionHandler,
        setIsSuccessfullyAdded,
        addTransactionHandler,
        signWithEmailHandler,
        signWithGooglePopup,
        populateFromDb,
        getAuthState,
        signOut,
        addDocF,
        issuccessfullyAdded,
    }

    return (
        <ApplicationContext.Provider value={AppContextSample}>
            {children}
        </ApplicationContext.Provider>
    )
}
