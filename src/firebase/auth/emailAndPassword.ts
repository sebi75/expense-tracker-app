import { auth } from "../firebase"

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"

import { updateUser } from "../"

export const createAccountWithEmail = async (
    email: string,
    password: string,
    addUser: any,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user

            const displayName = extractDisplayName(user.email)

            const finalUser = {
                displayName: displayName,
                email: user.email,
                photoURL: user.photoURL,
                id: user.uid,
            }

            updateUser(user.uid, displayName)

            addUser(finalUser)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            setError("Password or email invalid")
        })
}

export const signWithEmail = async (
    email: string,
    password: string,
    addUser: any,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user

            const displayName = extractDisplayName(user.email)

            const finalUser = {
                displayName: displayName,
                email: user.email,
                photoURL: user.photoURL,
                id: user.uid,
            }

            updateUser(user.uid, displayName)

            addUser(finalUser)
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            setError("Password or email invalid")
        })
}

const extractDisplayName = (email: any): string => {
    const aroundIndex = email.indexOf("@")

    const displayName = email.substring(0, aroundIndex)

    return displayName
}
