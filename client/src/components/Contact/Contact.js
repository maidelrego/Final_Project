import React, {useState} from "react";
import { Row, Col, Container, Form, InputGroup } from "react-bootstrap";
import { useGlobalContext } from "../../utils/GlobalState.js";
import API from "../../utils/API.js";
import "./contact.scss";
import { useHistory } from "react-router-dom";



const About = () => {
  const [state, dispatch] = useGlobalContext();

  const [validated, setValidated] = useState(false);

  function updateState(event) {
    dispatch({ type: event.target.name, value: event.target.value });
  }
  const history = useHistory();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    API.saveMessage({
      name: state.name,
      emailMessage: state.emailMessage,
      message: state.message,
    })
      .then(() => {
        history.push("/thankyou");
      })
      .catch(err => console.log(err));
  };





  return (
    <Container fluid id='contact-img'>
      <Row>
        <Col>
          <h1 className='text-center mt-4'>Contact Us</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className='p-0'>
          <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.617735054326!2d-94.2230803843744!3d39.34224552820393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c1a5ee7b4257b5%3A0xa3156fb668eedb48!2s255%20E%20Broadway%20Ave%2C%20Excelsior%20Springs%2C%20MO%2064024!5e0!3m2!1sen!2sus!4v1589251463454!5m2!1sen!2sus"></iframe>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 2 }} id='contact-form'>
          <h2 className='text-center'>Questions?</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} xs="12" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" name="name" onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">We need your Name!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} xs="12">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" name="emailMessage" onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Enter a valid Email!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} xs="12">
                <Form.Label>Message</Form.Label>
                <InputGroup>
                  <Form.Control as='textarea' name="message" rows="3" required onChange={updateState} />
                  <Form.Control.Feedback type="invalid">
                      Your Message is Missing!.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <button className='btn btn-primary btn-block' type="submit">Send</button>
          </Form>
          <hr />
          <ul className="contact-list mt-5 text-center">
            <li className="list-item"><i className="fas fa-map-marked-alt fa-2x"><span className="contact-text">Excelsior Springs | MO</span></i></li>
            <li className="list-item"><i className="fas fa-phone-alt fa-2x"><span className="contact-text"><a href="tel:1-816-500-7218" title="Give me a call">(816) 500-7218</a></span></i></li>
            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text"><a href="mailto:campbellwooddesigns@gmail.com" title="Send me an email">campbellwooddesigns@gmail.com</a></span></i></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;