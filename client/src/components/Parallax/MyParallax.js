import React from 'react';
import { Parallax } from 'react-parallax';
import parallaxImg from '../../images/parallax.jpg'
import MyNav from '../NavBar/MyNav';
import { Row, Col } from 'react-bootstrap';
import './parallaxStyle.scss'



const MyParallax = () => (
  <Row>
    <Col>
      <MyNav />
      <Parallax bgImage={parallaxImg} strength={700}>
        <div style={{ height: 860, width: 500 }}>
          <div class="frame">
            <div class="circle"></div>
            <div class="line left"></div>
            <div class="line right"></div>
            <div class="bracket left"></div>
            <div class="bracket right"></div>
            <div class="small top">Wood</div>
            <div class="big">Campbell</div>
            <div class="small bottom">Designs</div>
            <div class="hide top"></div>
            <div class="hide bottom"></div>
          </div>
        </div>
      </Parallax>
    </Col>
  </Row>

);
export default MyParallax;