import { Transaction } from "../interfaces/transactions"

const useSumsMonth = (transactions: Transaction[]) => {
    const firstMonthDay = getFirstMonthDay()

    const validIncome = transactions.filter(
        (t) => t.type == "income" && t.fullDate.seconds > firstMonthDay
    )

    const validExpense = transactions.filter(
        (t) => t.type == "expense" && t.fullDate.seconds > firstMonthDay
    )

    const totalIncomes = validIncome.reduce(
        (acc, currVal) => (acc += Number(currVal.amount)),
        0
    )

    const totalExpenses = validExpense.reduce(
        (acc, currVal) => (acc += Number(currVal.amount)),
        0
    )

    return { totalIncomes, totalExpenses }
}

const getFirstMonthDay = () => {
    const date = new Date()
    const firstMonthsDay = date.setDate(0)
    const result = new Date(firstMonthsDay)

    const formatLayer1 = (result.getTime() / 1000).toString()
    const formatted = formatLayer1.slice(0, formatLayer1.indexOf("."))

    return formatted
}

export default useSumsMonth
