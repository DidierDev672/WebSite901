import React, { useRef, useContext, useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";
import { useNavigate  } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../api/firebase.js";
import "../styles/components/signup.scss";
import AppContext from "../context/AppContext.js";

const SignUp = () => {
    const { addNewUser } = useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                addNewUser(user);
                navigate(`/profile-user`);
            }
        });
    });

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const user = {
            "email": formData.get("email"),
            "password": formData.get("pwd"),
            "id": uuidv4()
        };

        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
            addNewUser(user);
            navigate(`/profile-user`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
        });
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