import React, { useContext, useState,useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ItemCategory from "./ItemCategory.jsx";
import AppContext from "../context/AppContext.js";
import "../styles/components/category.scss";


const Category = () => {
    const { state } = useContext(AppContext);
    const { category } = state;
    const [ search, setSearch ] = useState(category);
    const searchRef = useRef(null);

    const handleSearch = () => {
        if(searchRef.current.value !== ""){
            const Refsearch = searchRef.current.value;
            setSearch(category.filter((item) => {
                return item.title.toLowerCase().includes(Refsearch.toLowerCase());
            }))
        }
    };


    return(
        <div className="container">
            <div className="py-5"></div>
        <div className="header-category">
            <h5 className="text-gradient">Categoria de productos</h5>
        </div>
        <div className="content-search-category">
            <input type="text" className="field-text" placeholder="Ingresa una categoria" ref={searchRef}/>
            <button type="button" className="btn-search" onClick={handleSearch}> <FontAwesomeIcon icon={faMagnifyingGlass}/> </button>
        </div>
            <div className="flex-category py-3">
                {search.map((categorys) => (
                    <ItemCategory key={categorys.id} categorys={categorys}/>
                ))}
            </div>
        </div>
    );
};

export default Category;