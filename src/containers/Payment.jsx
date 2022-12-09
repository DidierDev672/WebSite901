import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  Timestamp } from "firebase/firestore";
import { v4 as uuidv4  } from "uuid";
import {  PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faHomeUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { clearBag } from "../reducers/cart/cartSlice";
import API from "../api";
import "../styles/components/payment.scss";

const Payment = () => {
    const { productsList,purchaser } = useSelector(state => state.cart);
    const [ buyer, setBuyer ] = useState(...purchaser);
    const [ products, setProducts ] = useState(productsList);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialOptions = {
        "client-id": "test",
        currency: "USD",
        intent: "capture",
        // "data-client-token": "access_token$sandbox$cjhs4p6dwtzzd3sg$1171074dacd301535476ff397708f5fe"
    };

    // const handlePaymentSuccess = (data) => {
    //     if(data.status === "COMPLETED"){
    //         const newOrder = {
    //             buyer,
    //             product: cart,
    //             payment: data
    //         };

    //         addNweOrder(newOrder);
    //         navigate(`/shopping-bag/success`);
    //     }
    // };

    const handlePaymentSuccess = () => {
        const code_buy = uuidv4();
        API.headerBuy({
            code_buy: code_buy,
            date_buy: Timestamp.fromDate(new Date()),
            namefull:  buyer.namefull,
            phone:  buyer.phone,
            address:  buyer.address,
            section:  buyer.section,
            email:  buyer.email,
            status_buy: false,
            status_trip: false,
        });

        API.detailBuy({
            code_buy: code_buy,
            product:products
        })
        .then(() => {
            dispatch(clearBag());
            navigate(`/shopping-bag/success`);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return(
        <div className="container py-3">
            <div className="py-4"></div>
            <div className="Payment-contenct">
                <h3>Resumen del pedido</h3>
                <div className="mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            {purchaser.map((item) => (
                                <div className="Payment-item" key={item.id}>
                                    <div className="Payment-element">
                                        <span><FontAwesomeIcon icon={faPerson}/> {item.namefull}</span>
                                        <span><FontAwesomeIcon icon={faAt}/> {item.email}</span>
                                        <span><FontAwesomeIcon icon={faPhone}/> {item.phone}</span>
                                        <span><FontAwesomeIcon icon={faEarthAmericas}/> {item.country}</span>
                                        <span><FontAwesomeIcon icon={faCity}/> {item.city}</span>
                                        <span><FontAwesomeIcon icon={faHomeUser} /> {item.address} / {item.section}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-8">
                                <table className="table">
                                    <thead>
                                        <tr className="font-table">
                                            <th scope="col">Nombre producto</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Precio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {productsList.map((item) => (
                                        <tr key={item.id} className="font-tbody">
                                            <th>{item.name_product}</th>
                                            <th>{item.category}</th>
                                            <th>$ {item.price}</th>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
                <div className="Payment-item py-3">
                {/* <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons onClick={handlePaymentSuccess}/>
                </PayPalScriptProvider> */}
                <button type="button" onClick={handlePaymentSuccess}> Comprar </button>
            </div>
            </div>
        </div>
    );
};

export default Payment;