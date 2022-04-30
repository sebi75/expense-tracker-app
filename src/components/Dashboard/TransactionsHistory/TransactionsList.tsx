import { useContext } from "react"
import { MdAttachMoney } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"

import { SideStateContext } from "../../../layerContext/LayerContext"

interface TransactionsItemProps {
    styles?: string
    type: string
    amount: number
    category: string
    textBlack?: boolean
    date?: string
    id: string
}

export const TransactionItem: React.FC<TransactionsItemProps> = ({
    type,
    amount,
    category,
    textBlack,
    date,
    id,
}) => {
    const { setIsConfirmModalOpen, setTransactionToBeDeletedId } =
        useContext(SideStateContext)
    const modalHandler = () => {
        setIsConfirmModalOpen(true)
        setTransactionToBeDeletedId(id)
    }
    return (
        <div className="flex white-glassmorphism p-2 items-center mt-3 mr-3 justify-between">
            {/* AVATAR */}
            <div>
                <MdAttachMoney
                    size={31}
                    className={textBlack ? "text-black" : "text-white"}
                />
            </div>

            {/* LIST ITEM */}
            <div>
                <h1
                    className={
                        textBlack
                            ? "text-white text-base font-bold"
                            : "text-white text-base font-bold"
                    }
                >
                    {toFristCap(type)} - {category}
                </h1>

                <div className="flex flex-col md:flex-row items-center mt-1">
                    <p
                        className={
                            textBlack
                                ? " text-2xl text-primary font-bold"
                                : " text-2xl text-primary font-bold"
                        }
                    >
                        ${amount} -
                    </p>
                    <p className="text-white text-base ml-2">{date}</p>
                </div>
            </div>
            <div>
                <button
                    className="btn glass bg-gray-trans hover:bg-gray-trans-hover p-2"
                    onClick={modalHandler}
                >
                    <AiFillDelete
                        size={21}
                        className={textBlack ? "text-black" : "text-white"}
                    />
                </button>
            </div>
        </div>
    )
}

interface HistoryTransactionsLayoutProps {
    applyShadowList: boolean
}

export const HistoryTransactionsLayout: React.FC<
    HistoryTransactionsLayoutProps
> = ({ children, applyShadowList }) => {
    return (
        <div
            className={
                applyShadowList
                    ? "flex flex-col w-[95%] sm:w-[85%] min-h-[40vh] max-h-[40vh] p-3 overflow-y-scroll under-shadow rounded-lg"
                    : "flex flex-col w-[95%] sm:w-[85%] min-h-[40vh] max-h-[40vh] p-3 overflow-y-scroll rounded-lg"
            }
        >
            {children}
        </div>
    )
}

const toFristCap = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
