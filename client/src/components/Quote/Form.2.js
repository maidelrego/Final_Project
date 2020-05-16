import React from "react";
import { Row, Col } from "react-bootstrap";
import { useGlobalContext } from "../../utils/GlobalState.js";
import logo from "../../images/logo.png";

import "./form2.scss";

export default function Form2() {

  const [state, dispatch] = useGlobalContext();

  function updateState(event) {
    dispatch({ type: event.target.name, value: event.target.value });
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
          <h1>Finish</h1>
        </Col>
      </Row>

      <Row className='mb-4'>

        <Col xs={4}>
          <div className='white'></div>
          <div className="inputGroup">
            <input id="radio1" type="radio" name="finishColor" value="White Paint" onChange={updateState} />
            <label htmlFor="radio1">White</label>
          </div>
        </Col>

        <Col xs={4}>
          <div className='grey'></div>
          <div className="inputGroup">
            <input id="radio2" type="radio" name="finishColor" value="Grey Paint" onChange={updateState} />
            <label htmlFor="radio2">Grey</label>
          </div>
        </Col>

        <Col xs={4}>
          <div className='easter'></div>
          <div className="inputGroup">
            <input id="radio3" type="radio" name="finishColor" value="Easter Blue Paint" onChange={updateState} />
            <label htmlFor="radio3">Easter</label>
          </div>
        </Col>
      </Row>
      <h1 className='text-center mb-4'>Stains</h1>
      <Row className="mb-5">

        <Col xs={4}>
          <div className='stain-white'></div>
          <div className="inputGroup">
            <input id="radio4" type="radio" name="finishColor" value="White Stain" onChange={updateState} />
            <label htmlFor="radio4">White</label>
          </div>
        </Col>

        <Col xs={4}>
          <div className='stain-grey'></div>
          <div className="inputGroup">
            <input id="radio5" type="radio" name="finishColor" value="Grey Stain" onChange={updateState} />
            <label htmlFor="radio5">Grey</label>
          </div>
        </Col>

        <Col xs={4}>
          <div className='stain-brown'></div>
          <div className="inputGroup">
            <input id="radio6" type="radio" name="finishColor" value="Medium Brown Stain" onChange={updateState} />
            <label htmlFor="radio6">M-Brown</label>
          </div>
        </Col>
      </Row>
    </div>
  );

}