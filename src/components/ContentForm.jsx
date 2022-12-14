import React from "react";
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import "../styles/components/contentform.scss";

const ContentForm = () => {
    return(
        <div className="content-form">
            <div className="card-content-form">
                <div className="flex-content-form">
                    <div className="flex-item-content-form">
                        <h3>Productos</h3>
                        <div className="flex-item-information-form">
                            <div className="item-information-form">
                                <span>Nuestros productos/</span>
                                <span className="header-products-information">Hardware</span>
                            </div>
                        </div>
                        <button type="button" className="btn-products-information">
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                    </div>
                    <div className="flex-item-content-form">
                        <div className="card-know">
                            <h3>Conocenos</h3>
                            <div className="item-information-form">
                                <span>Nuestra mision y vision/</span>
                                <span className="header-know-information">Empresa</span>
                            </div>
                            <button type="button" className="btn-know-information">
                                <FontAwesomeIcon icon={faEye}/>
                            </button>
                        </div>
                    </div>
                    <div className="flex-item-content-form">
                        <h3>Contactanos</h3>
                        <div className="item-information-form">
                            <span>Contactanos/</span>
                            <span className="header-know-information">Empresa</span>
                        </div>
                        <button type="button" className="btn-products-information">
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentForm;