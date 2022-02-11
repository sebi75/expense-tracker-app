/* COMPONENT IMPORTS */
import { Stats } from "./Stats"
import LineGraph from "../Charts/Line"
import { useState } from "react"

import useTransactionsLine from "../../../hooks/useTransactionsLine"
import useSumsMonth from "../../../hooks/useMonths"

const Overview = () => {
    const { chartData } = useTransactionsLine()

    const { totalIncomes, totalExpenses } = useSumsMonth()

    return (
        <Layout>
            <h1 className="text-[2.5rem] lg:text-[3rem] font-bold text-black">
                Overview
            </h1>
            <div>
                <Stats
                    totalIncomes={totalIncomes}
                    totalExpenses={totalExpenses}
                />
            </div>
            <ChartLayout>
                <LineGraph chartData={chartData} />
            </ChartLayout>
        </Layout>
    )
}

const ChartLayout: React.FC = ({ children }) => {
    return <div className="w-[90%] lg:w-[95%] h-auto mt-9">{children}</div>
}

export const Layout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col items-stretch layout-width xl:w-[60%] xl:m-7 rounded-xl ml-[4rem] lg:ml-0 h-[100%] lg:h-screen bg-white">
            {children}
        </div>
    )
}

export default Overview
