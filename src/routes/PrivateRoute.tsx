import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

interface Props {
    component: React.ComponentType
    path?: string
}

export const PrivateRoute: React.FC<Props> = ({
    component: RouteComponent,
}) => {
    const user = useSelector((state: RootState) => state.user.user)

    if (user) {
        return <RouteComponent />
    } else {
        return <Navigate replace to={"/login"} />
    }
}
