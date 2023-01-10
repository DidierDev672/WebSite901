import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarDropdown from "react-bootstrap/NavDropdown";
import "../styles/components/headers.scss";
import { NavDropdown } from "react-bootstrap";

const LogoURL = new URL("../assets/Logo (1).svg", import.meta.url).href;

const Header = () => {
    const { uid, namefull, email } = useSelector(state => state.user);
    const DropdownUser = () => {
        return(
            <NavbarDropdown title={<FontAwesomeIcon icon={faUser}/>} id="basic-nav-dropdown">
                <NavDropdown.Item>{namefull}</NavDropdown.Item>
                <NavDropdown.Item>{email}</NavDropdown.Item>
                <NavDropdown.Item><Link to={`profile-user`} className="link-navbar">Mi Cuenta</Link></NavDropdown.Item>
            </NavbarDropdown>
        );
    };
    return(
        <Navbar bg="light" expand="lg" fixed="top" className="Header">
            <Container>
                <Navbar.Brand><Link to={`home`} className="link-navbar">
                    <img  src={LogoURL} width="50" height="50" className="d-inline-bloock align-top" alt="React Bootstrap logo"/>
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to={`home`} className="link-navbar">Home</Link></Nav.Link>
                        {/* <Nav.Link><Link to={`products`} className="link-navbar">Productos</Link></Nav.Link> */}
                        <Nav.Link><Link to={`solution`} className="link-navbar">Solucion</Link></Nav.Link>
                        <Nav.Link><Link to={`know`} className="link-navbar">Acerca</Link></Nav.Link>
                        <Nav.Link><Link to={`contact`} className="link-navbar">Contacto</Link></Nav.Link>
                        <Nav.Link><Link to={`pqrs`} className="link-navbar">PQRS</Link></Nav.Link>
                        { uid !== "" ? <DropdownUser /> : <Nav.Link><Link to={`accede`} className="link-navbar">Acceder</Link></Nav.Link> }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;