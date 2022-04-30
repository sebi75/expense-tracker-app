import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"

interface StatsProps {
    totalIncomes: number
    totalExpenses: number
}

export const Stats: React.FC<StatsProps> = ({
    totalIncomes,
    totalExpenses,
}) => {
    const user = useSelector((state: RootState) => state.user.user)

    return (
        <div className="w-full shadow stats flex flex-col lg:flex-row">
            <div className="stat bg-white">
                <div className="stat-figure text-primary"></div>
                <div className="stat-title text-black">
                    Current Month's Income
                </div>
                <div className="stat-value text-2xl lg:text-[2.3rem] text-primary">
                    ${totalIncomes}
                </div>
                {/* <div className="stat-desc">20% more than last month</div> */}
            </div>
            <div className="stat bg-white">
                <div className="stat-figure text-info"></div>
                <div className="stat-title text-black">
                    Current Month's Expenses
                </div>
                <div className="stat-value text-2xl lg:text-[2.3rem] text-info">
                    ${totalExpenses}
                </div>
                {/* <div className="stat-desc">5% less than last month</div> */}
            </div>
            <div className="stat bg-white">
                <div className="stat-figure text-info">
                    <div className="avatar online">
                        <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="User Avatar"
                                    className="mask mask-squircle"
                                />
                            ) : (
                                <div className="mask mask-squircle bg-gray-700"></div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="stat-value text-2xl lg:text-[1.7rem] text-black">
                    {user.displayName}
                </div>
                <div className="stat-title"></div>
                <div className="stat-desc text-info">Free Beta Plan</div>
            </div>
        </div>
    )
}
