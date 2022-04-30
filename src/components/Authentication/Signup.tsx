import { Navigate } from "react-router-dom"

import { Layout, FormLayout } from "./Layouts/Layouts"
import { Form } from "./AuthForm"

import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const Signup = () => {
    const user = useSelector((state: RootState) => state.user.user)

    return (
        <>
            {user && <Navigate replace to={"/dashboard"} />}
            <Layout styles={true}>
                <FormLayout>
                    <Form type={"Signup"} />
                </FormLayout>
            </Layout>
        </>
    )
}

export default Signup
