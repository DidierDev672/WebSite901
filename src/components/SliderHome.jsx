import React from "react";

const SliderHome = () => {
    return(
        <div className="carousel side" id="carouselExampleControls" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img  src="https://www.hannacolombia.com/aqua/sites/default/files/styles/blog_imagen_normal/public/blog/image/2019/06/piscicola.jpg?itok=Ut4E7K1G"
                    className="d-block w-100"/>
                </div>

                <div className="carousel-item">
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/ETKVUC6IRVHYXB4JO4O3IKJUTA.jpg"
                        className="d-block w-100"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previus</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
    );
};

export default SliderHome;