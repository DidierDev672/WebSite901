import React from 'react';
import { Link } from "react-router-dom";
import "../styles/components/home.scss";

const videoBg = new URL("../assets/2019_12_14_09_04_03.mp4", import.meta.url).href;

const VideoComponent = () => {
    return(
        <>
                <video src={videoBg} autoPlay loop muted/>
                <div className="content-home">
                    <h4>Bienvenidos</h4>
                    <p>PlayaPez</p>
                    <Link className="btn-video-know" to={`know`}>Conocenos </Link>
                </div>
        </>
    );
};

export default VideoComponent;