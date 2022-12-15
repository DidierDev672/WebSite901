import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../styles/components/ordering.scss";

const ItemOrdering = () => {
    const { ordersHeader } = useSelector(state => state.orders);
    const { orderDetails  } = useSelector(state => state.orders);
    const [ data, setData ] = useState(...ordersHeader);

    let { code_buy } = useParams();
    useEffect(() => {
        let query = data.find((item) => item.code_buy === code_buy);
        setData(query);
    }, []);
    return(
        <div className="container">
            <div className="py-5"></div>
            <div className="container">
                <div className="display-process-status">
                    <div className="item-process-status">
                        <div className="status-buy">
                        </div>
                    </div>
                    <div className="item-process-status">
                        <ul className="list-status-buy">
                            <li>En processo</li>
                            <li className="status-road">
                                <span>En camino</span>
                                <p>Tu paquete está en el último tramo del recorrido.</p>
                            </li>
                            <li>
                                Entrega
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemOrdering;