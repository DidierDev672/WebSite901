import React from "react";
import VideoComponent from "../components/VideoComponent";
import "../styles/components/home.scss";

const Home = () => {
    return(
        <div className="container-fluid">
        <div className="py-5"></div>
            <VideoComponent />
        </div>
    );
};

export default Home;