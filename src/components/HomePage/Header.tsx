import React, { useState, useEffect, useContext } from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

import { Link } from "react-router-dom"

/* ApplicationContext */
import { ApplicationContext } from "../../context/Context"

interface HeaderProps {
    aboutRef: any
}

const Header: React.FC<HeaderProps> = ({ aboutRef }) => {
    const [offsetY, setOffsetY] = useState(0)

    const scrollHandler = () => {
        setOffsetY(window.scrollY)
    }

    const smoothScroll = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)

        return () => {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    return (
        <Layout styles={offsetY > 300 ? "white-glassmorphism" : ""}>
            <Logo title={"FINBRO"} styles={"text-white"} />
            <NavList styles={"md:flex hidden"} aboutReference={smoothScroll} />
            <AuthButtons styles={"md:flex hidden"} />
            <PhoneNav styles={"md:hidden flex relative"} />
        </Layout>
    )
}

interface NavListProps {
    styles?: string
    aboutReference: () => void
}

const NavList: React.FC<NavListProps> = ({ styles, aboutReference }) => {
    return (
        <div className={styles && styles}>
            <ul className="flex">
                <NavItem
                    title={"About"}
                    styles={"text-white dark:text-black"}
                    onClick={aboutReference}
                />
            </ul>
        </div>
    )
}

interface NavItemProps {
    title: string
    icon?: React.FC
    styles?: string
    onClick?: () => void
}

const NavItem: React.FC<NavItemProps> = ({ title, styles, onClick }) => (
    <button
        className={
            styles ? `${styles} btn btn-ghost mr-2` : "btn btn-ghost mr-2"
        }
        onClick={onClick}
    >
        {title}
    </button>
)

interface StylesProps {
    styles: string
}

const AuthButtons: React.FC<StylesProps> = ({ styles }) => {
    const { appState, signOut } = useContext(ApplicationContext)

    const user = appState.user

    return (
        <div className={styles ? `flex ${styles} ` : "flex"}>
            {user ? (
                <>
                    <button className="btn glass mr-2 bg-primary hover:bg-primary-hover border-none">
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </button>
                    <button
                        className="btn btn-ghost text-white"
                        onClick={() => signOut()}
                    >
                        Sign out
                    </button>
                </>
            ) : (
                <>
                    <button className="btn glass mr-2 bg-primary hover:bg-primary-hover border-none">
                        <Link to={"/login"}>Login</Link>
                    </button>
                    <button className="btn btn-ghost text-white">
                        <Link to={"/signup"}>SignUp</Link>
                    </button>
                </>
            )}
        </div>
    )
}

const PhoneNav: React.FC<StylesProps> = ({ styles }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className={styles && `${styles}`}>
            {toggleMenu ? (
                <AiOutlineClose
                    fontSize={28}
                    className={
                        toggleMenu
                            ? "display-none text-transparent"
                            : "text-white md:hidden cursor-pointer"
                    }
                    onClick={() => setToggleMenu(false)}
                />
            ) : (
                <HiMenuAlt4
                    fontSize={28}
                    className="text-white md:hidden cursor-pointer"
                    onClick={() => setToggleMenu(true)}
                />
            )}
            {toggleMenu && (
                <ul className="z-9 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-center rounded-md animate-slide-in blue-glassmorphism">
                    <li className="text-xl w-full my-2">
                        <AiOutlineClose
                            fontSize={28}
                            className="text-white cursor-pointer"
                            onClick={() => setToggleMenu(false)}
                        />
                    </li>
                    {/* <NavItem title={"About"} styles={"m-2 text-white"} /> */}
                    <AuthButtons styles={"mt-2 flex flex-col xl:flex-row"} />
                </ul>
            )}
        </div>
    )
}

interface LogoProps {
    title: string
    styles?: string
}

const Logo: React.FC<LogoProps> = ({ title, styles }) => {
    return (
        <div className="justify-center items-center">
            <h1
                className={
                    styles
                        ? `${styles} font-bold text-3xl cursor-pointer`
                        : "font-bold text-3xl cursor-pointer"
                }
            >
                {title}
            </h1>
        </div>
    )
}

interface LayoutProps {
    styles?: string
}

const Layout: React.FC<LayoutProps> = ({ children, styles }) => {
    return (
        <div
            className={
                styles
                    ? `flex justify-around items-center h-20 w-full fixed ${styles} z-[100]`
                    : "flex justify-around items-center h-20 w-full fixed z-[100]"
            }
        >
            {children}
        </div>
    )
}

export default Header
