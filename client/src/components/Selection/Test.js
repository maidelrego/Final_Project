import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import seletcion1 from '../../images/Design1.jpg'
import './test.scss';


export default function MyNav() {

    return (
      <Container fluid>
          <Row>
             
            <div className='otro'><img className="selection" alt={seletcion1} src={seletcion1}></img></div>
              
            
            <div><img className="selection" alt={seletcion1} src={seletcion1}></img></div>
              
              
            <div><img className="selection" alt={seletcion1} src={seletcion1}></img></div>
              
              
            <div><img className="selection" alt={seletcion1} src={seletcion1}></img></div>
              
          </Row>
      </Container>
    );

}