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
                    <span>PQR'S</span>
                    <h4>Peticiones Quejas O Reclamos </h4>
                    <p>
                        Para la comercializadora internacional C.I Piscicola Ayapel-Cordoba su opinión es importante. Con el fin de ofrecerle un servicio mejor cada
                        día, le solicitamos que rellene el siguiente formulario y presente su petición, queja o reclamo. Nuestro departamento de PQRS se pondrá en
                        contacto con usted lo antes posible. Gracias por confiar en nosotros.
                    </p>
                </div>
                <form ref={form}>
                    <div className="grid-pqrs">
                        <div className="item-pqrs">
                            <input type="text" className="text-field" name="namefull" placeholder="Nombre completo"/>
                        </div>
                        <div className="item-pqrs">
                            <input type="email" className="text-field" name="email" placeholder="Correo electronico"/>
                        </div>
                        <div className="item-pqrs">
                            <input type="tel" className="text-field" name="phone" placeholder="Telefono"/>
                        </div>
                        <div className="item-pqrs">
                            <input type="text" className="text-field" name="petition" placeholder="Peticion" />
                        </div>
                        <div className="item-pqrs">
                            <textarea className="text-field" name="description" placeholder="Por favor escriba su asunto"></textarea>
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