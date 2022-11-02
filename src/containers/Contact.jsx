import React from 'react';
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
            <div className="flex-contact-content py-3">
                <div className="item-contact-content">
                    <div className="contact-touch-content">
                        <h5>Pòngase en contacto con nosotros</h5>
                        <strong>Telefono</strong>
                        <span>320-573-7554</span>
                    </div>
                    <div className="contact-email-contact">
                        <strong>Email</strong>
                        <span>joseangel83@gmail.com</span>
                    </div>
                    <div className="contact-office-content">
                        <h5>Oficina <strong>Caucasia-Antioquia</strong></h5>
                        <span>Barrio el bosque, al lado del sena</span>
                    </div>
                </div>
                <div className="item-contact-content">
                    <div className="card-contact">
                        <form>
                            <div className="column-contact">
                                <div className="item-column-contact">
                                    <label>Nombre completo</label>
                                    <input type="text" className="field-text"
                                    placeholder="Juan perez"/>
                                </div>
                                <div className="item-column-contact">
                                    <label>Email</label>
                                    <input type="email" className="field-text"
                                    placeholder="ejemplo@ejemplo.com"/>
                                </div>
                                <div className="item-column-contact">
                                    <label>Numero telefono</label>
                                    <input type="tel" className="field-text"
                                    placeholder="000-000-0000"/>
                                </div>
                                <div className="item-column-contact">
                                    <label>Mensaje</label>
                                    <textarea className="field-text"></textarea>
                                </div>
                                <div className="item-column-contact">
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