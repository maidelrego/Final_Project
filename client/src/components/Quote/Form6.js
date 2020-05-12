import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useGlobalContext } from "../../utils/GlobalState.js";
import logo from "../../images/logo.png";
import "./form6.css";
import API from "../../utils/API";

export default function Form6() {
  const [state, dispatch] = useGlobalContext();
  function handleFormSubmit(event) {
    event.preventDefault();
    API.saveQuote({
      firstName: state.firstName,
      lastName: state.lastName,
      phoneNumber: state.phoneNumber,
      address: state.address,
      address2: state.address2,
      email: state.email,
      city: state.city,
      state: state.state,
      zip: state.zip,
      finishColor: state.finishColor,
      doorDesign: state.doorDesign,
      doorKit: state.doorKit,
      handle: state.handle,
    })
      //   .then((res) => loadQuotes())
      .catch((err) => console.log(err));
  }

  return (
    <Form className="text-center mb-5">
      <Row>
        <Col>
          <div>
            <img className="logo mb-3" alt={logo} src={logo}></img>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-4">
          <h1> Review </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h3 className="caption"> Your Name: </h3>
          <p>
            {state.firstName} {state.lastName}
          </p>
          <h3 className="caption"> Email: </h3> <p> {state.email} </p>
          <h3 className="caption"> Phone Number: </h3>
          <p> {state.phoneNumber} </p> <h3 className="caption"> Address: </h3>
          <p>
            {state.address} {state.address2} {state.city} {state.state}
            {state.zip}
          </p>
        </Col>
        <Col xs={6}>
          <h3 className="caption"> Dimensions: </h3> <h5> Width(Inches): </h5>
          <p>{state.doorDesign}</p>
          <h5> Height(Inches): </h5> <p>{state.doorDesign}</p>
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col xs={3}>
          <h3 className="caption"> Finish: </h3> <p> {state.finishColor} </p>
        </Col>
        <Col xs={3}>
          <h3 className="caption"> Design: </h3> <p> {state.doorDesign} </p>
        </Col>
        <Col xs={3}>
          <h3 className="caption"> Kit: </h3> <p> {state.doorKit} </p>
        </Col>
        <Col xs={3}>
          <h3 className="caption"> Handle: </h3> <p> {state.handle} </p>
        </Col>
        <Col>
          <Button
            as="input"
            variant="primary"
            size="lg"
            type="submit"
            value="Submit"
            onClick={handleFormSubmit}
          ></Button>
        </Col>
      </Row>
    </Form>
  );
}
