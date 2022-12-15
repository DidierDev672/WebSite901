import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/components/ordering.scss";


const Ordering = () => {
    const { ordersHeader } = useSelector(state => state.orders);
    const [ data, setData ] = useState(...ordersHeader);

    return(
        <div className="Ordering">
            <div className="content-orders">
                <h4>Tus Pedidos</h4>
                <div className="flex-orders">
                    { data.map((item) => (
                        <div className="card-orders" key={item.id}>
                            <div className="body-card-orders">
                                <h4>{item.code_buy}</h4>
                                <span>{item.namefull}</span>
                                <Link to={`${item.code_buy}`} className="btn-detail">Ver Detalle</Link>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Ordering;