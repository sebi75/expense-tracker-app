import { auth } from "../firebase"
import { User } from "../../interfaces/user"

export const getAuthStateHandler = (addUser: any) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            user.getIdTokenResult().then((idTokenResult) => {
                const token = idTokenResult
            })

            const finalUser = {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                id: user.uid,
            }

            addUser(finalUser)
        }
    })
}
