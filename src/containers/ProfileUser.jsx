import React, { useContext, useState } from 'react';
import AppContext from "../context/AppContext.js";
import "../styles/components/profile.scss";

const ProfileUser = () => {
    const { state } = useContext(AppContext);
    const { user } = state;
    const [ profile, setProfile ] = useState(...user);

    function handleNamefullChange(e){
        setProfile({
            ...profile,
            namefull: e.target.value
        })
    }

    function handlePhoneChange(e){
        setProfile({
            ...profile,
            phone: e.target.value
        })
    }

    function handleCountryChange(e){
        setProfile({
            ...profile,
            country: e.target.value
        })
    }

    function handleCityChange(e){
        setProfile({
            ...profile,
            city: e.target.value
        })
    }

    function handleAddressChange(e){
        setProfile({
            ...profile,
            address: e.target.value
        })
    }

    function handleEmailChange(e){
        setProfile({
            ...profile,
            email: e.target.value
        })
    }

    return(
        <div className="container py-5">
            <div className="card-profile">
                <h4>Perfil  { profile.namefull }</h4>
                <form>
                    <div className="flex-profile">
                    <div className="item-profile">
            <label>Nombre completo</label>
            <input
            type="text"
            name="namefull"
            className="field-text"
            value={profile.namefull}
            onChange={handleNamefullChange}
            placeholder="Juan perez"
            />
        </div>
        <div className="item-profile">
            <label>Telefono</label>
            <input
            type="tel"
            name="phone"
            className="field-text"
            value={profile.phone}
            onChange={handlePhoneChange}
            placeholder="000-000-0000"
            />
        </div>
        <div className="item-profile">
            <label>Pais</label>
            <input
            type="text"
            name="country"
            className="field-text"
            value={profile.country}
            onChange={handleCountryChange}
            placeholder="Colombia"
            />
        </div>
        <div className="item-profile">
            <label>Ciudad</label>
            <input
            type="text"
            name="city"
            className="field-text"
            value={profile.city}
            onChange={handleCityChange}
            placeholder="Cauciasia-Antioquia"
            />
        </div>
        <div className="item-profile">
            <label>Direccion</label>
            <input
            type="text"
            name="address"
            className="field-text"
            value={profile.address}
            onChange={handleAddressChange}
            placeholder="Calle # N A # 40"
            />
        </div>
        <div className="item-profile">
            <label>Correo electronico </label>
            <input
            type="email"
            name="email"
            className="field-text"
            placeholder="example@example.com"
            value={profile.email}
            onChange={handleEmailChange}
            />
        </div>
        <div className="item-profile">
            <label>Password</label>
            <input
            type="password"
            name="pwd"
            className="field-text"
            placeholder="**********"
            />
        </div>
        <div className="item-profile py-3">
            <button type="button" className="btn-profile">
            Actualizar
            </button>
        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUser;