/* eslint-disable linebreak-style */
import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import "./footer.scss";



export default function Footer () {



  return(

    <div className='footer-container'>
      <Row>
        <Col xs={4}>
          <p className='logo-name'>Quick Links</p>
          <div className='footer-links'>
            <ul>
              <li><a to="/" href="/">Home</a></li>
              <li><a to="/quote" href="/quote">Quotes</a></li>
              <li><a to="/gallery" href="/gallery">Galery</a></li>
              <li><a to="/#about" href="/#about">About Us</a></li>
            </ul>
          </div>
        </Col>

        <Col xs={4}>
          <p className='logo-name'>Capmbell Wood Designs</p>
          <div className='about-text'>
            Family owned business ,located in our hometown of Excelsior Springs, Missouri.
            We are here to help you and delivery the best service.
          </div>
        </Col>

        <Col xs={4}>
          <p className='social-text text-center'>Follow Us!</p>
          <div className="social-buttons">
            <a href="https://www.facebook.com/campbellwooddesigns" target='blank' className="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
              <span className="social-button__inner">
                <i className="fab fa-facebook-f"></i>
              </span>
            </a>
            <a href="#" className="social-buttons__button social-button social-button--instagram" aria-label="Instagram">
              <span className="social-button__inner">
                <i className="fab fa-instagram"></i>
              </span>
            </a>
          </div>
          <div className='text-center mt-4 login'><button className='btn'>Login</button></div>
        </Col>
      </Row>
      <hr />
    </div>

  );
}