import React from "react"
import { GiCancel } from "react-icons/gi"

/* IMPORT COMPONENTS HERE */
import QuickAddForm from "./QuickAddForm"
import UploadSvg from "../../../assets/uploading.svg"

interface ModalProps {
    isModalOpen: boolean
    setIsModalOpen: (p: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <Layout isModalOpen={isModalOpen}>
            <button
                className="btn btn-ghost m-4 self-start"
                onClick={() => setIsModalOpen(false)}
            >
                <GiCancel size={31} className="text-gray-800" />
            </button>
            <InsideLayout>
                <FormLayout>
                    <QuickAddForm setIsModalOpen={setIsModalOpen} />
                </FormLayout>
                <div className="hidden lg:flex justify-center w-[100%] lg:w-[45%]">
                    <img
                        src={UploadSvg}
                        alt=""
                        className="w-[85%] h-[40%] right-64"
                    />
                </div>
            </InsideLayout>
        </Layout>
    )
}

const FormLayout: React.FC = ({ children }) => {
    return (
        <div className="flex items-center justify-center w-[85%] lg:w-[50%]">
            {children}
        </div>
    )
}

const InsideLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-[90%] h-[80%]">
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
            <div className="lg:w-[50%] w-[100%] h-[70vh] bg-white shadow-lg rounded-2xl flex flex-col items-center overflow-hidden">
                {children}
            </div>
        </div>
    )
}

export default Modal
