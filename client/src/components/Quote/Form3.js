import React from 'react';
import { Row, Col} from 'react-bootstrap';
import './form3.scss';




export default function Form3() {

    return (
        <div>
            <h1 className='display-4 text-center'>Door Design</h1>
            <p className='text-center mb-5'>All our doors are made out of high grade cabinet pine</p>
            <Row className='mb-4'>

                <Col xs={4}>
                    <div className='design1'></div>
                    <div class="inputGroup">
                        <input id="radio1" name="radio" type="radio" />
                        <label for="radio1">White</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='design2'></div>
                    <div class="inputGroup">
                        <input id="radio2" name="radio" type="radio" />
                        <label for="radio2">Grey</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='design3'></div>
                    <div class="inputGroup">
                        <input id="radio3" name="radio" type="radio" />
                        <label for="radio3">Easter Blue</label>
                    </div>
                </Col>
            </Row>

            <Row className='mb-4'>

                <Col xs={6}>
                    <div className='design4'></div>
                    <div class="inputGroup">
                        <input id="radio4" name="radio" type="radio" />
                        <label for="radio4">White</label>
                    </div>
                </Col>

                <Col xs={6}>
                    <div className='design5'></div>
                    <div class="inputGroup">
                        <input id="radio5" name="radio" type="radio" />
                        <label for="radio5">Grey</label>
                    </div>
                </Col>
            </Row>
        </div>
    );

}