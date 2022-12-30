import React from "react";
import { Link } from "react-router-dom";
import VideoComponent from "../components/VideoComponent";
import "../styles/components/home.scss";

const FishURl = new URL("../assets/pexels-photo-511088.webp", import.meta.url).href;
const HealthFish = new URL("../assets/pexels-photo-428355.jpeg", import.meta.url).href;
const RefPlaya = new URL("../assets/pexels-photo-247487.jpg", import.meta.url).href;

const Home = () => {
    return(
        <div className="container-fluid py-3">
            <VideoComponent />
            {/* <img src={FishURl} width="100%" className="img-fluid"/> */}
            <div className="content-home">
                <p>
                    Combinamos generaciones de experiencia en acuicultura con la
                    tecnología más reciente y avanzada de sistemas de recirculación
                    (Poseidón), a fin de crear soluciones de cultivo seguro y sostenible,
                    basadas en datos, para la producción local de pescados.
                </p>
                <div className="item-content-me-auto">
                    <Link to={`know`} className="btn-know">Conocenos</Link>
                </div>
            </div>
                <div className="flex-content-health">
                    <div>
                        <img src={HealthFish} width="100%" className="img-fluid"/>
                    </div>
                    <div>
                        <div className="content-health-home">
                            <p className="text-center justify-content-center align-self-center d-flex">
                                Una plataforma inteligente y sostenible para la producción terrestre de
                                peces naturales, saludables y nutritivos.
                            </p>
                            <Link to={`/solution`} className="btn-soluction">Solucion</Link>
                        </div>
                    </div>
                </div>
                <div className="flex-content-health-colomn">
                    <div>
                        <img src={RefPlaya}  width="100%" className="img-fluid"/>
                        <div className="item-contact-home">
                            <p>
                                Únase a nosotros para hacer que los nutritivos productos del río sean
                                accesibles a todos.
                            </p>
                            <h2>Pregúntanos lo que quiera</h2>
                            <span>¿Tiene preguntas?</span>
                            <br />
                            <span>Nosotros tenemos respuestas</span>
                            <Link to={`/contact`} className="btn-contact-contact">Contactanos</Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;