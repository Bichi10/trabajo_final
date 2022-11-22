import { useState } from "react"
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navbar/navbar.css';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Mundial Qatar 2022
      </a>
      <button
        className="hamburger"
        onClick ={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink to="/home"> Home</NavLink> 
          </li>
          <li>
          <NavLink to="/grupo"> Grupo</NavLink>
          </li>
          <li>
          <NavLink to="/Contacto"> Contacto</NavLink> 
          </li>
        </ul>
      </div>
    </nav>
  );
}
/*import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";

const Menu = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href=""> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-Navbar-nav" />
                <Navbar.Collapse id="basic-Navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link href="./">Home </Nav.Link>
                            <Nav.Link href="./Contacto">Contacto</Nav.Link>
                            <Nav.Link href="./Ejemplo">Ejemplo</Nav.Link>
                            <Nav.Link href="./">ver otro mas</Nav.Link>

                            </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Menu;*/