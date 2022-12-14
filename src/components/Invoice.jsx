import React, { useState } from 'react';
import { useSelector } from "react-redux";
import "../styles/components/invoice.scss";

const Invoice = () => {
    const {  ordersHeader } = useSelector(state => state.orders);
    const [ order, setOrder ] = useState(...ordersHeader);
    return(
        <div className="Invoice">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Codigo Compra</th>
                        <th scope="col">Nombre Comprador</th>
                        <th scope="col">Estado Compra</th>
                        <th scope="col">Ver Factura</th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.code_buy}</th>
                            <th scope="row">{item.namefull}</th>
                            <th scope="row">{ item.status_buy === false ? <div className="header-status-buy">Proceso</div> : <div className="status-trip-buy">Viajando</div> }</th>
                            <th scope="row"><button type="button" className="btn-incoice"><i className="fa-solid fa-receipt"></i></button></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Invoice;