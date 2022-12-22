import React from "react";
import "../../styles/components/footer.scss";

const FooterRedes = () => {
    return(
        <div className="container-fluid">
            <nav className="navbar-footer-redes">
                <ul className="list-redes">
                    <li><a className="redes-playapez" href={`https://www.facebook.com/playapez`}><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a className="redes-playapez" href={`https://www.instagram.com/playapez/`}><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a className="redes-playapez" href={`https://twitter.com/PlayaPezSAS`}><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default FooterRedes;