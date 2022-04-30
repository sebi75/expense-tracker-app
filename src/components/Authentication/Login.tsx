import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { RootState } from "../../redux/store"

import { Layout, FormLayout } from "./Layouts/Layouts"
import { Form } from "./AuthForm"

const Login = () => {
    const user = useSelector((state: RootState) => state.user.user)

    return (
        <>
            {user && <Navigate replace to={"/dashboard"} />}
            <Layout styles={true}>
                <FormLayout>
                    <Form type={"Login"} />
                </FormLayout>
            </Layout>
        </>
    )
}

export default Login
