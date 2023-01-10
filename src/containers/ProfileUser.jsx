import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { setUser } from "../reducers/users/userSlice";
import { auth } from "../api/firebase";
import API from "../api";
import { toNewUserEntry } from "../api/utils.ts";
import "../styles/components/profile.scss";

const ProfileUser = () => {
    const form = useRef(null);
    const dispatch = useDispatch();
    const { email, namefull, phone, country, city, address, uid, id, section  } = useSelector(state => state.user);
    const [profile, setProfile] = useState({email:email,namefull:namefull, phone:phone, country: country, city: city,section: section ,address: address  ,uid:uid });

    function handleEmailChange(e){
        setProfile({
            ...profile,
            email: e.target.value
        });
    }

    function handleNamefullChange(e){
        setProfile({
            ...profile,
            namefull: e.target.value
        });
    }

    function handlePhoneChange(e){
            phone: e.target.value;
    }

    function handleCountryChange(e){
        setProfile({
            ...profile,
            country: e.target.value
        });
    }

    function handleCityChange(e){
        setProfile({
            ...profile,
            city: e.target.value
        });
    }

    function handleSectionChange(e){
        setProfile({
            ...profile,
            section: e.target.value
        })
    }

    function handleAddressChange(e){
        setProfile({
            ...profile,
            address: e.target.value
        });
    }

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const data = {
            "namefull": formData.get("namefull"),
            "phone": formData.get("phone"),
            "email": formData.get("email"),
            "country": formData.get("country"),
            "city": formData.get("city"),
            "section": formData.get("section"),
            "address": formData.get("address"),
            "password": formData.get("pwd"),
        };
        if(data.email !== "" && data.namefull !== "" && data.phone !== "" && data.country !== "" && data.address !== "" && data.password !== ""){
            const userUpdate = {
                id: id,
                uid: uid,
                namefull: data.namefull,
                phone: data.phone,
                country: data.country,
                city: data.city,
                section: data.city,
                address: data.address,
                email: data.email,
                password: data.password
            };

            const UserProfile = toNewUserEntry(userUpdate);
            signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                if( id !== undefined){
                    updateProfile(auth.currentUser, {
                        displayName: data.namefull, email: data.email
                    });
                    API.updateUser(id,UserProfile)
                    .then(() => {
                        toast("Su informacion personal se actualizado con exito",{
                            position: "top-right",
                            autoClose:5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            theme: "colored"
                        });
                    });
                }else{
                    updateProfile(auth.currentUser, {
                        displayName: profile.namefull, email: profile.email
                    });

                    API.saveUser(UserProfile)
                    .then(() => {
                        toast("Su informacion personal se han actualizado con exito",{
                            position: "top-right",
                            autoClose:5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            theme: "colored"
                        });
                    });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast("Error en la password y correo electronico, por favor revisar los datos",{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored"
                });
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
                // progress: undefined,
                theme:"light"
            });
        }
    };
    return(
        <div className="container profile-user">
        <div className="py-5"></div>
            <div className="card-profile">
                <h4>Informacion Personal</h4>
                <hr />
                <form ref={form}>
                    <div className="grid-profile">
                        <div className="item-profile">
                            <label className="font-label">Nombre completo</label>
                            <input type="text" className="field-text" name="namefull" value={profile.namefull} onChange={handleNamefullChange} placeholder="Nombre completo"/>
                        </div>
                        <div className="item-profile">
                            <label>Telefono</label>
                            <input type="tel" className="field-text" name="phone" value={profile.phone} onChange={handlePhoneChange} placeholder="Telefono"/>
                        </div>
                        <div className="item-profile">
                            <label>Correo electronico</label>
                            <input type="email" className="field-text" name="email" value={profile.email} onChange={handleEmailChange} placeholder="Correo electronico"/>
                        </div>
                        <div className="item-profile">
                            <label>Pais</label>
                            <input type="text" className="field-text" name="country" value={profile.country} onChange={handleCountryChange} placeholder="Pais"/>
                        </div>
                        <div className="item-profile">
                            <label>Ciudad</label>
                            <input type="text" className="field-text" name="city" value={profile.city} onChange={handleCityChange} placeholder="Ciudad"/>
                        </div>
                        <div className="item-profile">
                            <label>Departamento</label>
                            <input type="text" className="field-text" name="section" value={profile.section} onChange={handleSectionChange} placeholder="Departamento"/>
                        </div>
                        <div className="item-profile">
                            <label>Direccion</label>
                            <input type="text" className="field-text" name="address" value={profile.address} onChange={handleAddressChange}  placeholder="Direccion"/>
                        </div>
                        <div className="item-profile">
                            <label>Password</label>
                            <input type="password" className="field-text" name="pwd" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="py-3">
                        <button type="button" className="btn-update-user" onClick={handleSubmit}>Actualizar</button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default ProfileUser;