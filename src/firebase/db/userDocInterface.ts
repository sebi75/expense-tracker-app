import {
    Transaction,
    IncomeTransaction,
    ExpenseTransaction,
} from "../../interfaces/transactions"
import { User } from "../../interfaces/user"

export default 1

export interface userDocInterface {
    transactions: Transaction[]
    user: User
}
