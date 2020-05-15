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
                to="/"
                className={window.location.pathname === "/" ? " active" : " "}
                href="/"
              >
                Home
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                to="/quote"
                className={
                  window.location.pathname === "/quote" ? " active" : " "
                }
                href="/quote"
              >
                Quotes
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                to="/gallery"
                className={
                  window.location.pathname === "/gallery" ? " active" : " "
                }
                href="/gallery"
              >
                Gallery
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                to="/about"
                className={
                  window.location.pathname === "/about" ? " active" : " "
                }
                href="/about"
              >
                About us
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                to="/contact"
                className={
                  window.location.pathname === "/contact" ? " active" : ""
                }
                href="/contact"
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
