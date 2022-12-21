import React from 'react';
import { Link } from "react-router-dom";
import "../styles/components/home.scss";

const videoBg = new URL("../assets/2019_12_14_09_04_03.mp4", import.meta.url).href;

const VideoComponent = () => {
    return(
        <div className="container main">
            <video src={videoBg} autoPlay loop muted/>
            <div className="content-video">
                <h1>Bienvenido a PlayaPez</h1>
                <p>A nuestro sitio web</p>
                <Link className='link-know' to={`know`}>Conocenos</Link>
            </div>
        </div>
    );
};

export default VideoComponent;