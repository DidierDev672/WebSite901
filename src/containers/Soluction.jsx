import React, { useContext } from 'react';
import Bracket from '../components/handling/Bracket';
import AppContext from "../context/AppContext.js";
import '../styles/components/solution.scss';

const imgUrl = new URL('../assets/DJI_0372.JPG', import.meta.url).href;
const imgSoluction = new URL(
    '../assets/IMG_20190529_110252.jpg',
    import.meta.url
).href;

const Solution = () => {
    const { state } = useContext(AppContext);
    const { bracket } = state;
    return (
    <div className="container py-3">
        <div className="py-4"></div>
        <div className="header-solution">
        {/* <img src={imgUrl} className="img-fluid rounded" /> */}
        <h5>Solucion Inteligente</h5>
        <span>para un desafio continuo</span>
        </div>
        <div className="Header">
        <p>
            Una plataforma inteligente y sostenible para la producción terrestre
            de peces naturales, saludables y nutritivos.
        </p>
        </div>
        <div className="py-5">
            <div className="mb-3">
                <div className="row g-0">
                    <div className="col-md-6 cover-img">
                        {/* <img src={imgSoluction} className="img-fluid rounded-start"/> */}
                    </div>
                    <div className="col-md-6">
                        <div className="content-soluction">
                            <h4>Una solución integral para la producción de peces</h4>
                            <p>
                                <strong>Poseidon</strong> ofrece una solución integral para la producción de peces en tierra. Comenzando con la definición del
                                proyecto, trabajamos con usted para entender sus requerimientos, incluyendo la especie de peces con la que
                                trabaja, su ubicación, las condiciones locales y más. Creamos una solución tecnológica, diseñando una
                                instalación en tierra que cumpla con sus especificaciones exactas. Una vez que la instalación está en funcionamiento,
                                ofrecemos apoyo en las primeras etapas y en la formación de su personal, proporcionando asesoramiento acerca de
                                su operación, actualizaciones y tecnología. Para asegurarnos de que siempre saque el máximo provecho de
                                sus instalaciones, después de estar listo puedes tomar el timón y avanzar de manera independiente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Header">
                <p>Cada paso que camines</p>
                <p>
                    Poseido te acompañará de principio a fin. comenzando con la planificación del concepto inicial, proporcionando todo el apoyo  que
                    necesitas para que tu proyecto de acuicultura sea un éxito.
                </p>
            </div>

            <div className='grid-soluction py-3'>
                {bracket.map((item) => (
                    <div className="item-soluction" key={item.id}>
                        <Bracket key={item.id} bracket={item}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Solution;
