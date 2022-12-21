import React from "react";
import "../styles/components/questions.scss";

const Questions = () => {
    return(
        <div className="container py-3">
            <h4>Preguntas frecuentes?</h4>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>¿Como hago para pagar/ Qué formas de pago hay en tienda virtual?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div  className="accordion-body">
                            <p>
                                Puedes pagar con Paypal. El pago en efectivo solo se activa para
                                compras mayores a $100.000 pesos, sin incluir el valor del envío.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>¿Como hago para comprar en tienda?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                Primero debes registrarte en nuestra tienda virtual, luego seleccionar
                                los productos que deseas comprar y agregarlos a la bolsa de compra. A
                                continuación debes incluir tu domicilio para que el sistema te indique
                                el valor de la  compra. Por último puedes pagar por Paypal.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>¿Se hacen envíos internacionales? </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                Si, el precio depende del lugar del envío, Para conocerlo puedes realizar
                                el registro y simular tu compra. Una vez incluyas el domicilio el sistema
                                validará el costo de dicho envío.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <strong>¿Si mis productos se encuentran imperfectos o con daños que puedo hacer?</strong>
                        </button>
                    </h2>
                    <div id="collapseFour" className="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                Debes ponerte en contacto con nosotros a través de cualquiera de
                                nuestros canales. PQRS en página web, Facebook o Instagram. Desde
                                ahí te indicaremos cómo proceder.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <strong>¿Cuántos días hábiles tarda el envío?</strong>
                        </button>
                    </h2>
                    <div className="accordion-body" id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <p>
                            3 días hábiles cerca del municipio de Ayapel-Córdoba. 7 días hábiles en
                            las ciudades lejos del municipio de Ayapel-Córdoba y 10 días hábiles
                            las ciudades lejos del municipio de Ayapel-Córdoba y 10 días hábiles
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;