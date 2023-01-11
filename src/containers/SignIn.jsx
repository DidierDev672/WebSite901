import React, { useRef, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import API from "../api";
import { auth } from "../api/firebase";
import { setUser } from "../reducers/users/userSlice";
import "../styles/components/signin.scss";

const Register = () => {
    const dispatch = useDispatch();
    const registerEmailRef = useRef(null);
    const registerPwdRef = useRef(null);
    const namefullRef = useRef(null);
    const phoneRef = useRef(null);
    const navigate = useNavigate();

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
                if(user.uid !== ""){
                    const dataUser = {
                        email: singUp.email,
                        namefull: singUp.namefull,
                        phone: singUp.phone,
                        password: singUp.password,
                        uid: user.uid
                    };
                    API.saveUser(dataUser)
                    .then(() => {
                        dispatch(setUser(dataUser));
                        toast(
                            "Registro exito, ya eres parte de nuestra comunidad",
                            {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored"
                            });
                        navigate(`/home`);
                    });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode);
                console.error(errorMessage);
                toast("Por favir revisar los datos, hay inconveniente para ser el registro",
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            })
        }else{
            toast("Debe llenar todos los campos, Por favor");
        }
    };

    return(
        <div className="container">
            <h4 className="title-user">Registrate en Playa Pez</h4>
            <span className="sub-title-user">o utiliza tu correo electronico</span>
            <form className="form-user">
                <div className="form-group">
                    <label>Nombre completo</label>
                    <input type="text" className="field-text" ref={namefullRef} placeholder="Nombre completo" />
                </div>
                <div className="form-group">
                    <label>Telefono</label>
                    <input type="tel" className="field-text" ref={phoneRef} placeholder="Telefono" />
                </div>
                <div className="form-group">
                    <label>Correo electronico</label>
                    <input type="email" className="field-text" ref={registerEmailRef} placeholder="nombre@correo.com" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="field-text" ref={registerPwdRef} placeholder="Password" />
                </div>
                <div className="py-3">
                    <Button variant="warning" onClick={handleCreateUser}>Registrar</Button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

const InitiateUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const pwdRef = useRef(null);

    const handleSubmit = () => {
        const singIn = {
            "email": emailRef.current.value,
            "password": pwdRef.current.value
        };
        if(singIn.email !== "" && singIn.password !== ""){
            signInWithEmailAndPassword(auth, singIn.email, singIn.password)
            .then((userCredential) => {
                const user = userCredential.user;
                API.queryProfile(user.uid)
                .then((result) => {
                    dispatch(setUser({
                        namefull: result.namefull,
                        email: result.email,
                        phone: result.phone,
                        country: result.country,
                        city: result.city,
                        section: result.section,
                        address: result.address,
                        id: result.id,
                        uid: result.uid
                    }))
                    .catch((error) => {
                        console.error(error);
                    });
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode);
                console.error(errorMessage);
            })
        }else{
            toast("Debe llenar todos los campos",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"light"
            });
        }
    };
    return(
        <div className="container">
            <h4 className="title-user">Inicia sesion en Playa Pez</h4>
            <span className="sub-title-user">Ingresa tus datos en el siguiente formulario</span>
            <form className="form-user">
                <div className="form-group">
                    <label>Correo electronico</label>
                    <input type="email" className="field-text" ref={emailRef} placeholder="nombre@correo.com" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="field-text" ref={pwdRef} placeholder="Password" />
                </div>
                <div className="py-3">
                    <Button variant="warning" onClick={handleSubmit}>Iniciar Session</Button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

const SignIn = () => {
    const [ values, setValues ] = useState("1");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                API.queryProfile(user.uid)
                .then((result) => {
                    if(result.id !== undefined){
                        dispatch(setUser({
                            namefull: result.namefull,
                            phone: result.phone,
                            email: result.email,
                            id: result.id,
                            country: result.country,
                            city: result.city,
                            section: result.section,
                            address: result.address,
                            uid: result.uid
                        }))
                    }else{
                        dispatch(setUser({
                            email: result.email,
                            uid: result.uid,
                            namefull: user.namefull,
                            phone: result.phone,
                            country: result.country,
                            city: result.city,
                            section: result.section,
                            address: result.address,
                            id: result.id,
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

    const handleChange = (event, newValue) => {
        setValues(newValue);
    };

    return(
        <Container>
            <div className="py-5"></div>
            <Box sx={{ width: "100%", typography: "body1" }} className="py-4">
                <TabContext value={values}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList onChange={handleChange} aria-label="Lab API tabs example">
                            <Tab label="Sign-Up" value="1"/>
                            <Tab label="Sign-In" value="2"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1"><Register /></TabPanel>
                    <TabPanel value="2"><InitiateUser /></TabPanel>
                </TabContext>
            </Box>
        </Container>
    );
};

export default SignIn;