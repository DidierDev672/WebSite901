import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import { toast, ToastContainer } from "react-toastify";
import API from "../../api/index";
import { toNewContactEntry } from "../../api/utils.ts";
import "../../styles/components/contact.scss";

const FormContact = () => {
    const namefullRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const matterRef = useRef(null);
    const messageRef = useRef(null);

    const handleSaveContact = () => {
        let date = new Date();
        const dataContact = {
            namefull: namefullRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            matter: matterRef.current.value,
            message: messageRef.current.value,
        };
        console.log(dataContact);
        if(dataContact.namefull !== "" && dataContact.phone !== ""
        && dataContact.matter !== "" && dataContact.message !== ""){
            const contact = toNewContactEntry(dataContact);
            API.saveContact(contact)
            .then(() => {
                toast("En breve estaremos en contacto con usted, gracias por confiar con nosotros");
                namefullRef.current.value = "";
                phoneRef.current.value = "";
                emailRef.current.value = "";
                matterRef.current.value = "";
                messageRef.current.value = "";
            })
            .catch((error) => {
                console.error(error);
            });
        }else{
            toast("Debe llenar todos los campos, por favor");
        }
    };

    return(
        <Container>
        <div className="py-3"></div>
        <div className="content-contact">
            <h4>Contacta con nosotros</h4>
            <p>
                Envianos tu consulta rellando todos los campos que te indicamos a contuacion.
                Nos pondremos en contacto contigo en breve. Gracias por confiar en PlayaPez.
            </p>
            <div className="flex-row-contact">
                <div className="form-group-contact">
                    <label>Nombre Completo</label>
                    <input type="name" className="field-text" ref={namefullRef} placeholder="Nombre completo"/>
                </div>
                <div className="form-group-contact">
                    <label>Telefono</label>
                    <input type="tel" className="field-text" ref={phoneRef} placeholder="Telefono"/>
                </div>
                <div className="form-group-contact">
                    <label>Correo electronico</label>
                    <input type="email" className="field-text" ref={emailRef} placeholder="nombre@ejemplo.com"/>
                </div>
                <div className="form-group-contact">
                    <label>Asunto</label>
                    <input type="text" className="field-text" ref={matterRef} placeholder="Asunto"/>
                </div>
                <div className="form-group-contact">
                    <label>Mensaje</label>
                    <textarea className="field-text" ref={messageRef} placeholder="Mensaje"></textarea>
                </div>
            </div>
            <div className="py-3">
                <button type="button" className="btn-send" onClick={handleSaveContact}>Enviar</button>
            </div>
            <ToastContainer />
        </div>
        </Container>
    );
};

export default FormContact;