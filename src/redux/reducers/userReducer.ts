import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../interfaces/user"

export interface UserState {
    user: User
}

const initialState: UserState = {
    user: undefined as unknown as User,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },

        clearUserState: (state) => {
            state.user = undefined as unknown as User
        },
    },
})

export const { addUser, clearUserState } = userSlice.actions
export default userSlice.reducer
