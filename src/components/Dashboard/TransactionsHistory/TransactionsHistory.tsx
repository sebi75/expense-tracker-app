import React, { useState } from "react"
import { AiFillPlusCircle } from "react-icons/ai"

import { HistoryTransactionsLayout, TransactionItem } from "./TransactionsList"

import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import { Transaction } from "../../../interfaces/transactions"

import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

interface TransactionsHistoryProps {
    setIsModalOpen: (p: boolean) => void
}

const TransactionsHistory: React.FC<TransactionsHistoryProps> = ({
    setIsModalOpen,
}) => {
    const transactions = useSelector(
        (state: RootState) => state.transactions.transactions
    )
    const user = useSelector((state: RootState) => state.user.user)

    return (
        <>
            <Layout>
                {/* AVATAR SECTION */}
                <AvatarContainer
                    photoURL={user.photoURL}
                    displayName={
                        user.displayName || extractDisplayName(user.email)
                    }
                />

                {/* QUICK ADD TRANSACTION */}
                <QuickAdd>
                    <button
                        className="btn btn-ghost text-white"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <AiFillPlusCircle
                            size={25}
                            className="text-white mr-3"
                        />
                        Quick add
                    </button>
                </QuickAdd>

                {/* HISTORY TRANSACTIONS SECTION */}
                <TransactionsList transactions={transactions} />
            </Layout>

            <PhoneNav
                styles={"xl:hidden flex min-w-[40px]"}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    )
}

const QuickAdd: React.FC = ({ children }) => {
    return <div className="flex mt-[3rem]">{children}</div>
}

const Layout: React.FC = ({ children }) => {
    return (
        <div className="hidden xl:w-[25%] h-screen xl:flex flex-col justify-around items-center blue-bg-gradient shadow-lg ml-7">
            {children}
        </div>
    )
}

interface PhoneNavProps {
    styles: string
    setIsModalOpen: (p: boolean) => void
}

const PhoneNav: React.FC<PhoneNavProps> = ({ styles, setIsModalOpen }) => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const user = useSelector((state: RootState) => state.user.user)
    const transactions = useSelector(
        (state: RootState) => state.transactions.transactions
    )

    return (
        <div className={styles && `${styles}`}>
            {toggleMenu ? (
                <AiOutlineClose
                    fontSize={28}
                    className={
                        toggleMenu
                            ? "text-transparent"
                            : "text-[#355c7d] md:hidden cursor-pointer"
                    }
                    onClick={() => setToggleMenu(false)}
                />
            ) : (
                <HiMenuAlt4
                    fontSize={31}
                    className="text-[#355c7d] lg:absolute lg:top-0 lg:right-0 xl:hidden cursor-pointer"
                    onClick={() => setToggleMenu(true)}
                />
            )}
            {toggleMenu && (
                <ul className="z-9 fixed top-0 -right-2 p-3 w-[90vw] sm:w-[70vw] h-screen shadow-2xl xl:hidden list-none flex flex-col justify-start items-center rounded-md animate-slide-in blue-glassmorphism">
                    <li className="text-xl w-full my-2">
                        <AiOutlineClose
                            fontSize={28}
                            className="text-white cursor-pointer"
                            onClick={() => setToggleMenu(false)}
                        />
                    </li>
                    <AvatarContainer
                        photoURL={user.photoURL}
                        displayName={user.displayName}
                    />

                    <QuickAdd>
                        <button
                            className="btn btn-ghost text-white"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <AiFillPlusCircle
                                size={25}
                                className="text-white mr-3"
                            />
                            Quick add
                        </button>
                    </QuickAdd>

                    <TransactionsList transactions={transactions} />
                </ul>
            )}
        </div>
    )
}

interface AvatarContainerProps {
    photoURL: string
    displayName: string
}

const AvatarContainer: React.FC<AvatarContainerProps> = ({
    photoURL,
    displayName,
}) => {
    return (
        <div className="flex mt-[2rem] flex-col justify-center items-center white-glassmorphism w-[85%] h-[30vh] shadow-lg">
            <div className="avatar">
                <div className="mb-8 bg-neutral-focus rounded-full w-24 h-24 overflow-hidden">
                    <img src={photoURL} alt="" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white text-base font-bold">
                    Hello, {displayName}
                </h1>
            </div>
        </div>
    )
}

interface TransactionsListProps {
    transactions: Transaction[]
}

const TransactionsList: React.FC<TransactionsListProps> = ({
    transactions,
}) => {
    const applyShadowList = transactions.length > 5 ? true : false
    return (
        <div className="flex flex-col items-center justify-center w-full sm:w-[90%]">
            <h1 className="text-white text-bold mb-3 text-xl self-start ml-[10%]">
                History
            </h1>
            <HistoryTransactionsLayout applyShadowList={applyShadowList}>
                {transactions.length == 0 && (
                    <h1 className="text-white text-lg">
                        No transactions to display
                    </h1>
                )}
                {transactions.map((transaction) => {
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
        </div>
    )
}

const extractDisplayName = (email: any): string => {
    const aroundIndex = email.indexOf("@")

    const displayName = email.substring(0, aroundIndex)

    return displayName
}

export default TransactionsHistory
