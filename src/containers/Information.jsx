import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import DataBasic from "../components/Databasic";
import AppContext from "../context/AppContext";
import "../styles/components/information.scss";


const SessionActive = ({ user }) => {
    return(
        <div className="container py-5">
            <div className="py-4"></div>
            <div className="card-active">
                <h4>Datos basicos </h4>
                <div className="flex-active">
                    <div className="item-active">
                        <span> { user.namefull } </span>
                    </div>
                    <div className="item-active">
                        <span> { user.email } </span>
                    </div>
                    <div className="item-active">
                        <span> { user.phone } </span>
                    </div>
                    <div className="item-active">
                        <span> { user.country } / { user.address  } </span>
                    </div>
                    <div className="item-active-row">
                        <div>
                            <Link to={`/profile-user`} className="btn-edit-user">Editar</Link>
                        </div>
                        { user.namefull !== "" ? ""  : <button type="button" className="btn-buy">Contiinuar</button> }
                    </div>
                </div>
            </div>
        </div>
    );
};

const Information = () => {
    const { state } = useContext(AppContext);
    const { trolley, user } = state;
    const [ profile, setProfile ] = useState(...user);

    return(
        <div className="container py-3">
            <div className="py-4"></div>
            <div className="mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="Information-buttons">
                            <div className="Information-back">
                                <Link to={`/shopping-bag`} className="btn-back">
                                    Regresar
                                </Link>
                            </div>
                        </div>
                        <div className="Information-sidebar">
                            <h5 className="text-gradient">Pedido</h5>
                            {trolley.map((item) => (
                                <div className="list-group list-group-flush" key={item.id}>
                                    <div className="item-list">
                                        <h5 className="list-group-item"><FontAwesomeIcon icon={faBox} /> {item.name_product}</h5>
                                        <span className="list-group-item"><FontAwesomeIcon icon={faDollarSign}/>{item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                <div className="col-md-6">
                    {  user.length > 0 ? <SessionActive user={profile} /> :  <DataBasic /> }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Information;