import React, { useState,useContext } from 'react';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AppContext from "../context/AppContext.js";
import "../styles/components/know.scss";

const General = () => {
    return(
        <div className="container">
            <div className="card-know">
                <h4 className="text-gradient">Información General</h4>
                <p>
                    Playa Pez, es una empresa dedicada a la producción y comercialización de especie tilapia roja, donde ofrecemos herramientas tecnológicas de hardware y
                    software desarrollados e implementadas en nuestra estación piscícola. con el fin de mejorar la productividad del sector. De esta forma te invitamos que conozca
                    más de nosotros en nuestro portal web y redes sociales, también a que nos visites para tener el gusto de atenderle ofreciendo un tour por
                    nuestras instalaciones ubicados en el municipio de <strong>Ayapel-Córdoba</strong> en la vereda Playa Blanca, conociendo personalmente nuestros procesos y proyectos.
                </p>
            </div>
        </div>
    );
};

const MisionSeth = () => {
    return(
        <div className="container-fluid">
            <div className="grid-know">
                <div className="item-know">
                    <div className="card-know">
                        <h4 className="text-gradient">Vision</h4>
                        <p>
                            Producir y comercializar Tilapia o mojarra roja (Oreochromis.sp) de calidad con responsabilidad social y sostenibilidad social y sostenibilidad ambiental,
                            apostando a la generación de empleo, la inclusión y la seguridad alimentaria y nutrición de la región.
                        </p>
                    </div>
                </div>
                <div className="item-know">
                    <div className="card-know">
                        <h4 className="text-gradient">Mision</h4>
                        <p>
                            Producir y comercializar tilapia o mojarra roja (Oreochromis sp) de calidad con responsabilidad social
                            y sostenibilidad ambiental, apostando a la generación de empleo, la inclusión y la seguridad alimentaria y nutricional de la región.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Values = () => {
    const { state } = useContext(AppContext);
    const { values } = state;

    return(
        <div className="container-fluid">
            <h4 className="title-values text-gradient">Nuestros valores</h4>
            <div className="grid-values">
                {values.map((item) => (
                    <div className="item-know" key={item.id}>
                        <div className="card-know">
                            <h5>{item.values}</h5>
                            <span>{item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Know = () => {
    const [ value, setValues ] = useState("1");

    const handleChange = (event, newValue) => {
        setValues(newValue);
    };

    return(
        <Box sx={{ width: "100%", typography: "body1" }} className="py-5">
            <div className="py-3"></div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList onChange={handleChange} aria-label="Lab API tabs example">
                        <Tab label="General" value="1"/>
                        <Tab label="Vision/Mision" value="2"/>
                        <Tab label="Valores" value="3"/>
                    </TabList>
                </Box>
                <TabPanel value="1"><General /></TabPanel>
                <TabPanel value="2"><MisionSeth /></TabPanel>
                <TabPanel value="3"><Values /></TabPanel>
            </TabContext>
        </Box>
    );
};

export default Know;