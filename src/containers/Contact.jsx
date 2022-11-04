import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/contact.scss";

const Contact = () => {
    return(
        <div className="container-fluid py-3">
            <div className="header-contact">
                <h4>Contactanos</h4>
                <span>
                    Empecemos algo grande juntos. Pongase en Contacto
                    con nosotros.
                </span>
            </div>
                <div className="row g-0 py-3">
                    <div className="col-md-6">
                        <div className="contact-touch-content">
                            <h5>Pòngase en contacto con nosotros</h5>
                            <span><FontAwesomeIcon icon={faPhone}/>  320-573-7554</span>
                        </div>
                        <div className="contact-email-contact py-3">
                            <span><FontAwesomeIcon icon={faEnvelope}/> joseange183@gmail.com</span>
                        </div>
                        <div className="contact-office-content">
                            <h5>Office<strong>Caucasia-Antioquia</strong></h5>
                            <span><FontAwesomeIcon icon={faBuilding}/> Barrio el bosque, al lado del sena</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-contact">
                            <form>
                                <div className="flex-contact">
                                    <div className="item-column-contact">
                                        <label>Nombre completo</label>
                                        <input type="text" className="field-text" placeholder="Juan perez"/>
                                    </div>
                                    <div className="item-column-contact">
                                        <label>Correo electronico</label>
                                        <input type="email" className="field-text" placeholder="ejemplo@ejemplo.com"/>
                                    </div>
                                    <div className="item-column-contact">
                                        <label>Numero telefono</label>
                                        <input type="tel" className="field-text" placeholder="000-000-0000"/>
                                    </div>
                                    <div className="item-column-contact">
                                        <label>Mensaje</label>
                                        <textarea className="field-text" placeholder="xxxxxx xxxxxx xxxxxx xxxxxx">
                                        </textarea>
                                    </div>
                                    <div className="item-column-contact py-2">
                                        <button type="button" className="btn-contact-send">
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Contact;