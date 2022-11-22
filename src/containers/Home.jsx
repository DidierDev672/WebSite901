import React from "react";
import { Link } from "react-router-dom";
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils  } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/home.scss";

const Home = () => {
    return(
        <div className="container-fluid py-5">
            <div className="flex-home">
                <div className="item-home">
                    <div className="card-home">
                        <h4>Informacion General</h4>
                        <p>
                            Playa Pez, es una empresa dedicada a la producción y comercialización
                            de especie tilapia roja, donde ofrecemos herramientas tecnológicas de
                            hardware y software desarrollados e implementadas en nuestra
                            estación piscícola. con el fin de mejorar la productividad del sector. De
                            esta forma te invitamos que conozca más de nosotros en nuestro
                            portal web y redes sociales, también a que nos visites para tener el
                            gusto de atenderle ofreciendo un tour por nuestras instalaciones
                            ubicados en el municipio de Ayapel-Córdoba en la vereda Playa Blanca,
                            conociendo personalmente nuestros procesos y proyectos.
                        </p>
                        <Link className="btn-know"  to={`know`}>Conocenos</Link>
                    </div>
                </div>
                <div className="item-home">
                    <div className="item-home-column">
                        <div className="item-home">
                            <div className="card-home">
                                <p>
                                    Únase a nosotros para hacer que los nutritivos productos de piscicola sean accesibles a todos.
                                </p>
                                <strong>Pregúntanos lo que quiera</strong>
                                <p>
                                    ¿Tiene preguntas?
                                    Nosotros tenemos respuestas.
                                </p>
                                <Link to={`contacto`} className="btn-contacts">Contactnos</Link>
                            </div>
                        </div>
                        <div className="item-home">
                            <div className="card-home">
                                <h4>Gabinete de productos</h4>
                                <p>
                                    Encuentra en el gabinete los productos, para ayudarte a trabajar una
                                    mayor productividad de las piscícola, selecciona, escoge lo que más te
                                    guste, después agregalo a tu bolsa de compra y !listo!, así de fácil
                                    puedes tener tu pedido PlayaPez.
                                </p>
                                <Link to={``} className="btn-products"> Productos </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item-home">
                    <div className="card-home">
                        <h4>Desafío de PlayaPez</h4>
                        <span>
                            Nuestra solución tiene como objetivo resolver los siguientes desafíos:
                        </span>
                        <ul className="grid-list py-4">
                            <li>
                                <FontAwesomeIcon icon={faUtensils} className="font-awesome"/>
                                <p>Aumento del consumo de pescado.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBowlFood} className="font-awesome"/>
                                <p>Necesidad de producción sostenible de alimentos.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFish} className="font-awesome"/>
                                <p>Aumento de la población de peces.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;