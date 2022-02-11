import { LoadComponentType } from "../Interfaces/index"

interface ListItemProps {
    icon: any
    label?: LoadComponentType
    componentName: LoadComponentType
    setLoadComponent: (p: LoadComponentType) => void
}

const ListItem: React.FC<ListItemProps> = ({
    icon,
    label,
    setLoadComponent,
    componentName,
}) => {
    return (
        <button
            className="btn btn-ghost text-white mt-4 px-2 lg:p-3"
            onClick={() => setLoadComponent(componentName)}
        >
            {icon}
            {label && label}
        </button>
    )
}

export default ListItem
