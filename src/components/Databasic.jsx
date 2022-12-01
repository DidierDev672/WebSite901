import React, { useRef,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AppContext from "../context/AppContext";
import "../styles/components/databasic.scss";

const DataBasic = () => {
    const { addToBuyer } = useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer  = {
            "namefull": formData.get("namefull"),
            "email": formData.get("email"),
            "address": formData.get("address"),
            "section": formData.get("section"),
            "phone": formData.get("phone"),
            "id": uuidv4()
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
                            <input type="text" className="field-text" id="namefull" name="namefull" placeholder="Nombre completo"/>
                        </div>
                        <div className="item-data-basic">
                            <input type="email" className="field-text" id="email" name="email" placeholder="Correo electronico"/>
                        </div>
                        <div className="item-data-basic">
                            <input type="text" className="field-text" id="address" name="address" placeholder="Direccion"/>
                        </div>
                        <div className="item-data-basic">
                            <input type="text" className="field-text" id="section" name="section" placeholder="Departamento"/>
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