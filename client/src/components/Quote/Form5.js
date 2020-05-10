import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useGlobalContext } from "../../utils/GlobalState.js";
import './form5.scss';




export default function Form5() {

    const [state, dispatch] = useGlobalContext();

    function updateState(event) {
        dispatch({ type: event.target.name, value: event.target.value })
    }

    return (
        <div>
            <h1 className='display-4 text-center'>Handles</h1>
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