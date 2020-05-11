import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useGlobalContext } from "../../utils/GlobalState.js";
import logo from '../../images/logo.png';
import './form5.scss';




export default function Form5() {

    const [state, dispatch] = useGlobalContext();

    function updateState(event) {
        dispatch({ type: event.target.name, value: event.target.value })
    }

    return (
        <div>
            <Row>
                <Col>
                    <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
                </Col>
            </Row>
            <Row>
                <Col className='text-center mb-4'>
                    <h1>Handles</h1>
                </Col>
            </Row>
            <Row className='mb-4'>

                <Col xs={4}>
                    <div className='handle1'></div>
                    <div className="inputGroup">
                        <input id="radio1" type="radio" name="handle" value="Square" onChange={updateState} />
                        <label for="radio1">Square</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='handle2'></div>
                    <div className="inputGroup">
                        <input id="radio2" type="radio" name="handle" value="Round" onChange={updateState} />
                        <label for="radio2">Round</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='handle3'></div>
                    <div className="inputGroup">
                        <input id="radio3" type="radio" name="handle" value="Round with Latch" onChange={updateState} />
                        <label for="radio3">With Latch</label>
                    </div>
                </Col>
            </Row>


        </div>
    );

}