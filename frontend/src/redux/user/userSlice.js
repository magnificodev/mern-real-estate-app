import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userSignedIn: (state, action) => {
            state.currentUser = action.payload;
        },
        userSignedOut: (state) => {
            state.currentUser = null;
        },
    },
});

export const { userSignedIn, userSignedOut } = userSlice.actions;
export default userSlice.reducer;
