import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useGlobalContext } from "../../utils/GlobalState.js";
import './form3.scss';



export default function Form3() {

    const [state, dispatch] = useGlobalContext();

    function updateState(event) {
        dispatch({ type: event.target.name, value: event.target.value })
    }

    return (
        <div>
            <h1 className='display-4 text-center'>Door Design</h1>
            <p className='text-center mb-5'>All our doors are made out of high grade cabinet pine</p>
            <Row className='mb-4'>

                <Col xs={4}>
                    <div className='design1'></div>
                    <div className="inputGroup">
                        <input id="radio1" type="radio" name="doorDesign" value="Arrow Door" onChange={updateState} />
                        <label for="radio1">Arrow</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='design2'></div>
                    <div className="inputGroup">
                        <input id="radio2" type="radio" name="doorDesign" value="Chevron Door" onChange={updateState} />
                        <label for="radio2">Chevron</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='design3'></div>
                    <div className="inputGroup">
                        <input id="radio3" type="radio" name="doorDesign" value="Multiple X Door" onChange={updateState} />
                        <label for="radio3">Multiple X</label>
                    </div>
                </Col>
            </Row>

            <Row className='mb-4'>

                <Col xs={6}>
                    <div className='design4'></div>
                    <div className="inputGroup">
                        <input id="radio4" type="radio" name="doorDesign" value="Curved Door" onChange={updateState} />
                        <label for="radio4">Curved</label>
                    </div>
                </Col>

                <Col xs={6}>
                    <div className='design5'></div>
                    <div className="inputGroup">
                        <input id="radio5" type="radio" name="doorDesign" value="Paneled Door" onChange={updateState} />
                        <label for="radio5">Paneled</label>
                    </div>
                </Col>
            </Row>
        </div>
    );

}