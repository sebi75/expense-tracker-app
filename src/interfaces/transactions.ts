export type TransactionTypes = "income" | "expense"

export type ExpenseTransactionCategory =
    | "Bills"
    | "Car"
    | "Clothes"
    | "Travel"
    | "Food"
    | "Shopping"
    | "House"
    | "Entertainment"
    | "Phone"
    | "Pets"
    | "Other"

export type IncomeTransactionCategory =
    | "Business"
    | "Investments"
    | "Extra income"
    | "Deposits"
    | "Lottery"
    | "Gifts"
    | "Salary"
    | "Savings"
    | "Rental income"

export interface ExpenseTransaction {
    id: string
    type: TransactionTypes | string
    category: ExpenseTransactionCategory | string
    amount: number
    date: string
    fullDate: any
}

export interface IncomeTransaction {
    id: string
    type: TransactionTypes | string
    category: IncomeTransactionCategory | string
    amount: number
    date: string
    fullDate: any
}

export type Transaction = IncomeTransaction | ExpenseTransaction
