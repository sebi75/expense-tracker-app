import { db } from "../firebase"

import { updateDoc, doc, arrayUnion } from "firebase/firestore"

import { Transaction } from "../../interfaces/transactions"

export const addTransactionToDb = async (
    uid: string,
    transaction: Transaction
) => {
    const docRef = doc(db, "users", uid)

    try {
        await updateDoc(docRef, {
            transactions: arrayUnion(transaction),
        })
    } catch (error) {
        console.log(error)
    }
}
