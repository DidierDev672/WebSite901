import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Outlet,Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebase.js";
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import API from "../api";
import { setUser } from "../reducers/users/userSlice";
import "../styles/components/headers.scss";

const IconUser = () => {
    const [ profile, setProfile ] = useState(false);
    return(
        <li className="navbar-item py-2">
            <button type="button" className="btn-profile-header" onClick={() => setProfile(!profile)}><FontAwesomeIcon  icon={faUser}/>
                { profile ? <ToggleUser  /> : '' }
            </button>
        </li>
    );
};

const ToggleUser = () => {
    const { email, namefull } = useSelector(state => state.user);
    return(
        <ul className="card-dropdown">
            <li className="list-group-item">{ namefull }</li>
            <li className="list-group-item">{ email }</li>
            <li className="list-group-item"> <Link className="header-profile" to={`profile-user`}>Editar</Link> </li>
        </ul>
    );
};

const ToggleSession = () => {
    return(
        <>
            <li className="navbar-item">
                <Link className="nav-link active font-link-header" aria-current="page" to={`sign-in`}>Iniciar Sesion</Link>
            </li>
            <li className="navbar-item">
                <Link className="nav-link active font-link-header" aria-current="page" to={`sign-up`}>Registrar</Link>
            </li>
        </>
    );
};

const Header = () => {
    const dispatch = useDispatch();
    const { email } = useSelector(state => state.user);
    const {  totalCount  } = useSelector(state => state.cart);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                API.queryProfile({ uid: user.uid })
                .then((result) => {
                    if(result.enquiry.length > 0){
                        dispatch(setUser( result.enquiry ));
                    }else{
                        dispatch(setUser({
                            email: user.email,
                            uid: user.uid,
                            namefull: user.displayName
                        }))
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
            }
        })
    },[]);

    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-gradient" to={`/`}>PlayaPez</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse list-title" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="navbar-item navbar-item-list">
                                <Link className="nav-link active font-link-header" aria-current="page" to={`home`}>Home</Link>
                            </li>
                            <li className="navbar-item navbar-item-list">
                                <Link className="nav-link active font-link-header" aria-current="page" to={`products`}>Productos</Link>
                            </li>
                            <li className="navbar-item navbar-item-list">
                                <Link className="nav-link active font-link-header" aria-current="page" to={`solution`}>Solucion</Link>
                            </li>
                            <li className="navbar-item navbar-item-list">
                                <Link className="nav-link active font-link-header" aria-current="page" to={`know`}>Acerca</Link>
                            </li>
                            <li className="navbar-item dropdown navbar-item-list">
                                <a className="nav-link dropdown-toggle font-link-header" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contacto
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" aria-current="page" to={`contact`}>Contactanos</Link></li>
                                    <li><Link className="dropdown-item" aria-current="page" to={`pqrs`}>PQR'S</Link></li>
                                </ul>
                            </li>
                            <li className="navbar-item navbar-item-list">
                                <Link className="nav-link active font-link-header" aria-current="page" to={`/blog`}>Blog</Link>
                            </li>
                        </ul>
                        <form className="d-flex item-header-rigth">
                            <ul className="navbar-nav">
                            { email !== "" ? <IconUser  /> :  <ToggleSession/> }
                                <li className="navbar-item flex-item-navbar">
                                    <Link className="nav-link active" aria-current="page" to={`shopping-bag`}> <FontAwesomeIcon icon={faBagShopping}/> <span className="quantity-orders">{ totalCount }</span></Link>
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