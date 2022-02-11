import { ActionType } from "../action-types/index"
import { User } from "../../interfaces/user"
import {
    AddUserAction,
    CreateTransactionAction,
    PopulateTransactionsFromDbAction,
    DeleteTransactionAction,
    ClearStateAction,
} from "../actions"

import { Transaction } from "../../interfaces/transactions"

export const addUserToState = (user: User): AddUserAction => {
    return {
        type: ActionType.ADD_USER,
        payload: user,
    }
}

export const addTransaction = (
    transaction: Transaction
): CreateTransactionAction => {
    return {
        type: ActionType.CREATE_TRANSACTION,
        payload: transaction,
    }
}

export const deleteTransaction = (
    transactionId: string
): DeleteTransactionAction => {
    return {
        type: ActionType.DELETE_TRANSACTION,
        payload: {
            transactionId,
        },
    }
}

export const populateTransactionsFromDb = (
    transactions: Transaction[]
): PopulateTransactionsFromDbAction => {
    return {
        type: ActionType.POPULATE_TRANSACTIONS,
        payload: transactions,
    }
}

export const clearState = (): ClearStateAction => {
    return {
        type: ActionType.CLEAR_STATE,
    }
}
