import { Transaction } from "../interfaces/transactions"

import {
    incomeCategories,
    expenseCategories,
    resetCategories,
} from "../constants/categories"

const useTransactions = (title: string, transactions: Transaction[]) => {
    resetCategories()

    const selectedCategories = transactions.filter((t) => t.type === title)

    const total = selectedCategories?.reduce(
        (acc, currVal) => (acc += Number(currVal.amount)),
        0
    )

    const categories = title === "income" ? incomeCategories : expenseCategories

    selectedCategories?.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)

        if (category) category.amount += Number(t.amount)
    })

    const filteredCategories = categories.filter((c) => c.amount > 0)

    const chartData = {
        datasets: [
            {
                data: filteredCategories.map((c) => c.amount),
                backgroundColor: filteredCategories.map((c) => c.color),
            },
        ],
        labels: filteredCategories.map((c) => c.type),
    }

    return { filteredCategories, chartData, total }
}

export default useTransactions
