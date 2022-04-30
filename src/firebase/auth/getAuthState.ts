import { auth } from "../firebase"
import { User } from "../../interfaces/user"

import { addUser } from "../../redux/reducers/userReducer"

export const getAuthStateHandler = async (dispatch: any) => {
    let returnUser = undefined
    auth.onAuthStateChanged((user) => {
        if (user) {
            const finalUser = {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                id: user.uid,
            }
            console.log(finalUser)

            dispatch(addUser(finalUser as User))
        } else {
            returnUser = undefined
        }
    })

    return returnUser as unknown as User
}
