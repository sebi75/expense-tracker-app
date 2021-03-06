import React, { useState, useContext } from "react"
import { GiCancel } from "react-icons/gi"

import { SideStateContext } from "../../../layerContext/LayerContext"

import { useAppDispatch } from "../../../redux/store"
import { deleteTransactionFromDb } from "../../../firebase"
import { deleteTransaction } from "../../../redux/reducers/transactionsReducer"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

interface ModalProps {
    isConfirmModalOpen: boolean
    setIsConfirmModalOpen: (p: boolean) => void
}

const ConfirmModal: React.FC<ModalProps> = ({
    setIsConfirmModalOpen,
    isConfirmModalOpen,
}) => {
    const [isConfirmed, setIsConfirmed] = useState(false)

    const user = useSelector((state: RootState) => state.user.user)
    const transactions = useSelector(
        (state: RootState) => state.transactions.transactions
    )

    const { transactionToBeDeletedId, setTransactionToBeDeletedId } =
        useContext(SideStateContext)
    const dispatch = useAppDispatch()

    const confirmHandler = () => {
        setIsConfirmed(true)

        if (isConfirmed) {
            /* proceed to delete transaction */
            dispatch(
                deleteTransaction({ transactionId: transactionToBeDeletedId })
            )
            deleteTransactionFromDb(
                user.id,
                transactionToBeDeletedId,
                transactions
            )
            setTransactionToBeDeletedId("")
            setIsConfirmModalOpen(false)
        }
    }

    return (
        <Layout isModalOpen={isConfirmModalOpen}>
            <button
                className="btn btn-ghost self-start p-1 m-2"
                onClick={() => setIsConfirmModalOpen(false)}
            >
                <GiCancel size={25} className="text-gray-800" />
            </button>
            <InsideLayout>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-black text-lg">
                        Are you sure you want to delete this transaction?
                    </h1>
                    {/* <p className="font-bold text-red-800 text-base">
                        Action can't be reversed
                    </p> */}
                </div>

                <button
                    className="btn blue-bg-gradient border-none"
                    onClick={confirmHandler}
                >
                    Confirm Delete
                </button>
            </InsideLayout>
        </Layout>
    )
}

const InsideLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col justify-center items-center w-[90%] h-[80%]">
            {children}
        </div>
    )
}

interface LayoutProps {
    isModalOpen: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, isModalOpen }) => {
    return (
        <div
            className={
                isModalOpen
                    ? "z-10 fixed flex justify-center items-center w-full h-full bg-gray-trans"
                    : "hidden"
            }
        >
            <div className="lg:w-[25%] w-[100%] h-[12rem] bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center overflow-hidden">
                {children}
            </div>
        </div>
    )
}

export default ConfirmModal
