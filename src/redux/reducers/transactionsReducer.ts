import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Transaction } from "../../interfaces/transactions"

export interface TransactionsState {
    transactions: Transaction[]
}

const initialState: TransactionsState = {
    transactions: [],
}

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.transactions.push(action.payload)
        },
        deleteTransaction: (
            state,
            action: PayloadAction<{ transactionId: string }>
        ) => {
            const { transactionId } = action.payload
            const index = state.transactions.findIndex(
                (transaction) => transaction.id === transactionId
            )
            state.transactions.splice(index, 1)
        },

        populateTransactionsFromDb: (
            state,
            action: PayloadAction<Transaction[]>
        ) => {
            state.transactions = action.payload
        },

        clearTransactionsState: (state) => {
            state.transactions = []
        },
    },
})

export const { addTransaction, deleteTransaction, populateTransactionsFromDb } =
    transactionsSlice.actions

export default transactionsSlice.reducer
