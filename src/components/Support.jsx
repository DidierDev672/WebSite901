import React, { useState } from 'react';
import { useSelector } from "react-redux";
import "../styles/components/support.scss";

const Support = () => {
    const { contact } = useSelector(state => state.contacts);
    const [ data, setData ] = useState(...contact);
    return(
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre Completo</th>
                        <th scope="col">Correo Electronico</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Asunto</th>
                        <th scope="col">Ver</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.namefull}</th>
                            <th scope="row">{item.email}</th>
                            <th scope="row">{item.phone}</th>
                            <th scope="row">{item.matter}</th>
                            <th scope="row"><button type="button" className="btn-support"><i className="fa-solid fa-eye"></i></button></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Support;