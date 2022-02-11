import React, { useState, useContext } from "react"
import { LoadComponentType } from "./Interfaces/index"

/* COMPONENT IMPORTS */
import TransactionsHistory from "./TransactionsHistory/TransactionsHistory"
import Sidebar from "./Sidebar/Sidebar"
import Modal from "./QuickAddModal/Modal"

/* MIDDLE CONTENT IMPORTS */
import Overview from "./MainComponents/Overview"
import Expenses from "./MainComponents/Expenses/Expenses"
import Budgeting from "./MainComponents/Budgeting/Budgeting"
import Notifications from "./MainComponents/Notifications"
import Incomes from "./MainComponents/Incomes/Incomes"
import { ApplicationContext } from "../../context/Contex"
import { SideStateContext } from "../../layerContext/LayerContext"
import SuccessAlert from "./Alerts/Success"
import ConfirmModal from "./TransactionsHistory/ConfirmModal"

const components = {
    Overview: <Overview />,
    Expenses: <Expenses />,
    Budgeting: <Budgeting />,
    Notifications: <Notifications />,
    Incomes: <Incomes />,
}

const Dashboard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loadComponent, setLoadComponent] =
        useState<LoadComponentType>("Overview")

    const { issuccessfullyAdded } = useContext(ApplicationContext)
    const { isConfirmModalOpen, setIsConfirmModalOpen } =
        useContext(SideStateContext)

    let content = components[loadComponent]

    return (
        <>
            <Layout>
                {issuccessfullyAdded && <SuccessAlert />}
                <Sidebar setLoadComponent={setLoadComponent} />
                {content}
                <TransactionsHistory setIsModalOpen={setIsModalOpen} />
                <Modal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
                <ConfirmModal
                    isConfirmModalOpen={isConfirmModalOpen}
                    setIsConfirmModalOpen={setIsConfirmModalOpen}
                />
            </Layout>
        </>
    )
}

const Layout: React.FC = ({ children }) => {
    return (
        <div className="flex w-full h-full lg:h-screen xl:max-h-screen xl:overflow-y-hidden overflow-x-hidden bg-white">
            {children}
        </div>
    )
}

export default Dashboard
