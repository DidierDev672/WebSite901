import React from 'react';
import "../styles/components/know.scss";

const Know = () => {
    return(
        <div className="container-fluid py-3">
            <div className="header-know">
                <h3>Conoce nuestra PlayaPez</h3>
            </div>
            <div className="flex-know-content py-3">
                <div className="item-know-content">
                    <div className="card-know">
                        <h4>Informacion general</h4>
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
                    </div>
                </div>
                <div className="item-know-content">
                    <div className="card-know">
                        <h4>Misión</h4>
                        <p>
                            Producir y comercializar Tilapia o mojarra roja (Oreochromis.sp) de
                            calidad con responsabilidad social y sostenibilidad social y
                            sostenibilidad ambiental, apostando a la generación de empleo, la
                            inclusión y la seguridad alimentaria y nutrición de la región.
                        </p>
                    </div>
                </div>
                <div className="item-know-content">
                    <div className="card-know">
                        <h4>Visión</h4>
                        <p>
                            Producir y comercializar tilapia o mojarra roja (Oreochromis sp) de
                            calidad con responsabilidad social y sostenibilidad ambiental,
                            apostando a la generación de empleo, la inclusión y la seguridad
                            alimentaria y nutricional de la región.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Know;