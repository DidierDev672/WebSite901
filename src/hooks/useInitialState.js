import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            trolley: [...state.trolley, payload],
        });
    };

    const removeFromCart = payload => {
        setState({
            ...state,
            trolley: state.trolley.filter(items => items.id !== payload.id),
        });
    };

    const addToBuyer = payload => {
        setState({
            ...state,
            cart: [ ...state.buyer, payload]
        });
    };

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        });
    };

    const addNewUser = payload => {
        setState({
            ...state,
            user: [ ...state.user, payload ]
        });
    };


    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        addNewUser,
        state
    };
};

export default useInitialState;