import React, { useContext } from 'react';
import { Outlet,Link } from "react-router-dom";
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../context/AppContext.js";
import "../styles/components/headers.scss";

const Header = () => {
    const { state } = useContext(AppContext);
    const { trolley } = state;
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={`/`}>PlayaPez</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse list-title" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="navbar-item">
                                <Link className="nav-link active" aria-current="page" to={`home`}>Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link active" aria-current="page" to={`products`}>Productos</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link active" aria-current="page" to={`know`}>Conocenos</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link active" aria-current="page" to={`contact`}>Contactanos</Link>
                            </li>
                        </ul>
                        <form className="d-flex item-header-rigth">
                            <ul className="navbar-nav">
                                <li className="navbar-item">
                                    <Link className="nav-link active" aria-current="page" to={`sign-in`}>Iniciar Sesion</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link className="nav-link active" aria-current="page" to={`sign-up`}>Registrar</Link>
                                </li>
                                <li className="navbar-item flex-item-navbar">
                                    <Link className="nav-link active" aria-current="page" to={`shopping-bag`}> <FontAwesomeIcon icon={faBagShopping}/> </Link>
                                    { trolley.length > 0  && <div className="header-shopping-bag"> <span> { trolley.length } </span></div> }
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    );
};

export default Header;