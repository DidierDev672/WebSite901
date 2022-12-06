import React, { useRef, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebase";
import { setUser } from "../reducers/users/userSlice";
import "../styles/components/signin.scss";

const SignIn = () => {
    const dispatch = useDispatch();
    const form = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                dispatch(setUser({
                    email: user.email,
                    namefull: user.displayName,
                    uid: user.uid,
                }));
                navigate(`/home`);
            }
        });
    });

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const singIn = {
            "email": formData.get("email"),
            "password": formData.get("pwd")
        };

        if(singIn.email !== "" && singIn.password !== ""){
            signInWithEmailAndPassword(auth, singIn.email, singIn.password)
            .then(() => {
                dispatch(setUser({
                    email: singIn.email
                }));
                navigate(`/home`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode);
                console.error(errorMessage);
            })
        }else{
            alert("Debe llenar todos los campos");
        }
    };

    return(
        <div className="container py-3">
            <div className="py-5"></div>
            <div className="card-sign-in">
                <div className="header-sign-in">
                    <h4 className="text-gradient">Playa Pez</h4>
                </div>
                <form ref={form} className="flex-sign-in content-form-sign-in py-3">
                    <div className="item-sign-in">
                        <input type="email" className="field-text" name="email" placeholder="Correo electronico"/>
                    </div>
                    <div className="item-sign-in">
                        <input type="password" className="field-text" name="pwd" placeholder="Password"/>
                    </div>
                    <div className="item-sign-in py-3">
                        <Link to={`/sign-up`} className="link-sign-in">Registrar Usuario</Link>
                        <button type="button" className="btn-sign-in" onClick={handleSubmit}>Iniciar session</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;