import { db } from "../firebase"

import { updateDoc, doc } from "firebase/firestore"

export const updateUser = async (uid: string, displayName: string) => {
    const docRef = doc(db, "users", uid)

    try {
        await updateDoc(docRef, {
            "user.displayName": displayName,
        })
    } catch (error) {
        console.log(error)
    }
}
