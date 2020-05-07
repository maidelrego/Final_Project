import React from 'react';
import { Row, Col, Media } from 'react-bootstrap';
import design1 from '../../images/Gallery1.jpg';
import design2 from '../../images/Gallery2.jpg';
import design3 from '../../images/Gallery3.jpg';
import './form1.scss';




export default function Form3() {

    return (
        <div>
            <h1 className='display-4 text-center'>Door Design</h1>
            <p className='text-center mb-5'>All our doors are made out of high grade cabinet pine</p>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <ul className="list-unstyled">
                        <Media as="li">
                            <img
                                width={200}
                                height={200}
                                className="mr-3 mb-3"
                                src={design1}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Name of Design</h5>
                                <label>
                                    <input type="checkbox" class="option-input checkbox" />
                                    Checkbox
                                </label>
                            </Media.Body>
                        </Media>

                        <Media as="li">
                            <img
                                width={200}
                                height={200}
                                className="mr-3 mb-3"
                                src={design2}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                            <h5>Name of Design</h5>
                               
                            </Media.Body>
                        </Media>

                        <Media as="li">
                            <img
                                width={200}
                                height={200}
                                className="mr-3 mb-5"
                                src={design3}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                            <h5>Name of Design</h5>
                                
                            </Media.Body>
                        </Media>
                    </ul>
                </Col>
            </Row>

        </div>
    );

}