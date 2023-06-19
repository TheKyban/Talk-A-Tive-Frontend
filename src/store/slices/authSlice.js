import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "Auth",
    initialState: {
        isAuth: false,
        user: {}
    },
    reducers: {
        authenticateUser: (state, action) => {
            const { data, success } = action.payload

            if (success) {
                state.isAuth = success
                state.user = data
            }

        },
        logoutUser: (state) => {
            state.isAuth = false
            state.user = {}
        }
    }
})


export const { authenticateUser, logoutUser } = authSlice.actions

export default authSlice.reducer