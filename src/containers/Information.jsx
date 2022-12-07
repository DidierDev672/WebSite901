import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import DataBasic from "../components/Databasic";
import "../styles/components/information.scss";


const SessionActive = () => {
    const { email, namefull, phone, country, city, address, uid, id} = useSelector(state => state.user);
    return(
        <div className="container py-5">
            <div className="py-4"></div>
            <div className="card-active">
                <h4>Datos basicos </h4>
                <div className="flex-active">
                    <div className="item-active">
                        <span> { namefull } </span>
                    </div>
                    <div className="item-active">
                        <span> { email } </span>
                    </div>
                    <div className="item-active">
                        <span> { phone } </span>
                    </div>
                    <div className="item-active">
                        <span> { country } / { user.address  } </span>
                    </div>
                    <div className="item-active-row">
                        <div>
                            <Link to={`/profile-user`} className="btn-edit-user">Editar</Link>
                        </div>
                        { id !== "" ? ""  : <button type="button" className="btn-buy">Contiinuar</button> }
                    </div>
                </div>
            </div>
        </div>
    );
};

const Information = () => {
    const { productsList } = useSelector(state => state.cart);
    const { uid } = useSelector(state => state.user);
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
                            {productsList.map((item) => (
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
                    {  uid !== "" ? <SessionActive /> :  <DataBasic /> }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Information;