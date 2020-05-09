import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './form4.scss';




export default function Form4() {

    return (
      <div>
        <h1 className='display-4 text-center'>Barn Door Kit</h1>
        <Row className='mb-4'>

                <Col xs={4}>
                    <div className='kit1'></div>
                    <div class="inputGroup">
                        <input id="radio1" name="radio" type="radio" />
                        <label for="radio1">White</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='kit2'></div>
                    <div class="inputGroup">
                        <input id="radio2" name="radio" type="radio" />
                        <label for="radio2">Grey</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='kit3'></div>
                    <div class="inputGroup">
                        <input id="radio3" name="radio" type="radio" />
                        <label for="radio3">Easter Blue</label>
                    </div>
                </Col>
            </Row>

        
      </div>   
    );

}