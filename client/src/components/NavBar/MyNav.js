import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import './myNav.scss';


export default function MyNav () {

    return (
      <Navbar collapseOnSelect expand="lg" bg="light" sticky='top' className="navy">
        <Navbar.Brand>Campbell Wood Designs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="cl-effect-7">
            <Nav.Link href="#features">Quotes</Nav.Link>
            <Nav.Link href="#pricing">Galery</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    
  }

  