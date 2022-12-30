import React from 'react';
// import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "../styles/components/home.scss";

const videoBg = new URL("../assets/2019_12_14_09_04_03.mp4", import.meta.url).href;

const VideoComponent = () => {
    return(
        <div className="main">
            <video  src={videoBg} width="100%" autoPlay muted loop/>
        </div>
    );
};

export default VideoComponent;