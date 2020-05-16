import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './selection.scss';


export default function MyNav() {

    return (
        <Row>
            <Col>
                <div className="conatiner">
                    <div className="wrap">

                        <div className="box one">
                            <h1>GET A QUOTE</h1>
                        </div>

                        <div className="box two">
                            <h1>How we Do it</h1>
                        </div>

                        <div className="box three">
                            <h1>CREATIVITY</h1>
                        </div>

                        <div className="box four">
                            <h1>CREATIVITY</h1>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

    );

}