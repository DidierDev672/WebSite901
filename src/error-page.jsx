import React from 'react';
import {  useRouteError  } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return(
        <div className="container">
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Lo sentimos, se ha producido un error inesperado.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;