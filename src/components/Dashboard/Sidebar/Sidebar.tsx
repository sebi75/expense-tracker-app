import React from "react"
import { LoadComponentType } from "../Interfaces/index"
import { Link } from "react-router-dom"

import List from "./List"
import PhoneList from "./PhoneResponsiveness/PhoneList"

import { Layout, ResponsiveSidebar } from "./Layouts"

interface SidebarProps {
    setLoadComponent: (p: LoadComponentType) => void
}

const Sidebar: React.FC<SidebarProps> = ({ setLoadComponent }) => {
    return (
        <>
            <Layout>
                <div className="flex flex-col w-[80%] h-[90%] items-center ">
                    {/* LOGO, sidebar start */}
                    <Logo title={"FINBRO"} styles={"text-white"} />
                    <List setLoadComponent={setLoadComponent} />
                </div>
            </Layout>
            {/* MOBILE SIDEBAR */}
            <ResponsiveSidebar>
                <div className="flex flex-col justify-center w-[80%] h-[100%] items-center">
                    {/* LOGO, sidebar start */}
                    <PhoneList setLoadComponent={setLoadComponent} />
                </div>
            </ResponsiveSidebar>
        </>
    )
}

interface LogoProps {
    title: string
    styles: string
}

const Logo: React.FC<LogoProps> = ({ title, styles }) => {
    return (
        <div className="justify-center items-center">
            <Link to={"/"}>
                <h1
                    className={
                        styles
                            ? `${styles} font-bold text-3xl cursor-pointer`
                            : "font-bold text-3xl cursor-pointer"
                    }
                >
                    {title}
                </h1>
            </Link>
        </div>
    )
}

export default Sidebar
