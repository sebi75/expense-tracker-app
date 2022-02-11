import { auth } from "../firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { provider } from "./auth"

export const authWithPopup = async (addUser: any) => {
    await signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken

            if (token) {
                localStorage.setItem("token", token)
            }

            const user = {
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
                id: result.user.uid,
                authToken: token,
            }

            addUser(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            const email = error.email

            const credential = GoogleAuthProvider.credentialFromError(error)
        })
}
