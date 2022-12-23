import React, { Fragment,useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/components/ordering.scss";


const Order = () => {
    const { ordersHeader } = useSelector(state => state.orders);
    const [ data, setData ] = useState(...ordersHeader);
    return(
        <Fragment>
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
        </Fragment>
    );
};

const Ordering = () => {
    const { ordersHeader } = useSelector(state => state.orders);

    return(
        <div className="Ordering">
            <div className="content-orders">
                { ordersHeader.length > 0 ? <Order /> : <div className="header-order"><span className="text-gradient">No tienes pedidos...</span></div>  }
            </div>
        </div>
    );
};

export default Ordering;