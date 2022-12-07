import React from 'react';
import "../styles/components/success.scss";

const Imgsuccess = new URL("../assets/Person paying with smart watch Illustration in PNG, SVG_files/fe63b5e6-401f-4514-a1f9-88bf76013c25.png", import.meta.url).href;

const Success = () => {
    return(
        <div className="container py-5">
            <div className="py-4"></div>
            <img src={Imgsuccess} className="img-fluid rounded float-start"/>
            <div className="card-success">
                <h4 className="text-gradient">Pago exitoso</h4>
                <span>
                    Tu compra se ha realizado  con éxito, En este momento tu compra está en proceso de ser enviada a tu dirección de domicilio.
                </span>
                <span>
                    Revisar la sección de proceso de compra, lo encontrarás en la sección perfil de usuario.
                </span>
                <div className="flex-success">
                    <div className='item-success'>
                        <button type="button" className="btn-profile">Ver Perfil</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;