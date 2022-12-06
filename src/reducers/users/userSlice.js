import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    namefull: "",
    uid: ""
};


export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.namefull = action.payload.namefull;
            state.uid = action.payload.uid;
        },

        unsetUser: (state) => {
            state.email = "";
            state.namefull = "";
            state.uid = "";
        }
    },
});

export const { setUser, unsetUser } = userSlice.actions;
export default userSlice.reducer;