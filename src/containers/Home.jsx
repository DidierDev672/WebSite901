import React from "react";
import SliderHome from "../components/SliderHome";
import ContentForm from "../components/ContentForm";
import "../styles/components/home.scss";

const Home = () => {
    return(
        <div className="container-fluid py-5">
            <div className="flex-home">
                <div className="flex-item-home">
                    <h3 className="header-title-home">PlayaPez</h3>
                    <div className="sub-description-content">
                        <span>
                            <strong>PlayaPez</strong> es una empresa dedicada a la producción y comercialización <br />
                            de especie tilapia roja, donde ofrecemos herramientas tecnológicas de <br /> hardware y software
                            desarrollados e implementadas en nuestra estación de piscícola.
                        </span>
                    </div>
                    <button type="button" className="btn-contact-us">Contactanos</button>
                </div>
                <div className="flex-item-home">
                    <SliderHome />
                </div>
            </div>
            <div className="py-5">
                <ContentForm />
            </div>
        </div>
    );
};

export default Home;