import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavbarDropdown from "react-bootstrap/NavDropdown";
import "../styles/components/headers.scss";

const LogoURL = new URL("../assets/Logo (1).svg", import.meta.url).href;

const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to={`home`} className="link-navbar">
                    <img  src={LogoURL} width="50" height="50" className="d-inline-bloock align-top" alt="React Bootstrap logo"/>
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to={`home`} className="link-navbar">Home</Link></Nav.Link>
                        <Nav.Link><Link to={`products`} className="link-navbar">Productos</Link></Nav.Link>
                        <Nav.Link><Link to={`solucion`} className="link-navbar">Solucion</Link></Nav.Link>
                        <Nav.Link><Link to={`know`} className="link-navbar">Acerca</Link></Nav.Link>
                        <Nav.Link><Link to={`contact`} className="link-navbar">Contacto</Link></Nav.Link>
                        <Nav.Link><Link to={`pqrs`} className="link-navbar">PQRS</Link></Nav.Link>
                        <Nav.Link><Link to={`sign-in`} className="link-navbar">Iniciar Session</Link></Nav.Link>
                        <Nav.Link><Link to={`sign-up`} className="link-navbar">Registrar Usuario</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;