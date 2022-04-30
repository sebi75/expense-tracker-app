import { Navigate } from "react-router-dom"
import Login from "../components/Authentication/Login"
import { useContext } from "react"
import { ApplicationContext } from "../context/Context"

interface Props {
    component: React.ComponentType
    path?: string
}

export const PrivateRoute: React.FC<Props> = ({
    component: RouteComponent,
}) => {
    const { appState } = useContext(ApplicationContext)

    if (appState.user) {
        return <RouteComponent />
    } else {
        return <Navigate replace to={"/login"} />
    }
}
