import { useContext, useState } from "react"
import { ApplicationContext } from "../../context/Context"

import { Link } from "react-router-dom"

import { SignGoogleButton, SignButton } from "./Layouts/Layouts"
import FailMessage from "../Dashboard/Alerts/Fail"

interface FormProps {
    type: string
}

interface FormData {
    email: string
    password: string
    confirmPassword?: string
}

export const Form: React.FC<FormProps> = ({ type }) => {
    const {
        signWithGooglePopup,
        createAccountWithEmailHandler,
        signWithEmailHandler,
    } = useContext(ApplicationContext)
    const [formData, setFormData] = useState<FormData>(initialFormData)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const createWithEmail = () => {
        const { password, confirmPassword, email } = formData
        if (
            password === confirmPassword &&
            password.length > 5 &&
            email.length > 5
        ) {
            setIsLoading(true)
            createAccountWithEmailHandler(email, password, setError)
        } else {
            setError("Password must be over 5 characters")
        }
    }

    const signInWithEmail = () => {
        const { password, email } = formData
        if (password.length > 5 && email.length > 5) {
            setIsLoading(true)
            signWithEmailHandler(email, password, setError)
        } else {
            setError("Password must be over 5 characters")
        }
    }

    const signHandler = () => {
        if (type === "Signup") {
            createWithEmail()
        } else {
            signInWithEmail()
        }
    }

    return (
        <FormLayout type={type}>
            <label className="label self-start">
                <span className="label-text text-white font-bold">Email</span>
            </label>
            <input
                value={formData.email}
                onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    setError("")
                    setIsLoading(false)
                }}
                type="text"
                placeholder="email"
                className="input input-bordered w-[100%]"
            />
            <div className="mt-[1.5rem] w-[100%]">
                <label className="label self-start">
                    <span className="label-text text-white font-bold">
                        Password
                    </span>
                </label>
                <input
                    value={formData.password}
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            password: e.target.value,
                        })
                        setError("")
                        setIsLoading(false)
                    }}
                    type="password"
                    placeholder="password"
                    className="input input-bordered w-[100%]"
                />
            </div>
            {type === "Signup" && (
                <div className="mt-[1.5rem] w-[100%]">
                    <label className="label self-start">
                        <span className="label-text text-white font-bold">
                            Confirm Password
                        </span>
                    </label>
                    <input
                        value={formData.confirmPassword}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                confirmPassword: e.target.value,
                            })
                            setError("")
                            setIsLoading(false)
                        }}
                        type="password"
                        placeholder="confirm password"
                        className="input input-bordered w-[100%]"
                    />
                </div>
            )}
            <SignButton
                signHandler={signHandler}
                type={type}
                isLoading={isLoading}
            />

            <SignGoogleButton signWithGooglePopup={signWithGooglePopup} />
            {/* Conditional find */}
            {type === "Signup" ? (
                <div className="font-bold text-base mt-[0.7rem] flex text-white">
                    <Link to={"/login"} className="underline">
                        SignIn
                    </Link>{" "}
                    <p className="font-normal ml-1">
                        if you already have an account
                    </p>
                </div>
            ) : (
                <div className="font-bold text-base mt-[0.7rem] flex text-white">
                    <Link to={"/signup"} className="underline">
                        SignUp
                    </Link>{" "}
                    <p className="font-normal ml-1">
                        if you don't jave an account
                    </p>
                </div>
            )}
            <div className="w-full">
                {error.length > 1 && <FailMessage message={error} />}
            </div>
        </FormLayout>
    )
}

interface FormLayoutProps {
    type: string
}
const FormLayout: React.FC<FormLayoutProps> = ({ children, type }) => {
    return (
        <div className="flex flex-col w-[100%] items-center">
            <h1 className="font-bold text-white text-[2.5rem]">{type}</h1>

            {/* FORM */}

            <div className="form-control w-[100%] sm:w-[90%] md:w-[65%] flex justify-center items-center mt-[3rem]">
                {children}
            </div>
        </div>
    )
}

const initialFormData = {
    email: "",
    password: "",
    confirmPassword: "",
}
