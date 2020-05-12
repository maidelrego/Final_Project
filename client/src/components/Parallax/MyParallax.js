import React from 'react';
import { Parallax } from 'react-parallax';
import parallaxImg from '../../images/parallax.jpg'
import MyNav from '../NavBar/MyNav';
import { Row, Col } from 'react-bootstrap';
import './parallaxStyle.scss'



const MyParallax = () => (
  <Row>
    <Col className='p-0'>
      <MyNav />
      <Parallax bgImage={parallaxImg} strength={700}>
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
    </Col>
  </Row>

);
export default MyParallax;