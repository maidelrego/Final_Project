import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useGlobalContext } from "../../utils/GlobalState.js";
import './form4.scss';




export default function Form4() {

    const [state, dispatch] = useGlobalContext();

    function updateState(event) {
        dispatch({type: event.target.name, value: event.target.value})
     }

    return (
      <div>
        <h1 className='display-4 text-center'>Barn Door Kit</h1>
        <Row className='mb-4'>

                <Col xs={4}>
                    <div className='kit1'></div>
                    <div class="inputGroup">
                        <input id="radio1" type="radio" name="doorKit" value="J Shape Hanger" onChange={updateState } />
                        <label for="radio1">J Shape</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='kit2'></div>
                    <div class="inputGroup">
                        <input id="radio2" type="radio" name="doorKit" value="Rhombic Shape Hanger" onChange={updateState } />
                        <label for="radio2">Rhombic</label>
                    </div>
                </Col>

                <Col xs={4}>
                    <div className='kit3'></div>
                    <div class="inputGroup">
                        <input id="radio3" type="radio" name="doorKit" value="Big Wheel Hanger" onChange={updateState } />
                        <label for="radio3">Big Wheel</label>
                    </div>
                </Col>
            </Row>

        
      </div>   
    );

}