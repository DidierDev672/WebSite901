import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ordersHeader: [],
    orderDetails: []
};

export const ordersSlice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers:{
        addOrdersHeader: (state, action) => {
            state.ordersHeader =  [ ...state.orderDetails, action.payload ];
        },

        addOrdersDetail: (state, action) => {
            state.orderDetails =  [ ...state.orderDetails, action.payload ];
        }
    }
});

export const { addOrdersHeader, addOrdersDetail } = ordersSlice.actions;
export default ordersSlice.reducer;