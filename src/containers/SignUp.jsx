import React from 'react';
import "../styles/components/signup.scss";

const SignUp = () => {
    return(
        <div className="container py-3">
            <div className="card-sign-up">
                <div className="header-sign-in">
                    <div className="item-header">
                        <h5>Registrar usuario</h5>
                    </div>
                    <div className="item-header">
                        <span>En <strong>Playapez</strong> todos somo una familia</span>
                    </div>
                </div>
                <form className="py-3">
                    <div className="item-sign-in">
                        <label>Correo electronico</label>
                        <input type="email" className="field-text" name="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="item-sign-in">
                        <label>Contraseña</label>
                        <input type="password" className="field-text" name="pwd" placeholder="****************"/>
                    </div>
                    <div className="item-sign-in py-3">
                        <button type="button" className="btn-sign-up">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;