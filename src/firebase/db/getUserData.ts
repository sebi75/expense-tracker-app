import { doc, getDoc, setDoc } from "firebase/firestore"

import { db } from "../firebase"

const defaultUsersData = {
    transactions: [],
    user: {
        displayName: "",
        email: "",
        photoURL: "",
        id: "",
    },
}

export const getUserData = async (uid: any, populateFromDb: any) => {
    const docRef = doc(db, "users", uid)

    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        const docData = docSnap.data()

        const transactions = docData.transactions.reverse()

        /* fill state with users transactions */
        populateFromDb(transactions)
    } else {
        const newDoc = await setDoc(doc(db, "users", uid), defaultUsersData)
    }
}
