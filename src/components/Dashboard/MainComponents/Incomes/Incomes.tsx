import React, { useState, useEffect } from "react"
import { Layout } from "../Overview"
import { Stats } from "../Stats"
import {
    InterLayout,
    ChartLayout,
    TransactionsList,
    HistoryTransactionsLayout,
} from "../Expenses/Expenses"

import DoughnutChart from "../../Charts/Doughnut"

import { TransactionItem } from "../../TransactionsHistory/TransactionsList"
import { Transaction } from "../../../../interfaces/transactions"

import useTransactions from "../../../../hooks/useTransactions"
import useSumsMonth from "../../../../hooks/useMonths"

import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"

const Incomes: React.FC = () => {
    const [incomeTransactions, setIncomeTransactions] = useState<Transaction[]>(
        []
    )

    const transactions = useSelector(
        (state: RootState) => state.transactions.transactions
    )

    const { totalIncomes, totalExpenses } = useSumsMonth(transactions)

    const { chartData } = useTransactions("income", transactions)

    useEffect(() => {
        setIncomeTransactions(filterIncomeTransactions(transactions))
    }, [transactions])

    return (
        <Layout>
            <h1 className="text-[2.5rem] lg:text-[3rem] font-bold text-black">
                Incomes
            </h1>
            <div>
                <Stats
                    totalIncomes={totalIncomes}
                    totalExpenses={totalExpenses}
                />
            </div>
            <InterLayout>
                <ChartLayout>
                    <DoughnutChart data={chartData} />
                </ChartLayout>

                {/* LIST */}
                <TransactionsList>
                    <HistoryTransactionsLayout>
                        <h1 className="text-3xl text-white font-bold m-5 select-none mb-5">
                            Incomes History
                        </h1>
                        {incomeTransactions.length == 0 && (
                            <h1 className="text-white text-lg">
                                No transactions to display
                            </h1>
                        )}
                        {incomeTransactions.map((transaction) => {
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

const filterIncomeTransactions = (
    transactions: Transaction[] | []
): Transaction[] => {
    const incomeTransaction = transactions?.filter(
        (transaction) => transaction.type === "income"
    )

    return incomeTransaction
}

export default Incomes
