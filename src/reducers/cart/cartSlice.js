import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    productsList: [],
    products: [],
    purchaser: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        addProductToCart: (state, action) => {
            state.productsList = [ ...state.productsList, action.payload ];
            state.totalCount += 1;
        },
        removeProductFromCart:(state, action) => {
            const productId = action.payload;
            state.totalCount -= 1;
            state.productsList = state.productsList.filter(product => product.id !== productId);
        },
        getAllProducts: (state, action) => {
            state.products = [ ...state.products, action.payload ]
        },
        addNewPurchaser: (state, action) => {
            state.purchaser = [ ...state.purchaser, action.payload ]
        },

        clearBag: (state, action) => {
            state.productsList = [];
            state.totalCount = 0;
        }
    },
});

export const { addProductToCart, getAllProducts,  removeProductFromCart, addNewPurchaser, clearBag } = cartSlice.actions;
export default cartSlice.reducer;