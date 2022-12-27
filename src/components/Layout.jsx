import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import Header from "./Header";
import Footer from "../components/Footer";
import FooterRedes from "./handling/FooterRedes";
import "../styles/components/whatsapp.scss";


const Layout = ({ children }) => {
    return(
        <div className="layout">
            <Header />
            {  children }
            <ReactWhatsapp number="+57 320-573-7554" className="btn-whatsapp">
                <i className="fa-brands fa-whatsapp font-whatsapp"></i>
            </ReactWhatsapp>
            <Footer />
            <FooterRedes />
        </div>
    );
};

export default Layout;