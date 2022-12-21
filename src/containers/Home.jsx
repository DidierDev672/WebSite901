import React from "react";
import { Link } from "react-router-dom";
import VideoComponent from "../components/VideoComponent";
import "../styles/components/home.scss";

const Home = () => {
    return(
        <div className="container">
            <div className="py-3"></div>
            <VideoComponent />
        </div>
    );
};

export default Home;