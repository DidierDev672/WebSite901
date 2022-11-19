import React from 'react';
import { Link } from "react-router-dom";
import "../styles/components/signin.scss";

const SignIn = () => {

    return(
        <div className="container py-3">
            <div className="card-sign-in">
            <div className="header-sign-in">
                <h4>Playa Pez</h4>
            </div>
                <form>
                    <div className="item-sign-in">
                        <label>Correo electronico</label>
                        <input type="email" className="field-text" name="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="item-sign-in">
                        <label>Contraseña</label>
                        <input type="password" className="field-text" mame="pwd" placeholder="******************"/>
                    </div>
                    <div className="item-sign-in py-3">
                        <Link to={`/`} className="link-sign-in">Registrar Usuario</Link>
                        <button type="button" className="btn-sign-in">Iniciar session</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;