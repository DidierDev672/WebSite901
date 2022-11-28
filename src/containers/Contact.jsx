import React, { Fragment, useContext } from "react";
import Box from "@mui/material/Box";
import ItemContact from "../components/handling/ItemContact";
import FormContact from "../components/handling/FormContact";
import AppContext from "../context/AppContext.js";

import "../styles/components/contact.scss";

const imgUrl = new URL("../assets/DJI_0372.JPG", import.meta.url).href;

const Contact = () => {
    const { state } = useContext(AppContext);
    const { contact } = state;
    return(
        <Fragment>
        <div className="container-fluid">
            <div className="py-5"></div>
                {/* <Box>
                    <img src={imgUrl} className="img-fluid rounded"/>
                </Box> */}
                <div className="py-3"></div>
                {contact.map((item) => (
                    <ItemContact  key={item.id} contact={item}/>
                ))}
                <div className="py-3"></div>
                <FormContact />
                <div className="py-3"></div>
        </div>
        </Fragment>
    );
};

export default Contact;