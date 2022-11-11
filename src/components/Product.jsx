import React, { useContext,useState,useEffect, useRef } from "react";
import { useParams  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SubProduct from "../components/SubProduct";
import AppContext from "../context/AppContext.js";
import "../styles/components/products.scss";

const Product = () => {
    const { category } = useParams();
    const { state, addToCart } = useContext(AppContext);
    const [ research, setReSearch ] = useState([]);
    const { products } = state;
    const searchRef = useRef(null);

    useEffect(() => {
        setReSearch(products.filter((item) => item.category === category));
    },[]);

    const handleSearch = () => {
        if(searchRef.current.value !== ""){
            const Refsearch = searchRef.current.value;
            setReSearch(products.filter((item) => {
                return item.name_product.toLowerCase().includes(Refsearch.toLowerCase());
            }))
        }
    };

    return(
        <div className="container py-3">
            <div className="header-product">
                <h4>Lista de productos {category}</h4>
            </div>
            <div className="field-search">
                <input type="text" className="field-text" placeholder="Ingresa el nombre del producto" ref={searchRef}/>
                <button type="button" className="btn-search-product" onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
            <div className="Products-items">
                { research.map((product) => (
                    <SubProduct key={product.id} product={product}/>
                )) }
            </div>
        </div>
    );
};

export default Product;