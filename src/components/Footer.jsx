import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/footer.scss";

const Footer = () => {
    return(
        <div className="Footer">
            <footer>
                <h5>Recibe las novedades de PlayaPez en tu correo electronico</h5>
                <div className="footer-news">
                    <input type="email" className="field-text" name="email" placeholder="Correo electronico"/>
                    <button type="button" className="btn-up-footer">Apuntarme</button>
                </div>
            </footer>
        </div>
    );
};

export default Footer;