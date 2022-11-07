import React, { useContext } from "react";
import Product from "../components/Product";
import AppContext from "../context/AppContext.js";

import "../styles/components/products.scss";

const Products = () => {
    const { state, addToCart } = useContext(AppContext);
    const { products } = state;

    const handleAddToCart = product => () => {
        console.log("Click");
        addToCart(product);
    };

    return(
        <div className="container-fluid py-2">
            <div className="Products-items">
                {products.map(product => (
                    <Product  key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                ))}
            </div>
        </div>
    );
};

export default Products;