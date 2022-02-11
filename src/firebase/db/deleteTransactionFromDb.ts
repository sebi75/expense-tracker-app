import { doc, updateDoc } from "firebase/firestore"
import { Transaction } from "../../interfaces/transactions"
import { db } from "../firebase"

export const deleteTransactionFromDb = async (
    uid: string,
    transactionId: string,
    transactions: Transaction[]
) => {
    /* users document reference */
    const docRef = doc(db, "users", uid)

    const newTransactions = transactions.filter((t) => t.id != transactionId)

    try {
        await updateDoc(docRef, {
            transactions: newTransactions,
        })
    } catch (error) {
        throw new Error()
    }
}
