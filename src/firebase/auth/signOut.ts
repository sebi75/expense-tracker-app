import { auth } from "../firebase"

export const signOutHandler = (): boolean => {
    auth.signOut()
        .then(() => {
            return true
        })
        .catch((error) => {
            console.log("Couldn't sign out")
            return false
        })

    return false
}
