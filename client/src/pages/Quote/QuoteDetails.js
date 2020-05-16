/* eslint-disable linebreak-style */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";
import API from "../../utils/API.js";
import logo from "../../images/logo.png";
import "./quote.scss";

function Detail() {
  const [quotes, setQuotes] = useState([]);

  const {id} = useParams();
  useEffect(() => {
    API.getQuote(id)
      .then(res => setQuotes(res.data))
      .catch(err => console.log(err));
  }, []);


  return (
    <Container fluid className='mt-5'>
      <Jumbotron>
        <Row>
          <Col>
            <button>sd</button>
            <div><img className='logo mb-3' alt={logo} src={logo}></img></div>
          </Col>
        </Row>
        <Row>
          <Col className='text-center mb-4'>
            <h1>Review</h1>
          </Col>
        </Row>
        <Row className="text-center">
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
          <Col xs={4}>
            <div><h3 className='caption'>Finish Color:</h3></div>
            <div className={quotes.finishColor}></div>
            <div className="inputGroup">
              <p>{quotes.finishColor}</p>
            </div>
          </Col>

          <Col xs={4}>
            <div><h3 className='caption'>Door Design:</h3></div>
            <div className={quotes.doorDesign}></div>
            <div className="inputGroup">
              <p>{quotes.doorDesign}</p>
            </div>
          </Col>

        </Row>
        <Row>

          <Col xs={4}>
            <div><h3 className='caption'>Door Kit:</h3></div>
            <div className={quotes.doorKit}></div>
            <div className="inputGroup">
              <p>{quotes.doorKit}</p>
            </div>
          </Col>

          <Col xs={4}>
            <div><h3 className='caption'>Handle:</h3></div>
            <div className={quotes.handle}></div>
            <div className="inputGroup">
              <p>{quotes.handle}</p>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}


export default Detail;
