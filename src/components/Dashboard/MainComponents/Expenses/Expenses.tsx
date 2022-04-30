import React, { useState, useEffect } from "react"
import { Layout } from "../Overview"
import { Stats } from "../Stats"

import { TransactionItem } from "../../TransactionsHistory/TransactionsList"

import DoughnutChart from "../../Charts/Doughnut"

import { Transaction } from "../../../../interfaces/transactions"

import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"

import useTransactions from "../../../../hooks/useTransactions"
import useSumsMonth from "../../../../hooks/useMonths"

const Expenses: React.FC = () => {
    const [expensesTransactions, setExpensesTransactions] = useState<
        Transaction[]
    >([])

    const transactions = useSelector(
        (state: RootState) => state.transactions.transactions
    )

    const { totalIncomes, totalExpenses } = useSumsMonth(transactions)

    const { chartData } = useTransactions("expense", transactions)

    useEffect(() => {
        setExpensesTransactions(filterExpensesTransactions(transactions))
    }, [transactions])

    return (
        <Layout>
            <h1 className="text-[2.5rem] lg:text-[3rem] font-bold text-black">
                Expenses
            </h1>
            <div>
                <Stats
                    totalIncomes={totalIncomes}
                    totalExpenses={totalExpenses}
                />
            </div>

            <InterLayout>
                <ChartLayout>
                    {/* Manage Budget */}
                    {/* <div className="flex flex-col lg:flex-row w-full items-center mb-[1.5rem]">
                        <ProgressBar completed={80} bgcolor={"#355c7d"} />
                        <button className="btn ghost ml-5 mt-[1rem] lg:mt-">
                            Manage Budget
                        </button>
                    </div> */}
                    {/* Chart */}
                    <DoughnutChart data={chartData} />
                </ChartLayout>

                <TransactionsList>
                    {/*  <h1 className="text-3xl text-black font-bold m-5 select-none mb-5">
                        Expenses History
                    </h1> */}

                    <HistoryTransactionsLayout>
                        <h1 className="text-3xl text-white font-bold m-5 select-none mb-5">
                            Expenses History
                        </h1>
                        {expensesTransactions.length == 0 && (
                            <h1 className="text-white text-lg">
                                No transactions to display
                            </h1>
                        )}
                        {expensesTransactions.map((transaction) => {
                            return (
                                <TransactionItem
                                    key={transaction.id}
                                    type={transaction.type}
                                    category={transaction.category}
                                    amount={transaction.amount}
                                    date={transaction.date}
                                    id={transaction.id}
                                />
                            )
                        })}
                    </HistoryTransactionsLayout>
                </TransactionsList>
            </InterLayout>
        </Layout>
    )
}

export const TransactionsList: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col items-center w-[100%] lg:w-[75%] rounded-lg lg:m-9 lg:p-9">
            {children}
        </div>
    )
}

export const HistoryTransactionsLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col w-[95%] min-h-[45vh] max-h-[45vh] p-[2rem] overflow-y-scroll shadow-xl rounded-lg blue-bg-gradient">
            {children}
        </div>
    )
}

export const ChartLayout: React.FC = ({ children }) => {
    return (
        <div className="w-[90%] lg:w-[45%] h-auto mt-9 mb-[2rem] lg:mb-0">
            {children}
        </div>
    )
}

export const InterLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row w-full h-[75%] items-center justify-center">
            {children}
        </div>
    )
}

const filterExpensesTransactions = (
    transactions: Transaction[] | []
): Transaction[] => {
    const expensesTransaction = transactions?.filter(
        (transaction) => transaction.type === "expense"
    )

    return expensesTransaction
}

export default Expenses
