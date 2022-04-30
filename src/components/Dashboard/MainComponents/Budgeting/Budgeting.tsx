import React from "react"
import { Layout } from "../Overview"
import { InterLayout } from "../Expenses/Expenses"
import useSumsMonth from "../../../../hooks/useMonths"
import { Stats } from "../Stats"

import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"

const Budgeting: React.FC = () => {
    const transactions = useSelector(
        (state: RootState) => state.transactions.transactions
    )
    const { totalIncomes, totalExpenses } = useSumsMonth(transactions)
    return (
        <Layout>
            <div className="bg-white h-screen w-full">
                <h1 className="text-[2.5rem] lg:text-[3rem] font-bold text-black">
                    Budgeting
                </h1>
                <div>
                    <Stats
                        totalIncomes={totalIncomes}
                        totalExpenses={totalExpenses}
                    />
                </div>
                <InterLayout>
                    <div>
                        <h1 className="font-bold text-3xl text-black">
                            Coming SOON
                        </h1>
                    </div>
                </InterLayout>
            </div>
        </Layout>
    )
}

export default Budgeting
