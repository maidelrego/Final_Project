import React from 'react';
import { Row, Col, Form, Container } from 'react-bootstrap';

import './form2.scss'

export default function Form2() {

  return (
    <div>
      <h1 className='text-center mb-5'>Paints</h1>
      <Row className='mb-4'>

        <Col xs={4}>
          <div className='white'></div>
          <div class="inputGroup">
            <input id="radio1" name="radio" type="radio" />
            <label for="radio1">White</label>
          </div>
        </Col>

        <Col xs={4}>
          <div className='grey'></div>
          <div class="inputGroup">
            <input id="radio2" name="radio" type="radio" />
            <label for="radio2">Grey</label>
          </div>
        </Col>

        <Col xs={4}>
          <div className='easter'></div>
          <div class="inputGroup">
            <input id="radio3" name="radio" type="radio" />
            <label for="radio3">Easter Blue</label>
          </div>
        </Col>
      </Row>
      <h1 className='text-center mb-4'>Stains</h1>
      <Row className="mb-5">

        <Col xs={4}>
          <div className='stain-white'></div>
          <div class="inputGroup">
            <input id="radio4" name="radio" type="radio" />
            <label for="radio4">White</label>
          </div>
        </Col>

        <Col xs={4}>
          <div className='stain-grey'></div>
          <div class="inputGroup">
            <input id="radio5" name="radio" type="radio" />
            <label for="radio5">Grey</label>
          </div>
        </Col>

        <Col xs={4}>
          <div className='stain-brown'></div>
          <div class="inputGroup">
            <input id="radio6" name="radio" type="radio" />
            <label for="radio6">M-Brown</label>
          </div>
        </Col>
      </Row>
    </div>
  );

}