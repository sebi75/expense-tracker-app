import { ActionType } from "../action-types"
import { User } from "../../interfaces/user"

import {
    ExpenseTransaction,
    IncomeTransaction,
    Transaction,
} from "../../interfaces/transactions"

export interface CreateTransactionAction {
    type: ActionType.CREATE_TRANSACTION
    payload: IncomeTransaction | ExpenseTransaction
}

export interface AddUserAction {
    type: ActionType.ADD_USER
    payload: User
}

export interface PopulateTransactionsFromDbAction {
    type: ActionType.POPULATE_TRANSACTIONS
    payload: Transaction[]
}

export interface DeleteTransactionAction {
    type: ActionType.DELETE_TRANSACTION
    payload: {
        transactionId: string
    }
}

export interface ClearStateAction {
    type: ActionType.CLEAR_STATE
}

export type Action =
    | CreateTransactionAction
    | DeleteTransactionAction
    | AddUserAction
    | PopulateTransactionsFromDbAction
    | ClearStateAction
