import React from "react"

/* ICONS IMPORTS */
import { AiOutlineShoppingCart, AiFillDollarCircle } from "react-icons/ai"
import { MdOutlineMenuBook } from "react-icons/md"
import { HiDocumentReport } from "react-icons/hi"

import { LoadComponentType } from "../Interfaces/index"
import ListItem from "./ListItem"

interface ListProps {
    setLoadComponent: (p: LoadComponentType) => void
}

const List: React.FC<ListProps> = ({ setLoadComponent }) => {
    return (
        <ul className="list-none flex flex-col mt-[3rem] items-center">
            <ListItem
                icon={
                    <MdOutlineMenuBook size={27} className="text-white mr-3" />
                }
                label={"Overview"}
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
                label={"Expenses"}
                componentName={"Expenses"}
                setLoadComponent={setLoadComponent}
            />

            <ListItem
                icon={
                    <AiFillDollarCircle size={27} className="text-white mr-3" />
                }
                label={"Incomes"}
                componentName={"Incomes"}
                setLoadComponent={setLoadComponent}
            />

            <ListItem
                icon={
                    <HiDocumentReport size={27} className="text-white mr-3" />
                }
                label={"Budgeting"}
                componentName={"Budgeting"}
                setLoadComponent={setLoadComponent}
            />
        </ul>
    )
}

export default List
