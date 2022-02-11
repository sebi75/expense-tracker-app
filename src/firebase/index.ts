/* AUTHENTICATION */

export { createAccountWithEmail, signWithEmail } from "./auth/emailAndPassword"
export { getAuthStateHandler } from "./auth/getAuthState"
export { signOutHandler } from "./auth/signOut"
export { authWithPopup } from "./auth/googlePopup"
export { getToken } from "./auth/getToken"

/* DATABASE */

export { getUserData } from "./db/getUserData"
export { addTransactionToDb } from "./db/addTransaction"
export { updateUser } from "./db/updateUser"
export { deleteTransactionFromDb } from "./db/deleteTransactionFromDb"
