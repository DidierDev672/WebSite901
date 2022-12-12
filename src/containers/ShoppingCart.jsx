import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import {  removeProductFromCart,  AddQuantityProductList, DecreaseQuantityProductList } from "../reducers/cart/cartSlice";
import { currency } from "../currency";
import "../styles/components/shoppingcart.scss";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const { productsList } = useSelector(state => state.cart);

    const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity;
        const sum = productsList.reduce(reducer, 0);
        return sum;
    };

    const handleIncreaseQuantity = (productId) => dispatch(AddQuantityProductList(productId));

    const handleDecreaseQuantity = (productId) => dispatch(DecreaseQuantityProductList(productId));

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
                        <th scope="col">Cantidad</th>
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
                                <th scope="row">{currency(product.price)}</th>
                                <th scope="row">
                                    <div className="flex-th-button">
                                    <button type="type" className="btn-plus-quantity" onClick={() => handleIncreaseQuantity(product.id)}><FontAwesomeIcon icon={faPlus} className="font-icon"/></button>
                                        <div className="header-quantity"><span>{product.quantity}</span></div>
                                    <button type="button" className="btn-miss" onClick={() => handleDecreaseQuantity(product.id)}><FontAwesomeIcon icon={faMinus} className="font-icon"/></button>
                                    </div>
                                </th>
                                <th scope="row"><button className="btn-delete-cart" onClick={() => handleRemoveProduct(product.id)}>Eliminar</button></th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="py-4">
                {productsList.length > 0 && (
                    <div className="content-total-orders">
                        <h4>{`Total pedido: ${currency(handleSumTotal())}`}</h4>
                        <Link to={`/shopping-bag/information`} className="btn-to-end">Continuar comprar</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;