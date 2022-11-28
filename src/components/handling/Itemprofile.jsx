import React, { useState, useRef } from 'react';
import API from "../../api";
import "../../styles/components/profile.scss";

const Itemprofile = ({ profile }) => {
    const [ data, setData ] = useState(profile);
    const form = useRef(null);
    function handleNamefullChange(e){
            setData({
                ...data,
                namefull: e.target.value
            })
    }
    function handlePhoneChange(e){
        setData({
            ...data,
            phone: e.target.value
        })
    }

    function handleCountryChange(e){
        setData({
            ...data,
            country: e.target.value
        })
    }

    function handleCityChange(e){
        setData({
            ...data,
            city: e.target.value
        })
    }

    function handleAddressChange(e){
        setData({
            ...data,
            address: e.target.value
        })
    }

    function handleEmailChange(e){
        setData({
            ...data,
            email: e.target.value
        })
    }

    const handleSubmit = () => {
        const formData = new FormData(form.current);

        const data = {
            "namefull": formData.get("namefull"),
            "phone": formData.get("phone"),
            "country": formData.get("country"),
            "city": formData.get("city"),
            "address": formData.get("address"),
            "email": formData.get("email"),
            "password": formData.get("pwd"),
            "uid": profile.uid
        };

        if(data.namefull !== "" && data.phone !== "" && data.country !== "" && data.city !== "" && data.address !== "" && data.email !== "" && data.password !== ""){
            if(profile.namefull !== ""){
                API.updateProfile({
                    id: profile.id,
                    namefull: data.namefull,
                    phone: data.phone,
                    country: data.country,
                    city: data.city,
                    address: data.address,
                    email: data.email,
                    password: data.password,
                    uid: profile.uid
                });
            }else{
                API.saveProfile({
                    namefull: data.namefull,
                    phone: data.phone,
                    country: data.country,
                    city: data.city,
                    address: data.address,
                    email: data.email,
                    password: data.password,
                    uid: data.uid
                });
            }
        }else{
            alert("Debe llenar todos los campos!!");
        }
    };

    return(
        <section>
            <form ref={form}>
                <div className="content-profile">
                    <h4>Perfil de usuario</h4>
                </div>
                <div className="grid-profile">
                    <div className="item-profile">
                        <input type="text" className="text-field" name="namefull" value={data.namefull} onChange={handleNamefullChange} placeholder="Nombre completo"/>
                    </div>
                    <div className="item-profile">
                        <input type="text" className="text-field" name="phone" value={data.phone} onChange={handlePhoneChange} placeholder="Telefono"/>
                    </div>
                    <div className="item-profile">
                        <input type="text" className="text-field" name="country" value={data.country} onChange={handleCountryChange} placeholder="Pais"/>
                    </div>
                    <div className="item-profile">
                        <input type="text" className="text-field" name="city" value={data.city} onChange={handleCityChange} placeholder="Ciudad"/>
                    </div>
                    <div className="item-profile">
                        <input type="text" className="text-field" name="address" value={data.address} onChange={handleAddressChange} placeholder="Direccion"/>
                    </div>
                    <div className="item-profile">
                        <input type="email" className="text-field" name="email" value={data.email} onChange={handleEmailChange} placeholder="Correo electronico"/>
                    </div>
                    <div className="item-profile">
                        <input type="password" className="text-field" name="pwd" placeholder="Password"/>
                    </div>
                </div>
                <div className="item-profile">
                    <button type="button" className="btn-profile" onClick={handleSubmit}>Actualizar</button>
                </div>
            </form>
        </section>
    );
};

export default Itemprofile;