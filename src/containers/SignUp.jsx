import React, { useRef, useContext } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useNavigate  } from "react-router-dom";
import "../styles/components/signup.scss";
import AppContext from "../context/AppContext.js";

const SignUp = () => {
    const { addNewUser } = useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const user = {
            "email": formData.get("email"),
            "password": formData.get("pwd"),
            "id": uuidv4()
        };
        addNewUser(user);
        navigate(`/profile-user`);
    };
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
                <form className="py-3" ref={form}>
                    <div className="item-sign-in">
                        <label>Correo electronico</label>
                        <input type="email" className="field-text" name="email" placeholder="ejemplo@ejemplo.com"/>
                    </div>
                    <div className="item-sign-in">
                        <label>Contraseña</label>
                        <input type="password" className="field-text" name="pwd" placeholder="****************"/>
                    </div>
                    <div className="item-sign-in py-3">
                        <button type="button" className="btn-sign-up" onClick={handleSubmit}>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;