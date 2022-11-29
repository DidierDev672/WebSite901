import React from "react";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

import "../../styles/components/contact.scss";

const ItemContact = ({ contact }) => {
    return(
        <div className="grid-flex-contact">
            <div className="item-contact">
                <div className="card-item-contac">
                    <div className="item-card-contact">
                        <FontAwesomeIcon icon={faPhone}  className="font-item-contact"/>
                        <br />
                        <span>{contact.phone}</span>
                    </div>
                </div>
            </div>
            <div className="item-contact">
                <div className="card-item-contac">
                    <div className="item-card-contact">
                        <FontAwesomeIcon icon={faAt} className="font-item-contact"/>
                        <br />
                        <span>{contact.email}</span>
                    </div>
                </div>
            </div>
            <div className="item-contact">
                <div className="card-item-contac">
                    <div className="item-card-contact">
                        <FontAwesomeIcon icon={faMapLocation} className="font-item-contact"/>
                        <br />
                        <span>{contact.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemContact;