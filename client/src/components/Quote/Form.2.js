import React from 'react';
import { Row, Col, Form, Container } from 'react-bootstrap';

import './form2.css'

export default function Form2() {

  return (
    <div>
    <h1 className='display-3 text-center mb-3'>Paints</h1>
    <Row>
      
      <Col md={4}>
        <div className='paint'></div>
        <div className='container'>
        <div class="form-check form-check-inline custom-radio">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
          <label class="form-check-label" for="inlineRadio1">White</label>
        </div>
        </div>
      </Col>

      <Col md={4}>
        <div className='gray'></div>
        <div class="form-check form-check-inline custom-radio">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
          <label class="form-check-label" for="inlineRadio2">Gray</label>
        </div>
      </Col>

      <Col md={4}>
        <div className='paint'></div>
        <div class="form-check form-check-inline custom-radio">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
          <label class="form-check-label" for="inlineRadio3">Easter Blue</label>
        </div>
      </Col>
    </Row>
    </div>
  );

}