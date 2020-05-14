import React from "react";
import { Navbar, Nav, } from "react-bootstrap";
import "./myNav.scss";


export default function MyNav() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky='top' className="navy">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-container">
          <ul>
            <li><Nav.Link to="/quotes">Quotes</Nav.Link></li>
            <li><Nav.Link to="/galery">Galery</Nav.Link></li>
            <li><Nav.Link href="#about">About us</Nav.Link></li>
            <li><Nav.Link href="#contact">Contact us</Nav.Link></li>
          </ul>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

}

