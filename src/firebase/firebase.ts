import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtAXqs2y8M1RCPVtaak4Xi2rXuCpJ_ATA",
    authDomain: "expense-tracker-app-c20f7.firebaseapp.com",
    projectId: "expense-tracker-app-c20f7",
    storageBucket: "expense-tracker-app-c20f7.appspot.com",
    messagingSenderId: "906533003432",
    appId: "1:906533003432:web:1c24be9942dcf699a9a29d",
    measurementId: "G-LY4BR95HK8",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()
