import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  removeProductFromCart } from "../reducers/cart/cartSlice";
import "../styles/components/shoppingcart.scss";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const { productsList } = useSelector(state => state.cart);

    const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = productsList.reduce(reducer, 0);
        return sum;
    };

    return(
        <div className="container">
            <div className="py-5"></div>
            <h4 className="title-shopping-cart">Nuestro pedido</h4>
            <table className="table">
                <thead>
                    <tr className='table-header-cart'>
                        <th scope="col">ID</th>
                        <th scope="col">Product</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map((product) => {
                        return (
                            <tr key={product.id} className='table-body-cart'>
                                <th scope="row">{product.id}</th>
                                <th scope="row">{product.name_product}</th>
                                <th scope="row">{product.category}</th>
                                <th scope="row">${product.price}</th>
                                <th scope="row"><button className="btn-delete-cart" onClick={() => handleRemoveProduct(product.id)}>Eliminar</button></th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="py-4">
                {productsList.length > 0 && (
                    <div className="content-total-orders">
                        <h4>{`Total pedido:$ ${handleSumTotal()}`}</h4>
                        <Link to={`/shopping-bag/information`} className="btn-to-end">Continuar comprar</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;