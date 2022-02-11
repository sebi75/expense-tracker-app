import React from "react"
import { Link } from "react-router-dom"
import Display from "../../assets/h.png"

const Hero = () => {
    return (
        <>
            <HeroLayout>
                {/* LEFTSIDE */}
                <div className="w-full sm:w-4/5 flex justify-center items-center flex-col mt-9 m-9 overflow-hidden md:mt-0 flex-1">
                    <h1 className="font-bold text-5xl text-white text-center">
                        Start tracking your expenses now
                    </h1>
                    <p className="text-gray-200 text-xl mt-5">
                        Make the first steps towards financial freedom
                    </p>
                    <button className="btn glass mr-2 bg-primary hover:bg-primary-hover border-none mt-5">
                        <Link to={"/signup"}>Get started</Link>
                    </button>
                </div>
                <div className="mockup-phone w-[90%] sm:flex-1 m-8 mx-[3rem] ">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard phone-1 artboard-demo">
                            <img src={Display} alt="" />
                        </div>
                    </div>
                </div>
            </HeroLayout>
        </>
    )
}

const HeroLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row w-4/5 h-full lg:h-screen justify-center items-center md:justify-evenly m-14 mt-36 lg:mt-0">
            {children}
        </div>
    )
}

export default Hero
