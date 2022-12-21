import React, { useRef } from 'react';
import API from "../api"
import "../styles/components/pqrs.scss";

const Pqrs = () => {
    const form = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(form.current);

        const pqrs = {
            "namefull": formData.get("namefull"),
            "email": formData.get("email"),
            "phone": formData.get("phone"),
            "petition": formData.get("petition"),
            "description": formData.get("description")
        };

        if(pqrs.namefull !== "" && pqrs.email !== "" && pqrs.phone !== "" && pqrs.petition !== "" && pqrs.description !== ""){
            API.savePqrs({
                namefull: pqrs.namefull,
                email: pqrs.email,
                phone: pqrs.phone,
                petition: pqrs.petition,
                description: pqrs.description
            })
            .then(() => {
                alert("Los datos se han almacenado con exito");
                pqrs.namefull = "";
            })
            .catch((error) => {
                console.error(error);
            })
        }else{
            alert("Debe llenar todos los campos");
        }
    };

    return(
        <div className="container">
            <div className="py-5"></div>
            <div className="card-pqrs">
                <div className="content-header-pqrs">
                    <span className="text-gradient">PQR'S</span>
                    <h4>Peticiones Quejas O Reclamos </h4>
                    <p>
                        En playapez los clientes son nuestra razón de ser, contactanos para
                        darte la mejor atención. Tu solicitud será atendida en el mejor tiempo
                        posible.
                    </p>
                </div>
                <form ref={form}>
                    <div className="grid-pqrs">
                        <div className="item-pqrs">
                            <input type="text" className="field-text" name="namefull" placeholder="Nombre completo"/>
                        </div>
                        <div className="item-pqrs">
                            <input type="email" className="field-text" name="email" placeholder="Correo electronico"/>
                        </div>
                        <div className="item-pqrs">
                            <input type="tel" className="field-text" name="phone" placeholder="Telefono"/>
                        </div>
                        <div className="item-pqrs">
                            <input type="text" className="field-text" name="petition" placeholder="Peticion" />
                        </div>
                        <div className="item-pqrs">
                            <textarea className="field-text" name="description" placeholder="Por favor escriba su asunto"></textarea>
                        </div>
                    </div>
                    <div className="item-pqrs py-3">
                        <button type="button" className="btn-pqrs" onClick={handleSubmit}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Pqrs;