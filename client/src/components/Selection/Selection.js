import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './selection.scss';


export default function MyNav() {

    return (
        <div>
            <Row>
                <Col>
                <div className="selection-banner">Lets do this</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div class="conatiner">
                        <div class="wrap">

                            <div class="box one">
                                <h1>GET A QUOTE</h1>
                            </div>

                            <div class="box two">
                                <h1>How we Do it</h1>
                            </div>

                            <div class="box three">
                                <h1>CREATIVITY</h1>
                            </div>

                            <div class="box four">
                                <h1>CREATIVITY</h1>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );

}