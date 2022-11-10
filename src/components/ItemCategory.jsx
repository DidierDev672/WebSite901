import React from 'react';
import {  Link } from "react-router-dom";
import "../styles/components/category.scss";

const ItemCategory = ({ categorys }) => {
    return(
        <div className="container">
            <div className="item-flex-category">
                <div className="item-column-category">
                    <span>{categorys.title}</span>
                </div>
                <div className="item-category-link">
                    <Link className="btn-views" to={`${categorys.title}`}>Ver</Link>
                </div>
            </div>
        </div>
    );
};

export default ItemCategory;