import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext.js";
import "../styles/components/shoppingcart.scss";

const ShoppingCart = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { trolley } = state;

    const handleRemove = product => () => {
        removeFromCart(product);
    };

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = trolley.reduce(reducer, 0);
        return sum;
    };

    return(
        <div className="container-fluid py-3">
            <div className="shopping-bag">
                <div className="card-shopping-bag">
                    <br />
                    { trolley.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos...</h3> }
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="font-table-header">Nombre producto</th>
                                <th scope="col" className="font-table-header">Precio</th>
                                <th scope="col" className="font-table-header">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trolley.map((product) => (
                                <tr key={product.id}>
                                    <th className="font-table-body">{product.name_product}</th>
                                    <th className="font-table-body">${product.price}</th>
                                    <th><button type="button" className="btn-delete-shopping" onClick={handleRemove(product)}><FontAwesomeIcon  icon={faTrash}/></button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {trolley.length > 0 && (
                <div className="shopping-sidebar">
                    <h3>{`Precio Total $ ${handleSumTotal()}`}</h3>
                    <Link to={`/shopping-bag/information`}>
                        <button type="button" className="btn-continue-order">Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;