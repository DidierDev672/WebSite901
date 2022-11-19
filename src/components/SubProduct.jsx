import React from 'react';
import { Link } from "react-router-dom";
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/products.scss";

const SubProduct = ({ product,handleAddToCart }) => {
    return(
        <div className="Products-item">
            <div className="Product-item-ifno">
                <img className="img-thumbnail" src={product.coverURL} alt={product.name_product} width="512px" height="512px"  />
                <h2 className="title-product-item">
                    {product.name_product}
                    <br />
                    <span className="sub-price-product-item">
                        $
                        {''}
                        {product.price}
                    </span>
                </h2>
                <br />
                <p className="sub-title-product-item">{product.description}</p>
            </div>
            <div className="flex-product-item">
                <button type="button" className="btn-add-product" onClick={handleAddToCart(product)}> <FontAwesomeIcon icon={faPlus}/> </button>
                {/* <button type="button" className="btn-buy-product"><FontAwesomeIcon icon={faCartShopping}/>  </button> */}
                <Link className="btn-buy-product" to={`/purchase/${product.id}`}><FontAwesomeIcon icon={faCartShopping}/></Link>
            </div>
        </div>
    );
};

export default SubProduct;