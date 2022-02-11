import { auth } from "../firebase"

export const signOutHandler = (addUser: any) => {
    auth.signOut()
        .then(() => {
            addUser(undefined)
            localStorage.clear()
        })
        .catch((error) => {
            console.log("Couldn.t sign out")
        })
}
