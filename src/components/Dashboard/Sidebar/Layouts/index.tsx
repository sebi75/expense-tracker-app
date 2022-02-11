export const ResponsiveSidebar: React.FC = ({ children }) => {
    return (
        <div className="flex justify-center items-center blue-bg-gradient w-[3.5rem] h-[100%] lg:hidden fixed">
            {children}
        </div>
    )
}

export const Layout: React.FC = ({ children }) => {
    return (
        <div className="w-[15%] min-w-[222px] hidden lg:flex justify-center items-center blue-bg-gradient m-2 xl:m-7 rounded-xl shadow-md">
            {children}
        </div>
    )
}
