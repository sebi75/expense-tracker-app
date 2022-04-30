import { auth } from "../firebase"

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"

import { updateUser } from "../"
import { User } from "../../interfaces/user"

type FunctionReturn = User | undefined

export const createAccountWithEmail = async (
    email: string,
    password: string,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user

            const displayName = extractDisplayName(user.email)

            const finalUser: User = {
                displayName: displayName,
                email: user.email as string,
                photoURL: user.photoURL as string,
                id: user.uid,
            }

            updateUser(user.uid, displayName)

            return finalUser
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            setError("Password or email invalid")
            return undefined
        })
    return undefined as unknown as User
}

export const signWithEmail = async (
    email: string,
    password: string,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user

            const displayName = extractDisplayName(user.email)

            const finalUser: User = {
                displayName: displayName,
                email: user.email as string,
                photoURL: user.photoURL as string,
                id: user.uid,
            }

            updateUser(user.uid, displayName)

            return finalUser
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            setError("Password or email invalid")

            return undefined
        })

    return undefined as unknown as User
}

const extractDisplayName = (email: any): string => {
    const aroundIndex = email.indexOf("@")

    const displayName = email.substring(0, aroundIndex)

    return displayName
}
