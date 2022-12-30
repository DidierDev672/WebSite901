import React, { useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import AppContext from "../../context/AppContext.js";
import API from "../../api";
import "../../styles/components/contact.scss";

const FormContact = () => {
    const { addNewPeople } = useContext(AppContext);
    const { uid } = useSelector(state => state.user);
    const form = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(form.current);

        const peoples = {
            "id": uuidv4(),
            "namefull": formData.get("namefull"),
            "email": formData.get("email"),
            "phone": formData.get("phone"),
            "matter": formData.get("matter"),
            "message": formData.get("message")
        };

        if(peoples.namefull !== "" && peoples.email !== "" && peoples.phone !== "" && peoples.matter !== "" && peoples.message !== ""){
            addNewPeople(peoples);
            API.saveContact({
                id: peoples.id,
                namefull: peoples.namefull,
                email:peoples.email,
                phone:peoples.phone,
                matter: peoples.matter,
                message: peoples.message,
                uid: uid
            });
            alert("Se la informacion de enviado con exito!", peoples.id);
        }else{
            alert("Debe llenar todos los datos!");
        }
    };

    return(
        <div className="container-fluid py-5">
            <div className="card-contact">
            <div className="content-paragraph">
                    <h4 className="text-gradient">Contactanos con nosotros</h4>
                    <p>
                        Envianos tu consulta rellenando todos los campos que te indicamos a
                        continuación. Nos pondremos en contacto contigo en breve. Gracias
                        por confiar en Playapez.
                    </p>
                </div>
                <div className="content-header">
                    <h5>Dudas o inquietudes</h5>
                </div>
                <form className="grid-contact" ref={form}>
                    <div className="item-contact">
                        <input type="text" name="namefull" className="field-text" placeholder="Nombre completo"/>
                    </div>
                    <div className="item-contact">
                        <input type="email" name="email" className="field-text" placeholder="Correo electronico"/>
                    </div>
                    <div className="item-contact">
                        <input type="tel" name="phone" className="field-text" placeholder="Telefono"/>
                    </div>
                    <div className="item-contact">
                        <input type="text" name="matter" className="field-text" placeholder="Asunto"/>
                    </div>
                    <div className="item-contact py-3">
                        <textarea name="message" className="field-text" placeholder="Mensaje"></textarea>
                    </div>
                </form>
                <div className="item-contact">
                    <button type="button" className="btn-contact" onClick={handleSubmit}>Enviar</button>
                </div>
            </div>
        </div>
    );
};

export default FormContact;