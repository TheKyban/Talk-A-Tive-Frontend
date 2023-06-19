import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "User",
    initialState: {
        selectedUser: null
    },
    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = action.payload
        },
        unSelectUser: (state) => {
            state.selectedUser = null
        },

    }
})

export const { selectUser, unSelectUser } = userSlice.actions
export default userSlice.reducer