import {
    AiOutlineShoppingCart,
    AiFillDollarCircle,
    AiFillHome,
} from "react-icons/ai"
import { MdOutlineMenuBook } from "react-icons/md"
import { HiDocumentReport } from "react-icons/hi"

import ListItem from "../ListItem"
import { Link } from "react-router-dom"
import { LoadComponentType } from "../../Interfaces/index"

interface ListProps {
    setLoadComponent: (p: LoadComponentType) => void
}

const PhoneList: React.FC<ListProps> = ({ setLoadComponent }) => {
    return (
        <ul className="list-none flex flex-col mt-[3rem] items-center justify-center">
            <button className="btn btn-ghost text-white mt-4 px-2 lg:p-3">
                <Link to={"/"}>
                    <AiFillHome size={27} className="text-white mr-3" />
                </Link>
            </button>
            <ListItem
                icon={
                    <MdOutlineMenuBook size={27} className="text-white mr-3" />
                }
                componentName={"Overview"}
                setLoadComponent={setLoadComponent}
            />

            <ListItem
                icon={
                    <AiOutlineShoppingCart
                        size={27}
                        className="text-white mr-3"
                    />
                }
                componentName={"Expenses"}
                setLoadComponent={setLoadComponent}
            />

            <ListItem
                icon={
                    <AiFillDollarCircle size={27} className="text-white mr-3" />
                }
                componentName={"Incomes"}
                setLoadComponent={setLoadComponent}
            />

            <ListItem
                icon={
                    <HiDocumentReport size={27} className="text-white mr-3" />
                }
                componentName={"Budgeting"}
                setLoadComponent={setLoadComponent}
            />
        </ul>
    )
}

export default PhoneList
