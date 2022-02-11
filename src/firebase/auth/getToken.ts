import { auth } from "../firebase"

export const getToken = (
    setTokenObject: React.Dispatch<React.SetStateAction<{}>>
) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            user.getIdTokenResult().then((idTokenResult) => {
                setTokenObject(idTokenResult)
            })
        }
    })
}
