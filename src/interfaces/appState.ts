import { Transaction } from "./transactions"

import { User } from "./user"

export interface AppState {
    user: User
    transactions: Transaction[]
}
