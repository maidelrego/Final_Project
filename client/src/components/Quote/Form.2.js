import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';




export default function Form2() {

    return (
      <div>
        <h1 className='display-4 text-center'>Finish</h1>
        <p className='text-center mb-5'>All our doors are made out of high grade cabinet pine</p>
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <Form className='justify-content-center'>
          <Form.Group>
            <Form.Label>Wood Finish</Form.Label>
            <Form.Control as="select" custom>
              <option>Stain</option>
              <option>Paint</option>
            </Form.Control>
          </Form.Group>
        </Form>
        </Col>
        </Row>
        
      </div>   
    );

}