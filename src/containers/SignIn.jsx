import React, { useRef, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import API from "../api";
import { auth } from "../api/firebase";
import { setUser } from "../reducers/users/userSlice";
import "../styles/components/signin.scss";

const SignIn = () => {
    const dispatch = useDispatch();
    const registerEmailRef = useRef(null);
    const registerPwdRef = useRef(null);
    const emailRef = useRef(null);
    const namefullRef = useRef(null);
    const phoneRef = useRef(null);
    const pwdRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                API.queryProfile({ uid: user.uid })
                .then((result) => {
                    if(result.id !== undefined){
                        dispatch(setUser({
                            namefull: result.namefull,
                            phone: result.phone,
                            email: result.email,
                            id: result.id,
                            country: result.country,
                            city: result.city,
                            address: result.address,
                            uid: result.uid
                        }))
                    }else{
                        dispatch(setUser({
                            email: user.email,
                            uid: user.uid,
                            namefull: user.namefull
                        }))
                    }
                    navigate(`/home`);


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(errorCode);
                    console.error(errorMessage);
                })
            }
        });
    },[]);

    const handleSubmit = () => {
        const singIn = {
            "email": emailRef.current.value,
            "password": pwdRef.current.value
        };
        console.log(singIn);
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

    const handleCreateUser = () => {
        const singUp = {
            "email": registerEmailRef.current.value,
            "password": registerPwdRef.current.value,
            "namefull": namefullRef.current.value,
            "phone": phoneRef.current.value
        };
        if(singUp.email !== "" && singUp.password !== "" && singUp.namefull !== "" && singUp.phone !== ""){
            createUserWithEmailAndPassword(auth, singUp.email, singUp.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if(user.uid !== undefined){
                    API.RegisterUser(
                        {
                            uid: user.uid,
                            namefull:singUp.namefull,
                            phone: singUp.phone,
                            email: singUp.email,
                            password: singUp.password
                        })
                    .then(() => {
                        setUser({
                            uid: user.uid,
                            namefull: singUp.namefull,
                            phone: singUp.phone,
                            email: singUp.email,
                            password: singUp.password
                        })
                        alert("Registro exito, ya eres parte de nuestra comunidad");
                        navigate(`/home`);
                    });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode);
                console.error(errorMessage);
            })
        }
    };

    return(
        <Container>
            <div className="py-5"></div>
            <h3>REGISTRO / LOGIN</h3>
            <div className="flex-sign-in">
                <div className="item-sign-in">
                <h4>!Registrate y descubre las ventajas!</h4>
                {/* <p>
                        Al crear una cuenta en nuestra web, podrás moverte más rápidamente
                        por nuestro catálogo y tendrás recomendaciones cada vez más
                        apuradas. Recibir notificaciones cuando aparezcan novedades de
                        nuestros proyectos.
                </p> */}
                <span>*: Campos obligatorios</span>
                <h5>Nuevo Usuario</h5>
                <form>
                    <div className="row-item">
                        <div className="form-group">
                            <label>Nombre completo</label>
                            <input type="text" className="field-text" ref={namefullRef} placeholder="Nombre completo"/>
                        </div>
                        <div className="form-group">
                            <label>Telefono</label>
                            <input type="tel" className="field-text" ref={phoneRef} placeholder="Telefono"/>
                        </div>
                    </div>
                    <br />
                    <div className="row-item">
                        <div className="form-group">
                            <label>Correo electronico</label>
                            <input type="email" className="field-text" ref={registerEmailRef} placeholder="Correo electronico"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="field-text" ref={registerPwdRef} placeholder="Password"/>
                        </div>
                    </div>
                    <div className="py-2"></div>
                    <Button variant="warning" onClick={handleCreateUser}>Registrar</Button>
                </form>
                </div>
                <div className="item-sign-in">
                    <div className="form-register">
                        <h4>Usuario Registrado</h4>
                        <form>
                            <div className="row-item">
                                <div className="form-group">
                                    <label>Correo electronico</label>
                                    <input type="email" className="field-text" ref={emailRef} placeholder="Correo Electronico"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="field-text" ref={pwdRef} placeholder="Password"/>
                                </div>
                            </div>
                            <div className="py-2"></div>
                            <Button variant="warning" onClick={handleSubmit}>Iniciar Session</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SignIn;