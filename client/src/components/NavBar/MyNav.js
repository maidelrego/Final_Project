import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./myNav.scss";

export default function MyNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      sticky="top"
      className="navy"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-container">
          <ul>
            <li>
              <Nav.Link
                to="/quote"
                className={
                  window.location.pathname === "/quote"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="#features"
              >
                Quotes
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                to="/gallery"
                className={
                  window.location.pathname === "/gallery"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="#pricing"
              >
                Gallery
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                to="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="#pricing"
              >
                About us
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                href="#pricing"
              >
                Contact us
              </Nav.Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
