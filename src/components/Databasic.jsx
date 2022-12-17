import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNewPurchaser } from "../reducers/cart/cartSlice";
import "../styles/components/databasic.scss";

const DataBasic = () => {
    const form = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer  = {
            "namefull": formData.get("namefull"),
            "email": formData.get("email"),
            "country": formData.get("country"),
            "city": formData.get("city"),
            "section": formData.get("section"),
            "address": formData.get("address"),
            "phone": formData.get("phone"),
            "id": uuidv4(),
            "uid": "Anonymous"
        };

        dispatch(addNewPurchaser(buyer));
        navigate(`/shopping-bag/payment`);
    };
    return(
        <div className="container">
            <div className="card-data-basic">
                <h4>Datos basico del usuario</h4>
                <form ref={form}>
                    <div className="flex-data-basic">
                        <div className="item-data-basic">
                            <input type="text" className="field-text" id="namefull" name="namefull" placeholder="Nombre completo"/>
                        </div>
                        <div className="item-data-basic">
                            <input type="email" className="field-text" id="email" name="email" placeholder="Correo electronico"/>
                        </div>
                        <div className="item-data-basic">
                            <input type="text" className="field-text" name="country" placeholder="Pais"/>
                        </div>
                        <div className="item-data-basic">
                            <input type="text" className="field-text" name="city" placeholder="Ciudad"/>
                        </div>
                        <div className="item-data-basic">
                            <input type="text" className="field-text" id="section" name="section" placeholder="Departamento"/>
                        </div>
                        <div className="item-data-basic">
                            <input type="text" className="field-text" id="address" name="address" placeholder="Direccion"/>
                        </div>
                        <div className="item-data-basic">
                            <input type="tel" className="field-text" id="phone" name="phone" placeholder="Telefono"/>
                        </div>
                        <div className="item-data-basic">
                            <button type="button" className="btn-buy" onClick={handleSubmit}>Comprar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DataBasic;