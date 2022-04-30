import React, { useState, useContext } from "react"

import { TextField } from "@mui/material"

import {
    incomeCategories,
    expenseCategories,
} from "../../../constants/categories"
import { Transaction } from "../../../interfaces/transactions"
import { ApplicationContext } from "../../../context/Context"

import { idGen } from "../../../utils/idGen"
import formatDate from "../../../utils/formatDate"

const initialState: Transaction = {
    id: idGen(),
    amount: 0,
    category: "Business",
    type: "income",
    date: formatDate(new Date(Date.now()) as unknown as string),
    fullDate: new Date(Date.now()),
}

interface QuickAddFormProps {
    setIsModalOpen: (p: boolean) => void
}

const QuickAddForm: React.FC<QuickAddFormProps> = ({ setIsModalOpen }) => {
    const [formData, setFormData] = useState<Transaction>(initialState)
    const { addTransactionHandler, setIsSuccessfullyAdded } =
        useContext(ApplicationContext)
    const [error, setError] = useState(false)

    const createTransaction = () => {
        const { category, type, amount, date } = formData

        if (category && type && amount > 0 && date) {
            const dateObject = formData.fullDate
            const transaction = {
                id: idGen(),
                amount: amount,
                category: category,
                type: type,
                date: date,
                fullDate: new Date(dateObject),
            }

            addTransactionHandler(transaction)

            setFormData(initialState)

            setIsModalOpen(false)

            setIsSuccessfullyAdded(true)

            setTimeout(() => {
                setIsSuccessfullyAdded(false)
            }, 2000)
        } else {
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 2000)
        }
    }

    const selectedCategories =
        formData.type === "income" ? incomeCategories : expenseCategories

    return (
        <>
            <Layout>
                {/* TYPE */}

                <FirstRow>
                    <select
                        className="select select-bordered select-primary w-full md:w-[50%] max-w-xs mb-[1.5rem] md:mb-[1rem]"
                        value={formData.type}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                type: e.target.value as string,
                            })
                        }
                    >
                        <option value={"expense"}>Expense</option>
                        <option value={"income"}>Income</option>
                    </select>

                    {/* CATEGORY */}

                    <select
                        className="select select-bordered select-primary w-full md:w-[50%] max-w-xs mb-[1.5rem] ml-2 md:mb-[1rem]"
                        value={formData.category}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                category: e.target.value,
                            })
                        }
                    >
                        {selectedCategories.map((c: any) => (
                            <option key={c.type} value={c.type}>
                                {c.type}
                            </option>
                        ))}
                    </select>
                </FirstRow>

                <SecondRow>
                    {/* AMOUNT */}

                    <div className="flex-1 mr-2 min-w-[50%]">
                        <TextField
                            type={"number"}
                            label={"Amount"}
                            fullWidth
                            value={formData.amount}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    amount: e.target.value as unknown as number,
                                })
                            }
                        />
                    </div>

                    {/* DATE */}

                    <div className="flex-1 max-w-[50%]">
                        <TextField
                            type="date"
                            fullWidth
                            value={formData.date}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    date: formatDate(
                                        e.target.value
                                    ) as unknown as string,
                                    fullDate: new Date(e.target.value),
                                })
                            }}
                        />
                    </div>
                </SecondRow>
                <button
                    className="btn glass bg-primary hover:bg-primary-hover mt-5"
                    onClick={() => createTransaction()}
                >
                    Add {formData.type === "income" ? "Income" : "Expense"}
                </button>

                <FailAlert error={error} />
            </Layout>
        </>
    )
}

const FirstRow: React.FC = ({ children }) => {
    return (
        <div className="flex w-full flex-col md:flex-row items-center justify-center ">
            {children}
        </div>
    )
}

const SecondRow: React.FC = ({ children }) => {
    return <div className="flex mt-4">{children}</div>
}

interface FailAlertProps {
    error: boolean
}

const FailAlert: React.FC<FailAlertProps> = ({ error }) => {
    return (
        <div
            className={
                error
                    ? "alert alert-error mt-[2rem]"
                    : "alert alert-error mt-[2rem] hidden"
            }
        >
            <div className="flex-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mx-2 stroke-current"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    ></path>
                </svg>
                <label>Failed to add transaction!</label>
            </div>
        </div>
    )
}

const Layout: React.FC = ({ children }) => {
    return <div className="flex flex-col w-full ">{children}</div>
}

export default QuickAddForm
