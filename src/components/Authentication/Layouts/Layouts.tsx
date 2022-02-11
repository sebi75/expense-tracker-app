import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"

export const FormLayout: React.FC = ({ children }) => {
    return (
        <div className="w-[80%] m-[2rem] h-[85%] flex justify-center">
            {children}
        </div>
    )
}

interface LayoutProps {
    styles?: boolean
}

export const Layout: React.FC<LayoutProps> = ({ children, styles }) => {
    return (
        <div
            className={
                styles
                    ? "w-full h-full min-h-[100vh] md:h-screen flex flex-col justify-center items-center blue-bg-gradient"
                    : "w-full h-screen flex flex-col justify-center items-center blue-bg-gradient"
            }
        >
            <Link to={"/"}>
                <h1 className="font-bold text-3xl cursor-pointer text-white mb-[2rem]">
                    FINBRO
                </h1>
            </Link>
            <div
                className={
                    styles
                        ? "w-[97%] md:w-[65%] lg:w-[40%] h-[85%] bg-white shadow-xl rounded-xl white-glassmorphism flex justify-center items-center"
                        : "w-[97%] md:w-[65%] lg:w-[40%] h-[80%] bg-white shadow-xl rounded-xl white-glassmorphism flex justify-center items-center"
                }
            >
                {children}
            </div>
        </div>
    )
}

interface SignGoogleButtonProps {
    signWithGooglePopup: () => void
}

export const SignGoogleButton: React.FC<SignGoogleButtonProps> = ({
    children,
    signWithGooglePopup,
}) => {
    return (
        <button
            className="btn glass flex items-center justify-center text-white mt-[1rem] w-full border-1 border-gray-500"
            onClick={() => signWithGooglePopup()}
        >
            <FcGoogle size={24} className="mr-2" />
            Sign In With Google
        </button>
    )
}

interface SignButtonProps {
    type: string
    signHandler: () => void
    isLoading: boolean
}
export const SignButton: React.FC<SignButtonProps> = ({
    type,
    signHandler,
    isLoading,
}) => {
    return (
        <button
            className={
                isLoading
                    ? "btn glass loading w-[100%] mt-[2rem] border-1 border-gray-500 text-white flex items-center justify-center"
                    : "btn glass w-[100%] mt-[2rem] border-1 border-gray-500 text-white flex items-center justify-center"
            }
            onClick={() => signHandler()}
        >
            {type}
        </button>
    )
}
