import { doc, getDoc, setDoc } from "firebase/firestore"
import { Transaction } from "../../interfaces/transactions"

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

export const getUserData = async (uid: any) => {
    const docRef = doc(db, "users", uid)

    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        const docData = docSnap.data()

        const transactions = docData.transactions.reverse()

        /* fill state with users transactions */
        return transactions
    } else {
        const newDoc = await setDoc(doc(db, "users", uid), defaultUsersData)
        return defaultUsersData.transactions as unknown as Transaction[]
    }
}
