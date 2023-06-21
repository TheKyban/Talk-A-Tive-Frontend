import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "User",
    initialState: {
        selectedUser: null,
        allChats: []
    },
    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = action.payload
        },
        unSelectUser: (state) => {
            state.selectedUser = null
        },
        
        allChats: (state, action) => {
            state.allChats = action.payload
        },

        appendToAllChats: (state, action) => {
            state.allChats.push(action.payload)
        },
        removeAllChats: (state) => {
            state.allChats = []
        }
    }
})

export const { selectUser, unSelectUser, allChats, appendToAllChats, removeAllChats } = userSlice.actions
export default userSlice.reducer