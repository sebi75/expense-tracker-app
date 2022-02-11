import { db } from "../firebase"
import {
    collection,
    updateDoc,
    addDoc,
    getDocs,
    doc,
    getDoc,
    setDoc,
    arrayUnion,
} from "firebase/firestore"

export const addDocF = async () => {
    /* try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815,
        })
        console.log("Document written with ID: ", docRef.id)
    } catch (e) {
        console.error("Error adding document: ", e)
    } */

    const dbCollection = collection(db, "users")

    const querySnapshot = await getDocs(dbCollection)

    console.log(querySnapshot)

    querySnapshot.forEach((doc) => {
        const userData = doc.data()

        console.log(userData.user)
    })
}
