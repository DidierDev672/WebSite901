import React from 'react';
import { useSelector } from "react-redux";
import "../styles/components/profile.scss";

const ProfileUser = () => {
    const { email  } = useSelector(state => state.user);
    function handleEmailChange(e){
        email: e.target.value
    }
    return(
        <div className="container py-5">
            <div className="py-3"></div>
            <div className="card-profile">
                <h4>Perfil de {email}</h4>
                <form>
                    <div className="grid-profile">
                        <div className="item-profile">
                            <input type="text" className="field-text" name="namefull" placeholder="Nombre completo"/>
                        </div>
                        <div className="item-profile">
                            <input type="tel" className="field-text" name="phone" placeholder="Telefono"/>
                        </div>
                        <div className="item-profile">
                            <input type="email" className="field-text" name="email" value={email} onChange={handleEmailChange} placeholder="Correo electronico"/>
                        </div>
                        <div className="item-profile">
                            <input type="text" className="field-text" name="country" placeholder="Pais"/>
                        </div>
                        <div className="item-profile">
                            <input type="text" className="field-text" name="city" placeholder="Ciudad"/>
                        </div>
                        <div className="item-profile">
                            <input type="text" className="field-text" name="address" placeholder="Direccion"/>
                        </div>
                        <div className="item-profile">
                            <input type="password" className="field-text" name="pwd" placeholder="Password"/>
                        </div>
                    </div>
                    <button type="button" className="btn-update-user">Actualizar</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileUser;