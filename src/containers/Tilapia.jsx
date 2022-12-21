import React from "react";
import "../styles/components/tilapia.scss";

const TilapiaFish = new URL("../assets/Tilapia_roja-cria-piscifactoria-cuba_CYMIMA20170323_0012_13.jpg", import.meta.url).href;
const TilapiaSex = new URL("../assets/tilapia-roja-83211804.jpg", import.meta.url).href;
const MideTilapia = new URL("../assets/Red-Tilapia.jpg", import.meta.url).href;
const CleanTilapie = new URL("../assets/212.jpg", import.meta.url).href;
const BoxTilapia = new URL("../assets/D_NQ_NP_884032-MCO48821177255_012022-O.webp", import.meta.url).href;

const Tilapia = () => {
    return(
        <div className="container py-3">
            <div className="content-tilapia">
                <img  src={TilapiaFish} className="img-fluid img-thumbnail"/>
                <h4>Tilapia Rojas</h4>
                <p>
                    La tilapia Roja es el resultado de varios cruces de tilapias. Son de
                    origen africano y son una de las variedades más cultivadas. Es
                    altamente filtradora. Para el cultivo de debe contar con poblaciones
                    monosexo de machos por su mejor crecimiento y para evitar su pronta
                    reproducción que traería serios problemas de  superpoblación y
                    competencia por oxígeno, espacio y alimento y la rápida propagación
                    de enfermedades. Para cultivo se recomienda tener estanques
                    cubiertos para la primera etapa hasta 80gr. de peso para evitar la
                    depredación por parte de las aves.
                </p>
                <h5>Cualidades</h5>
                <p>
                    Buen crecimiento, gran demanda comercial, rusticidad para su manejo,
                    resistencia a enfermedades, acepta alimento concentrado y
                    permanente disponibilidad de semilla.
                </p>
                <img src={TilapiaSex}  className="img-fluid img-thumbnail"/>
                <h5>Reproducción</h5>
                <p>
                    Los alevinos de Tilapia Roja producidos por PLAYA PEZ S.A.S se crían en
                    cautiverio manejando lotes de larvas donde se suministra alimento
                    especialmente formulado para su reversión sexual, garantizando un
                    mínimo de 97% de machos.
                </p>
                <img src={MideTilapia} className="img-fluid img-thumbnail"/>
                <h5>Descripción física</h5>
                <p>
                    Alevinos con edad entre 30 y 40 días y una talla comercial de mínimo 26 mm.
                </p>
                <h5>Densidad de siembra</h5>
                <p>
                    3.5 a 5 animales/m2 para cultivo hasta los 500 gr. en estanques. En
                    jaulas se pueden cultivar hasta 50 animales por m3, aunque hay
                    experiencias con mayores densidades de siembra.
                </p>
                <h5>Conversión esperada</h5>
                <p>
                    1.5 a 2.0 según el tipo de cultivo, de alimento, la densidad utilizada y el
                    protocolo de abonamiento.
                </p>
                <img src={CleanTilapie} className="img-fluid img-thumbnail"/>
                <h5>Condiciones de sanidad</h5>
                <p>
                    Los alevinos son despachados después de un control de calidad que
                    garantiza la ausencia de ectoparásitos y hongos que afecten su
                    inversión.
                </p>
                <img src={BoxTilapia} className="img-fluid img-thumbnail"/>
                <h5>Empaque y presentación</h5>
                <p>
                    Empaque en caja de cartón por 500 alevinos, que contiene 2 bolsas con
                    los peces, agua tratada y con oxígeno puro para asegurar la
                    supervivencia durante su transporte hasta por 24 horas.
                </p>
                <h5>Transporte</h5>
                <p>
                    Se utiliza logística especializada para el envío terrestre y/o aéreo a
                    destinos nacionales según el volumen, distancia e infraestructura.
                </p>
                <h5>Garantía</h5>
                <p>
                    Sus alevinos son garantizados ante problemas en el transporte y
                    manejo del despacho. Poblaciones machos del 96% en promedio y 3%
                    de excedente en cantidad.
                </p>
                <h5>Servicio</h5>
                <p>
                    Cuenta con la asesoría de PLAYA PEZ S.A.S  como su proveedor de
                    semilla certificada.
                </p>
                <h5>Recomendaciones</h5>
                <p>
                    Revise sus alevines una vez le sean entregados. Siga las instrucciones de siembra.
                </p>
            </div>
        </div>
    );
};

export default Tilapia;