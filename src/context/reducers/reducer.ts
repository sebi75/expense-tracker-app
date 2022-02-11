import { Action } from "../actions"
import { AppState } from "../../interfaces/appState"
import { ActionType } from "../action-types"
import { User } from "../../interfaces/user"

export const reducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case ActionType.CREATE_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
            }
        case ActionType.ADD_USER:
            return {
                ...state,
                user: action.payload,
            }

        case ActionType.POPULATE_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload,
            }
        case ActionType.CLEAR_STATE:
            return {
                user: undefined as unknown as User,
                transactions: [],
            }
        case ActionType.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(
                    (t) => t.id !== action.payload.transactionId
                ),
            }

        default:
            return state
    }
}
