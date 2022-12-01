import React from "react";
import { Link } from "react-router-dom";
import VideoComponent from "../components/VideoComponent";
import "../styles/components/home.scss";

const UrlImg = new URL("../assets/J7VL3TQJXVA7JJCO2B7XIDRPFQ.jpg",import.meta.url).href;

const Home = () => {
    return(
        <div className="container-fluid">
        <div className="py-5"></div>
            <VideoComponent />
            <div className="content-home-soluction">
                <div className="grid-home">
                    <div className="item-home">
                        <img src={UrlImg}/>
                    </div>
                    <div className="item-home">
                        <div className="content-paragraph-home">
                            <p>
                                Una plataforma inteligente y sostenible para la producción terrestre de peces naturales, saludables y nutritivos.
                            </p>
                            <div className="item-home">
                            <Link className="link-soluction-home" to={`solution`}>Solucion</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;