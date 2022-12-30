import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    id: "",
    namefull: "",
    phone: "",
    country: "",
    city: "",
    section: "",
    address: "",
    uid: ""
};


export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.namefull = action.payload.namefull;
            state.id = action.payload.id;
            state.phone = action.payload.phone;
            state.country = action.payload.country;
            state.city = action.payload.city;
            state.section = action.payload.section;
            state.address = action.payload.address;
            state.uid = action.payload.uid;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;