/* eslint-disable linebreak-style */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import API from "../../utils/API.js";

function Detail() {
  const [quotes, setQuotes] = useState([]);

  const {id} = useParams();
  useEffect(() => {
    API.getQuote(id)
      .then(res => setQuotes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          {/* <div><img className='logo mb-3' alt={logo} src={logo}></img></div> */}
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-4'>
          <h1>Review</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h3 className='caption'>Your Name:</h3><p>{quotes.firstName} {quotes.lastName}</p>
          <h3 className='caption'>Email:</h3><p>{quotes.email}</p>
          <h3 className='caption'>Phone Number:</h3><p>{quotes.phoneNumber}</p>
          <h3 className='caption'>Address:</h3><p>{quotes.address} {quotes.address2} {quotes.city} {quotes.state} {quotes.zip} </p>
        </Col>

        <Col xs={6}>
          <h3 className='caption'>Dimensions:</h3>
          <h5>Width (Inches):</h5> <p>{quotes.doorDesign}</p>
          <h5>Height (Inches):</h5> <p>{quotes.doorDesign}</p>
        </Col>

      </Row>
      <hr />
      <Row className='mt-4'>
        <Col xs={3}>
          <h3 className='caption'>Finish:</h3><p>{quotes.finishColor}</p>
        </Col>

        <Col xs={3}>
          <h3 className='caption'>Design:</h3><p>{quotes.doorDesign}</p>
        </Col>

        <Col xs={3}>
          <h3 className='caption'>Kit:</h3><p>{quotes.doorKit}</p>
        </Col>

        <Col xs={3}>
          <h3 className='caption'>Handle:</h3><p>{quotes.handle}</p>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
