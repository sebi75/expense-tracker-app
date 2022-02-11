import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { ApplicationContext } from "../../context/Contex"

import { Layout, FormLayout } from "./Layouts/Layouts"
import { Form } from "./AuthForm"

const Signup = () => {
    const { appState } = useContext(ApplicationContext)

    return (
        <>
            {appState.user && <Navigate replace to={"/dashboard"} />}
            <Layout styles={true}>
                <FormLayout>
                    <Form type={"Signup"} />
                </FormLayout>
            </Layout>
        </>
    )
}

export default Signup
