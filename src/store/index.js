import {  configureStore } from "@reduxjs/toolkit";

// Reducers
import userReducer from "../reducers/users/userSlice";
import cartReducer from "../reducers/cart/cartSlice";
import blogReducer from "../reducers/blog/blogSlice";
import ordersReducer from "../reducers/orders/ordersSlice";
import contactReducer from "../reducers/contact/contactSlice";


export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        blog: blogReducer,
        orders: ordersReducer,
        contacts: contactReducer,
    }
});
