import { useContext } from "react"
import { ApplicationContext } from "../context/Contex"

const useTransactionsLine = () => {
    resetCategories()

    const { appState } = useContext(ApplicationContext)
    const nextSunday = getNextSunday()
    const lastValidDay = getCurrentLastWeek()

    /* income selectedCategories */
    const incomeCategories = appState.transactions.filter(
        (t) => t.type === "income"
    )

    /* filter transactions for valid ones between last monday and next sunday */
    const filteredByValidityIncome = incomeCategories.filter(
        (t) =>
            t.fullDate?.seconds < nextSunday &&
            t.fullDate?.seconds > lastValidDay
    )

    filteredByValidityIncome.forEach((t) => {
        const category = weekDaysNumbersIncome.find(
            (c) => c.day === getDayOfTransaction(t)
        )

        if (category) category.amount += Number(t.amount)
    })

    /* 
    ### Expense graphic calculations
    ###
    ###
    */

    /* income selectedCategories */
    const expenseCategories = appState.transactions.filter(
        (t) => t.type === "expense"
    )

    /* filter transactions for valid ones between last monday and next sunday */
    const filteredByValidityExpense = expenseCategories.filter(
        (t) =>
            t.fullDate?.seconds < nextSunday &&
            t.fullDate?.seconds > lastValidDay
    )

    filteredByValidityExpense.forEach((t) => {
        const category = weekDaysNumbersExpense.find(
            (c) => c.day === getDayOfTransaction(t)
        )

        if (category) category.amount += Number(t.amount)
    })

    const chartData = {
        labels,
        datasets: [
            {
                data: weekDaysNumbersIncome.map((c) => c.amount),
                type: "line" as const,
                label: "Income",
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                borderWidth: 2,
                fill: false,
            },

            {
                data: weekDaysNumbersExpense.map((c) => c.amount),
                type: "line" as const,
                label: "Expense",
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderWidth: 2,
                fill: false,
            },
        ],
    }

    return { chartData }
}

export default useTransactionsLine

const getCurrentLastWeek = () => {
    var date = new Date() /* initialize Date object */

    const prevDayCurrent = date.setDate(date.getDate() - 7)

    const stringified = (prevDayCurrent / 1000).toString()
    const formatted = stringified.slice(0, stringified.indexOf("."))

    return Number(formatted)
}

/* GET ANY NEXT DAY OF THE WEEK (APPLIED FOR SUNDAY) */

function getNextSunday() {
    var dayOfWeek = 7 // sunday
    var date = new Date(Date.now())
    var diff = date.getDay() - dayOfWeek
    if (diff > 0) {
        date.setDate(date.getDate() + 6)
    } else if (diff < 0) {
        date.setDate(date.getDate() + -1 * diff)
    }

    let stringified = (date.getTime() / 1000).toString()
    let format = stringified.slice(0, stringified.indexOf("."))
    return Number(format)
}

const getDayOfTransaction = (transaction: any): number => {
    let formDate = new Date(transaction.fullDate.toDate()).getDay()

    return formDate /* returns 1-7 for week days  */
}

export const weekDaysNumbersIncome = [
    { day: 1, amount: 0 },
    { day: 2, amount: 0 },
    { day: 3, amount: 0 },
    { day: 4, amount: 0 },
    { day: 5, amount: 0 },
    { day: 6, amount: 0 },
    { day: 7, amount: 0 },
]

export const weekDaysNumbersExpense = [
    { day: 1, amount: 0 },
    { day: 2, amount: 0 },
    { day: 3, amount: 0 },
    { day: 4, amount: 0 },
    { day: 5, amount: 0 },
    { day: 6, amount: 0 },
    { day: 7, amount: 0 },
]

export const resetCategories = () => {
    weekDaysNumbersIncome.forEach((c) => (c.amount = 0))
    weekDaysNumbersExpense.forEach((c) => (c.amount = 0))
}

const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]
