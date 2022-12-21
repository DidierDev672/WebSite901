import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  Timestamp } from "firebase/firestore";
import { v4 as uuidv4  } from "uuid";
import voucher_codes from "voucher-code-generator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faHomeUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import API from "../api";
import { currency } from "../currency";
import { statusBuy } from "../reducers/cart/cartSlice";
import "../styles/components/payment.scss";

const Payment = () => {
    const { productsList,purchaser,totalCount } = useSelector(state => state.cart);
    const {  uid } = useSelector(state => state.user);
    const [ buyer, setBuyer ] = useState(...purchaser);
    const [ products, setProducts ] = useState(productsList);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSumTotal = () => {
        const reducer = ( accumulator, currentValue ) => accumulator + currentValue.price * currentValue.quantity;
        const sum = productsList.reduce(reducer, 0);
        return sum;
    };

    const handlePaymentSuccess = () => {
        const code_buy = voucher_codes.generate({
            length: 4,
            count: 1
        });
        API.headerBuy({
            code_buy: code_buy,
            date_buy: Timestamp.fromDate(new Date()),
            namefull:  buyer.namefull,
            phone:  buyer.phone,
            address:  buyer.address,
            section:  buyer.section,
            email:  buyer.email,
            uid: buyer.uid,
            status_buy: false,
            status_trip: false,
            status_payment: false,
        })
        .then((result) => {
            dispatch(statusBuy({ idDocument: result,status_buy: false }));
        });

        API.detailBuy({
            code_buy: code_buy,
            uid: buyer.uid,
            product:products
        })
        .then(() => {
            navigate(`/shopping-bag/success`);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const handleTotalUnit = (quantity, price) => {
        const unit = quantity * price;
        return unit;
    };

    return(
        <div className="container py-3">
            <div className="py-2"></div>
            <div className="Payment-contenct">
                <h3>Resumen del pedido</h3>
                <div className="mb-3">
                    <div className="row g-0">
                        <div className="col-md-3">
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
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Total Unitario</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {productsList.map((item) => (
                                        <tr key={item.id} className="font-tbody">
                                            <th>{item.name_product}</th>
                                            <th>{item.category}</th>
                                            <th>{currency(item.price)}</th>
                                            <th>{item.quantity}</th>
                                            <th>{currency(handleTotalUnit(item.quantity, item.price))}</th>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
                <div className="Payment-item">
                    <div className="contant-payment-total">
                        <h4>{`Total pedido: ${currency(handleSumTotal())}`}</h4>
                    </div>
                <button type="button" className="btn-payment" onClick={handlePaymentSuccess}> Confirmar compra </button>
            </div>
            </div>
        </div>
    );
};

export default Payment;