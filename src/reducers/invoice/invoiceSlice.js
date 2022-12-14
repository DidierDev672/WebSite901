import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    supplier: [],
    productList: [],
    totalCount: 0
};

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState: initialState,
    reducers:{
        addProductToInvoice: (state, action) => {
            state.productList = [ ...state.productList, action.payload ]
        },

        addSupplierToInvoice: (state, action) => {
            state.supplier = [ ...state.supplier, action.payload ]
        },

        addTotalItemsProduct: (state, action) => {
            state.totalCount = action.payload;
        }
    }
});

export const { addProductToInvoice, addSupplierToInvoice, addTotalItemsProduct } = invoiceSlice.actions;
export default invoiceSlice.reducer;