import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../api/firebase";
import API from "../api";
import "../styles/components/profile.scss";

const ProfileUser = () => {
    const form = useRef(null);
    const { email, namefull, phone, country, city, address, uid, id  } = useSelector(state => state.user);
    const [profile, setProfile] = useState({email:email,namefull:namefull, phone:phone, country:country,city:city,address:address,uid:uid,id:id });
    function handleEmailChange(e){
        email: e.target.value
    }

    function handleNamefullChange(e){
        setProfile({
            ...profile,
            namefull: e.target.value
        });
    }

    function handlePhoneChange(e){
        setProfile({
            ...profile,
            phone: e.target.value
        });
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
            "address": formData.get("address"),
            "password": formData.get("pwd"),
        };


        if(data.email !== "" && data.namefull !== "" && data.phone !== "" && data.country !== "" && data.address !== "" && data.password !== ""){
            signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                if( id !== ""){
                    updateProfile(auth.currentUser, {
                        displayName: data.namefull, email: data.email
                    });
                    API.updateProfile({
                        id: id,
                        namefull: data.namefull,
                        phone: data.phone,
                        country: data.country,
                        city: data.city,
                        address: data.address,
                        email: data.email,
                        password: data.password,
                        uid: uid
                    });
                }else{
                    updateProfile(auth.currentUser, {
                        displayName: profile.namefull, email: profile.email
                    });

                    API.saveProfile({
                        uid: uid,
                        namefull: data.namefull,
                        phone: data.phone,
                        country: data.country,
                        city: data.city,
                        address: data.address,
                        email: data.email,
                        password: data.password
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
        <div className="container py-5">
            <div className="py-3"></div>
            <div className="card-profile">
                <h4>Perfil de {namefull}</h4>
                <form ref={form}>
                    <div className="grid-profile">
                        <div className="item-profile">
                            <input type="text" className="field-text" name="namefull" value={profile.namefull} onChange={handleNamefullChange} placeholder="Nombre completo"/>
                        </div>
                        <div className="item-profile">
                            <input type="tel" className="field-text" name="phone" value={profile.phone} onChange={handlePhoneChange} placeholder="Telefono"/>
                        </div>
                        <div className="item-profile">
                            <input type="email" className="field-text" name="email" value={profile.email} onChange={handleEmailChange} placeholder="Correo electronico"/>
                        </div>
                        <div className="item-profile">
                            <input type="text" className="field-text" name="country" value={profile.country} onChange={handleCountryChange} placeholder="Pais"/>
                        </div>
                        <div className="item-profile">
                            <input type="text" className="field-text" name="city" value={profile.city} onChange={handleCityChange} placeholder="Ciudad"/>
                        </div>
                        <div className="item-profile">
                            <input type="text" className="field-text" name="address" value={profile.address} onChange={handleAddressChange}  placeholder="Direccion"/>
                        </div>
                        <div className="item-profile">
                            <input type="password" className="field-text" name="pwd" placeholder="Password"/>
                        </div>
                    </div>
                    <button type="button" className="btn-update-user" onClick={handleSubmit}>Actualizar</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileUser;