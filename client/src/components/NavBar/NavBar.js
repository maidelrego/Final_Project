import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Link
                to="/"
                className={window.location.pathname === "/" ? " active" : " "}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/quote"
                className={
                  window.location.pathname === "/quote" ? " active" : " "
                }
                href="/quote"
              >
                Quotes
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={
                  window.location.pathname === "/gallery" ? " active" : " "
                }
                href="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/#about" href="/#about">About us</Link>
            </li>
            <li>
              <Link to="/#contact" href="/#contact">Contact us</Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
