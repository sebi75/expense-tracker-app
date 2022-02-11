import { useRef } from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import PieChart from "../../assets/pie-chart-theme.svg"
import Reading from "../../assets/reading.svg"
import { Link } from "react-router-dom"

/* APP COMPONENTS IMPORT */
import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"

const Home: React.FC = () => {
    const aboutRef = useRef()

    return (
        <MainLayout>
            <Header aboutRef={aboutRef} />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <Hero />
                <About aboutRef={aboutRef} />
                <ExtraInfosSection />
            </div>
            <Footer />
        </MainLayout>
    )
}

interface AboutProps {
    aboutRef: any
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
    return (
        <AboutLayout>
            <h1
                className="text-white font-bold text-[2.5rem] md:text-[4rem] mb-2 text-center mt-20"
                ref={aboutRef}
            >
                The worlds easiest to use Expense and Budgeting tracker
            </h1>
            <ul>
                <li className="text-white text-xl flex flex-row items-center mt-9">
                    <AiFillCheckCircle
                        size={37}
                        className="text-primary-hover mr-5"
                    />
                    Easy to use interface for managing your expenses
                </li>
                <li className="text-white text-xl flex flex-row items-center mt-2">
                    <AiFillCheckCircle
                        size={37}
                        className="text-primary-hover mr-5"
                    />
                    Use the tracker to gain credit points and use them with our
                    partners
                </li>
                <li className="text-white text-xl flex flex-row items-center mt-2">
                    <AiFillCheckCircle
                        size={37}
                        className="text-primary-hover mr-5"
                    />
                    Easy to use interface for managing your expenses
                </li>
            </ul>
            <div className="w-full h-80 2xl:h-full flex">
                <img
                    src={PieChart}
                    alt=""
                    className="w-full h-64 2xl:h-96 bg-contain bg-center bg-no-repeat"
                />
            </div>
        </AboutLayout>
    )
}

const AboutLayout: React.FC = ({ children }) => {
    return (
        <div className="w-full flex justify-center ">
            <div className="flex w-1/2 flex-col items-center">{children}</div>
        </div>
    )
}

const ExtraInfosSection: React.FC = () => {
    return (
        <div
            className={`w-full mt-36 2xl:mt-[10rem] 2xl:w-3/4 h-auto flex flex-wrap 2xl:flex-nowrap justify-center items-center 2xl:p-11 rounded-box`}
        >
            {/* leftSide */}
            <div className="w-full h-80 2xl:h-full flex">
                <img
                    src={Reading}
                    alt=""
                    className="w-full h-64 2xl:h-96 bg-contain bg-center bg-no-repeat"
                />
            </div>
            {/* rightSide */}
            <div className="w-full 2xl:w-3/4 h-full p-9 rounded-box mb-2 mt-5 flex justify-center items-center mx-3 leading-7">
                <div className="w-3/4">
                    {/* heading */}
                    <h1 className="text-white text-[2.5rem] md:text-[4rem] font-bold mb-5">
                        Relax.
                    </h1>
                    {/* subheading */}
                    <h1 className="text-white text-2xl font-semibold mb-2 leading-10">
                        Enjoy whatever you like while finances are on point
                    </h1>
                    {/* button */}
                    <button className="btn glass bg-primary hover:bg-primary-hover border-none w-3/4 btn glass 2xl:w-2/5 mt-5 mb-5">
                        <Link to={"/dashboard"}>Learn How</Link>
                    </button>
                    {/* paragraph */}
                    <p className="text-gray-200 leading-8 text-xl">
                        Personal finance is a term that covers managing your
                        money as well as saving and investing. It encompasses
                        budgeting, banking, insurance, mortgages, investments,
                        retirement planning, and tax and estate planning.
                    </p>
                </div>
            </div>
        </div>
    )
}

const MainLayout: React.FC = ({ children }) => {
    return (
        <div className="w-full h-full flex flex-col blue-bg-gradient">
            {children}
        </div>
    )
}

export default Home
