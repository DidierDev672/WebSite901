import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faThermometer } from "@fortawesome/free-solid-svg-icons";
import { faBridgeWater  } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/category.scss";

const Category = () => {
    const category = { categoryOne: "Medidor", categoryTwo: "Sensor", categoryThree: "Alimentador" };

    return(
        <div className="container">
        <div className="header-category">
            <h5>Categoria de productos</h5>
        </div>
            <div className="flex-category">
                <div className="item-flex-category">
                    <div className="item-font-awesome">
                        <FontAwesomeIcon icon={faThermometer}/>
                    </div>
                    <div className="item-column-category">
                        <span>Medidor</span>
                    </div>
                    <div className="item-category-link">
                        <Link className="btn-views"  to={`${category.categoryOne}`} >Ver</Link>
                    </div>
                </div>
                <div className="item-flex-category">
                    <div className="item-font-awesome">
                        <FontAwesomeIcon icon={faBridgeWater}/>
                    </div>
                    <div className="item-column-category">
                        <span>Sensor</span>
                    </div>
                    <div className="item-category-link">
                        <Link className="btn-views" to={`${category.categoryTwo}`}>Ver</Link>
                    </div>
                </div>
                <div className="item-flex-category">
                    <div className="item-font-awesome">
                        <FontAwesomeIcon icon={faBowlFood}/>
                    </div>
                    <div className="item-column-category">
                        <span>Alimentador</span>
                    </div>
                    <div className="item-category-link">
                        <Link className="btn-views" to={`${category.categoryThree}`}>Ver</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;