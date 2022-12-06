import React, { useContext,useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import DataBasic from "../components/Databasic";
import AppContext  from "../context/AppContext.js";
import "../styles/components/purchase.scss";

const Purchase = () => {
    const { id } = useParams();
    const { state } = useContext(AppContext);
    const { products } = state;
    const [ all, setAll ] = useState(...products);
    const [ result, setResult ] = useState([]);

    useEffect(() => {
        setResult( all.filter((item) => item.id == id))
    },[]);
    return(
        <div className="container py-3">
            <div className="py-4"></div>
            <div className="mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                            {result.map((item) => (
                                <div className="card-purchase" key={item.id}>
                                    <img src={item.coverURL} className="img-thumbnail" alt={item.name_product}/>
                                    <h4>{item.name_product}</h4>
                                    <span>$ {item.price}</span>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                    </div>
                    <div className="col-md-6">
                        <DataBasic />
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Purchase;