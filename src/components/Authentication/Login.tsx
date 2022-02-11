import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { ApplicationContext } from "../../context/Contex"

import { Layout, FormLayout } from "./Layouts/Layouts"
import { Form } from "./AuthForm"

const Login = () => {
    const { appState } = useContext(ApplicationContext)

    return (
        <>
            {appState.user && <Navigate replace to={"/dashboard"} />}
            <Layout styles={true}>
                <FormLayout>
                    <Form type={"Login"} />
                </FormLayout>
            </Layout>
        </>
    )
}

export default Login
