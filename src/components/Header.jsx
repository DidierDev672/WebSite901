import React from 'react';
import "../styles/components/headers.scss";

const Header = () => {
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href={`/`}>PlayaPez</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse list-title" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="navbar-item">
                                <a className="nav-link active" aria-current="page" href={`/`}>Home</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link active" aria-current="page" href={`products`}>Productos</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link active" aria-current="page" href={`know`}>Conocenos</a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link active" aria-current="page" href={`contact`}>Contactanos</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav">
                                <li className="navbar-item">
                                    <a className="nav-link active" aria-current="page" href={`signin`}>Iniciar Sesion</a>
                                </li>
                                <li className="navbar-item">
                                    <a className="nav-link active" aria-current="page" href={`signup`}>Registrar</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;