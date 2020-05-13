import React, { useState } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { useGlobalContext } from "../../utils/GlobalState.js";
import logo from '../../images/logo.png';
import './form1.css'

export default function Form1() {
  const [validated, setValidated] = useState(false);

  const [state, dispatch] = useGlobalContext();


  const handleSubmit = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    
  };

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
          <h1>Info</h1>
        </Col>
      </Row>


      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="5">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" name="firstName" placeholder="First name" onChange={updateState} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="5">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" name="lastName" placeholder="Last name" onChange={updateState} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="2">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control required type="text" placeholder="555-555-5555" name="phoneNumber" onChange={updateState} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Phone Number Missing!</Form.Control.Feedback>
          </Form.Group>

        </Form.Row>

        <Form.Row>

          <Form.Group as={Col} md="12">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="@example.com" name="email" onChange={updateState} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
          </Form.Group>

        </Form.Row>
        <hr></hr>
        <h3 className="Display-3">Optional</h3>

        <Form.Row>
          <Form.Group as={Col} md="12">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control type="text" placeholder="Address" name="address" onChange={updateState} />
          </Form.Group>

          <Form.Group as={Col} md="12">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control type="text" placeholder="Address 2" name="address2" onChange={updateState} />
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" name="city" onChange={updateState} />
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" name="state" onChange={updateState} />
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip" name="zip" onChange={updateState} />
          </Form.Group>

        </Form.Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

