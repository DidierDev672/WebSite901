import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import DataBasic from "../components/Databasic";
import AppContext from "../context/AppContext";
import "../styles/components/information.scss";

const Information = () => {
    const { state } = useContext(AppContext);
    const { trolley } = state;
    return(
        <div className="container py-3">
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
                            <h5>Pedido</h5>
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
                    <DataBasic />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Information;