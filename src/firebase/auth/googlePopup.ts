import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { provider } from "./auth"

import { User } from "../../interfaces/user"

export const authWithPopup = async () => {
    let finalUser = undefined
    await signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken

            if (token) {
                localStorage.setItem("token", token)
            }

            const user: User = {
                displayName: result.user.displayName as string,
                email: result.user.email as string,
                photoURL: result.user.photoURL as string,
                id: result.user.uid,
            }

            finalUser = user
            // ...
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            const email = error.email

            const credential = GoogleAuthProvider.credentialFromError(error)
        })
    return finalUser
}
