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
    },
});

export const { userSignedIn } = userSlice.actions;
export default userSlice.reducer;
