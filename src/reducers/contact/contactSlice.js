import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contact: [],
    pqrs:[]
};

export const contactSlice = createSlice({
    name: "contact",
    initialState: initialState,
    reducers:{
        addContact: (state, action) => {
            state.contact = [...state.contact, action.payload];
        }
    }
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;