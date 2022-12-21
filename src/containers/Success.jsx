import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonsPaypal from '../components/handling/ButtonsPaypal';

import "../styles/components/success.scss";

const Imgsuccess = new URL("../assets/Person paying with smart watch Illustration in PNG, SVG_files/fe63b5e6-401f-4514-a1f9-88bf76013c25.png", import.meta.url).href;

const Success = () => {
    const { productsList } = useSelector(state => state.cart);
    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity;
        const sum = productsList.reduce(reducer, 0);
        return sum;
    };
    return(
        <div className="container py-5">
            <div className="py-4"></div>
            <img src={Imgsuccess} className="img-fluid rounded float-start"/>
            <div className="card-success">
                <h4 className="text-gradient">Pago exitoso</h4>
                <p>Dale a pagar al buton de <strong>Paypal</strong> para terminar la compra.</p>
                <p>Te esperamos en la seccion de proceso de envios.</p>
                <div className='item-success'>
                    <Link className="btn-profile" to={`/profile-user`}>Ver perfil</Link>
                </div>
                <div className="flex-success">
                    <ButtonsPaypal handleSumTotal={handleSumTotal} />
                </div>
            </div>
        </div>
    );
};

export default Success;