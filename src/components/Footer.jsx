import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/footer.scss";

const Footer = () => {
    return(
        <div className="Footer">
            <footer>
                <h5>Recibe las novedades de PlayaPez en tu correo electronico</h5>
                <div className="footer-news">
                    <input type="email" className="field-text size-text-footer"  name="email" placeholder="Correo electronico"/>
                    <button type="button" className="btn-up-footer">Apuntarme</button>
                </div>
                <div className="content-footer py-3">
                    <h3>PlayaPez - Piscicola</h3>
                    <a href="https://moonlit-faun-51413c.netlify.app/">www.playapez.com</a>
                    <h5>Super Intendencia de Industria y Comercio</h5>
                    <a href="https://www.sic.gov.co">www.sic.gov.co</a>
                </div>
                <div className="column-footer">
                    <span>INFORMACION LEGAL</span>
                    <ul>
                        <li className="font-footer"> <i class="fa-solid fa-phone"></i> (+57) 320-573-7554</li>
                        <li className="font-footer"><i class="fa-solid fa-city"></i> Ayapel Cordoba</li>
                        <li><i class="fa-solid fa-clock"></i>
                            <span className="font-footer">
                                Horario de atencion: Lunes a Viernes de
                                8:30 AM a 6:00 PM, Sabados de 9:00 AM a 5:00 PM.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="list-footer">
                    <nav>
                        <ul className="list-item-footer">
                            <li><Link to={`home`} className="footer-link">Home</Link></li>
                            <li><Link to={`products`} className="footer-link">Productos</Link></li>
                            <li><Link to={`solution`} className="footer-link">Solucion</Link></li>
                            <li><Link to={`know`} className="footer-link">Acerca</Link></li>
                            <li><Link to={`contact`} className="footer-link">Contacto</Link></li>
                            <li><Link to={`pqrs`} className="footer-link">Pqrs</Link></li>
                            <li><Link to={`sign-in`} className="footer-link">Sign In</Link></li>
                            <li><Link to={`sign-up`} className="footer-link">Sign Up</Link></li>
                            <li><Link to={`tilapia`} className="footer-link">Tilapia</Link></li>
                            <li><Link to={`questions`} className="footer-link">Preguntas Frecuentes</Link></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;