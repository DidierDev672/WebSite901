import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";
import SubProduct from "../components/SubProduct";
import "../styles/components/products.scss";

const Product = () => {
    const [ products, setProduct ] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        API.queryAllProducts()
        .then((result) => {
            const query = result.filter((item) => item.category === category);
            if(query.length > 0){
                setProduct(query);
            }
        })
        .catch((error) => {
            console.error(error);
        })
    });
    return(
        <div className="container">
            <div className="py-5"></div>
            <div className="content-product">
                <h4>Lista de productos {category}.</h4>
            </div>
            <div className="content-list-product">
                {products.map((item) => (
                    <SubProduct key={item.id} product={item}/>
                ))}
            </div>
        </div>
    );
};

export default Product;