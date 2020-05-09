import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';




export default function Form1() {
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>

        <Form.Group as={Col} md="5">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="5">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="Last name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="2">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control required type="text" placeholder="555-555-5555" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Phone Number Missing!</Form.Control.Feedback>
        </Form.Group>

      </Form.Row>

      <Form.Row>

      <Form.Group as={Col} md="12">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="text" placeholder="@example.com" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
        </Form.Group>

      </Form.Row>
      <hr></hr>
      <h1 className="Display-3">Optional</h1>

      <Form.Row>
        <Form.Group as={Col} md="12">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>

        <Form.Group as={Col} md="12">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control type="text" placeholder="Address 2" />
        </Form.Group>
        
        <Form.Group as={Col} md="4">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type="text" placeholder="Zip" />
        </Form.Group>
        
      </Form.Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

