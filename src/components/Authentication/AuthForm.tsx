import { Link } from "react-router-dom"
import { useState } from "react"

import {
    authWithPopup,
    createAccountWithEmail,
    signWithEmail,
} from "../../firebase"

import { useAppDispatch } from "../../redux/store"
import { addUser } from "../../redux/reducers/userReducer"

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
    const [formData, setFormData] = useState<FormData>(initialFormData)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const dispatch = useAppDispatch()

    const createWithEmail = async () => {
        const { password, confirmPassword, email } = formData
        if (
            password === confirmPassword &&
            password.length > 5 &&
            email.length > 5
        ) {
            setIsLoading(true)
            const user = await createAccountWithEmail(email, password, setError)
            if (user) {
                setIsLoading(false)
                dispatch(addUser(user))
            }
        } else {
            setError("Password must be over 5 characters")
        }
    }

    const signInWithEmail = async () => {
        const { password, email } = formData
        if (password.length > 5 && email.length > 5) {
            setIsLoading(true)
            const user = await signWithEmail(email, password, setError)
            if (user) {
                console.log("test")
                setIsLoading(false)
                dispatch(addUser(user))
            }
        } else {
            setError("Password must be over 5 characters")
        }
    }

    const authWithPopupHandler = async () => {
        setIsLoading(true)
        console.log("hellloooooo")
        const user = await authWithPopup()
        console.log("passed this with user: ")
        console.log(user)
        if (user != undefined) {
            setIsLoading(false)
            dispatch(addUser(user))
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

            <SignGoogleButton signWithGooglePopup={authWithPopupHandler} />
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
