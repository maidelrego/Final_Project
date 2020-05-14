import React from 'react';
import { Parallax } from 'react-parallax';
import parallaxImg from '../../images/parallax.jpg'
import './header.scss'
import MyNav from '../NavBar/MyNav';
// import Gallery from '../../pages/Gallery/Gallery.js';
import Selection from '../Selection/Selection.js';
import { Container, Row, Col } from 'react-bootstrap';

const styles = {
    fontFamily: "sans-serif",
  };
  const insideStyles = {
    background: "transparent",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    letterSpacing: "3px",
    fontSize: "80px",
    fontFamily: "roboto",
    color: "#fff"
    
  };

  

const Header = () => (
  <Container fluid>
    <Row>
      <Col>
        <div style={styles}>
          <MyNav />
          <Parallax bgImage={parallaxImg} strength={600}>
            <div style={{ height: 860, width: 500 }}>
            <div className="frame">
              <div className="circle"></div>
              <div className="line left"></div>
              <div className="line right"></div>
              <div className="bracket left"></div>
              <div className="bracket right"></div>
              <div className="small top">Wood</div>
              <div className="big">Campbell</div>
              <div className="small bottom">Designs</div>
              <div className="hide top"></div>
              <div className="hide bottom"></div>
</div>
            </div>
          </Parallax>
        </div>
      </Col>
    </Row>

    <Row>
      <Col>
      <div>
      <Selection />
      </div>
      </Col>
    </Row>
  </Container>
  
  

);
export default Header;