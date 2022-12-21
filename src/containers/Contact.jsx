import React, { Fragment } from "react";
import FormContact from "../components/handling/FormContact";

import "../styles/components/contact.scss";

// const imgUrl = new URL("../assets/Cut.JPG", import.meta.url).href;

const Contact = () => {
    return(
        <Fragment>
        <div className="container">
                <div className="py-3"></div>
                <FormContact />
                <div className="py-3"></div>
        </div>
        </Fragment>
    );
};

export default Contact;