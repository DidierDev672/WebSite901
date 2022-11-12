import React, { useRef,useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/databasic.scss";

const DataBasic = () => {
    const { state, addToBuyer } = useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();
    const { cart, trolley } = state;

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer  = {
            "namefull": formData.get("namefull"),
            "email": formData.get("email"),
            "address": formData.get("address"),
            "section": formData.get("section"),
            "phone": formData.get("phone")
        };

        addToBuyer(buyer);
        navigate(`/shopping-bag/payment`);
    };
    return(
        <div className="container">
            <div className="card-data-basic">
                <h4>Datos basico del usuario</h4>
                <form ref={form}>
                    <div className="flex-data-basic">
                        <div className="item-data-basic">
                            <label>Nombre completo</label>
                            <input type="text" className="field-text" id="namefull" name="namefull" placeholder="Juan perez"/>
                        </div>
                        <div className="item-data-basic">
                            <label >Correo electronico</label>
                            <input type="email" className="field-text" id="email" name="email" placeholder="ejemplo@ejemplo.com"/>
                        </div>
                        <div className="item-data-basic">
                            <label >Direccion</label>
                            <input type="text" className="field-text" id="address" name="address" placeholder="Ciudad - barrio - numero de calle"/>
                        </div>
                        <div className="item-data-basic">
                            <label >Departamento</label>
                            <input type="text" className="field-text" id="section" name="section" placeholder="xxxxxxxxxx"/>
                        </div>
                        <div className="item-data-basic">
                            <label>Numero telefono</label>
                            <input type="tel" className="field-text" id="phone" name="phone" placeholder="000-000-0000"/>
                        </div>
                        <div className="item-data-basic">
                            <button type="button" className="btn-buy" onClick={handleSubmit}>Comprar</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="Information-buttons">
                <div className="Information-back">
                    <Link to={`shopping-bag`}>
                        Regresar
                    </Link>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {trolley.map((item) => (
                    <div className="Information-item" key={item.id}>
                        <div className="Information-element">
                            <h4>{item.name_product}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataBasic;