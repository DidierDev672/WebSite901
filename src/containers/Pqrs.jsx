import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import { toast, ToastContainer } from "react-toastify";
import API from "../api";
import { toNewPQRSEntry } from "../api/utils.ts";
import "../styles/components/pqrs.scss";

const Pqrs = () => {
    const namefullRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const petitonRef = useRef(null);
    const descriptionRef = useRef(null);

    const handlePQRS = () => {
        const dataPQRS = {
            namefull: namefullRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            petition: petitonRef.current.value,
            description: descriptionRef.current.value
        };

        if(dataPQRS.namefull !== "" && dataPQRS.email !== ""
        && dataPQRS.phone !== "" && dataPQRS.petition !== "" && dataPQRS.description){
            const PQRS = toNewPQRSEntry(dataPQRS);
            API.savePQRS(PQRS)
            .then(() => {
                toast("En breve estaremos en contacto con usted, gracias por confiar en PlayaPez");
                namefullRef.current.value = "";
                emailRef.current.value = "";
                phoneRef.current.value = "";
                petitonRef.current.value = "";
                descriptionRef.current.value = "";
            })
            .catch((error) => {
                console.error(error);
                toast("Por favor revisar la informacion ingresada, Tenemos problemas para almacenar la informacion");
            });
        }else{
            toast("Debe llenar todos los campos");
        }
    };
    return(
        <Container>
            <div className="py-5"></div>
            <div className="content-pqrs">
            <h4>Peticiones quejas o reclamos</h4>
            <p>
                En playapez los clientes son nuestra razón de ser, contactanos para
                darte la mejor atención. Tu solicitud será atendida en el mejor tiempo
                posible.
            </p>
            <h5>Informacion personal</h5>
            <hr />
                <div className="flex-pqrs">
                    <div className="form-group-pqrs">
                        <label>Nombre completo</label>
                        <input type="text" className="field-text" ref={namefullRef} placeholder="Nombre completo"/>
                    </div>
                    <div className="form-group-pqrs">
                        <label>Correo electronico</label>
                        <input type="email" className="field-text" ref={emailRef} placeholder="Nombre@nombre.com"/>
                    </div>
                    <div className="form-group-pqrs">
                        <label>Telefono</label>
                        <input type="tel" className="field-text" ref={phoneRef} placeholder="Telefono"/>
                    </div>
                    <div className="form-group-pqrs">
                        <label>Peticion</label>
                        <input type="text" className="field-text" ref={petitonRef} placeholder="Peticion"/>
                    </div>
                    <div className="form-group-pqrs">
                        <label>Descripcion</label>
                        <textarea className="field-text" ref={descriptionRef} placeholder="Por favor escriba su asunto"></textarea>
                    </div>
                    <button type="button" className="btn-send" onClick={handlePQRS}>Enviar</button>
                </div>
                <ToastContainer />
            </div>
        </Container>
    );
};

export default Pqrs;