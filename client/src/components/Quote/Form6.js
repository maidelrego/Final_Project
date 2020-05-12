import React from 'react';
import { Row, Col, Form, Container } from 'react-bootstrap';
import { useGlobalContext } from "../../utils/GlobalState.js";
import logo from '../../images/logo.png';
import './form6.css';




export default function Form6() {

  const [state, dispatch] = useGlobalContext();

  return (

    <Form className='text-center mb-5'>
      <Row>
        <Col>
          <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-4'>
          <h1>Review</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h3 className='caption'>Your Name:</h3><p>{state.firstName} {state.lastName}</p>
          <h3 className='caption'>Email:</h3><p>{state.email}</p>
          <h3 className='caption'>Phone Number:</h3><p>{state.phoneNumber}</p>
          <h3 className='caption'>Address:</h3><p>{state.address} {state.address2} {state.city} {state.state} {state.zip} </p>
        </Col>

        <Col xs={6}>
          <h3 className='caption'>Dimensions:</h3>
          <h5>Width (Inches):</h5> <p>{state.doorDesign}</p>
          <h5>Height (Inches):</h5> <p>{state.doorDesign}</p>
        </Col>

      </Row>
      <hr />
      <Row className='mt-4'>
        <Col xs={3}>
          <h3 className='caption'>Finish:</h3><p>{state.finishColor}</p>
        </Col>

        <Col xs={3}>
          <h3 className='caption'>Design:</h3><p>{state.doorDesign}</p>
        </Col>

        <Col xs={3}>
          <h3 className='caption'>Kit:</h3><p>{state.doorKit}</p>
        </Col>

        <Col xs={3}>
          <h3 className='caption'>Handle:</h3><p>{state.handle}</p>
        </Col>
      </Row>

    </Form>

  );

}