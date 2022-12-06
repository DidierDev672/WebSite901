import React, { useRef,useEffect} from 'react';
import {  useDispatch } from "react-redux";
import { setUser } from "../reducers/users/userSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate  } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../api/firebase.js";
import "../styles/components/signup.scss";

const SignUp = () => {
    const dispatch = useDispatch();
    const form = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            "email": formData.get("email"),
            "password": formData.get("pwd"),
            "id": uuidv4()
        };

        createUserWithEmailAndPassword(auth, buyer.email, buyer.password)
        .then((userCredential) => {
            const user = userCredential;
            dispatch(setUser({
                email: user.email,
                uid: user.uid,
                namefull: user.displayName
            }));

            navigate(`/home`);
        })
        .catch((error) => {
            console.error(error)
        })
        dispatch(setUser({
            email: buyer.email,
            password: buyer.password,
            uid: buyer.id
        }));
    };

    return(
        <div className="container py-3">
        <div className="py-4"></div>
            <div className="card-sign-up">
                <div className="header-sign-in">
                    <div className="item-header">
                        <h5 className="text-gradient">Registrar usuario</h5>
                    </div>
                    <div className="item-header">
                        <span>
                            <strong>¡Regístrate y descubre las ventajas!</strong>
                            <br />
                            Al crear una cuenta en nuestra web, podrás moverte más rápidamente
                            por nuestro catálogo y tendrás recomendaciones cada vez más
                            apuradas. Recibir notificaciones cuando aparezcan novedades de
                            nuestros proyectos.
                        </span>
                    </div>
                </div>
                <form className="py-3 flex-sign-up" ref={form}>
                    <div className="item-sign-in">
                        <input type="email" className="field-text" name="email" placeholder="Correo electronico"/>
                    </div>
                    <div className="item-sign-in">
                        <input type="password" className="field-text" name="pwd" placeholder="Contraseña"/>
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