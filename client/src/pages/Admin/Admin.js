import React, { useEffect, useState } from "react";
import { Row, Col, Container, Jumbotron, Table, } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";
import "./admin.css";


export default function Admin() {

  const [quotes, setQuotes] = useState([]);

  function loadQuotes() {
    API.getQuotes()
      .then(res => setQuotes(res.data))
      .catch(err => console.log(err));


  }
  useEffect(() => {
    loadQuotes();
  }, []);


  function deleteQuote(id) {
    API.deleteQuote(id)
      .then(res => loadQuotes())
      .catch(err => console.log(err));
  }

  return (
    <Container>
      <Row className='admin-head'>
        <Col>
          <h2 id='josh-text'>Josh Campbell</h2>
        </Col>
        <Col>
          <button className='btn logout'><i className="fas fa-sign-out-alt"></i>Log Out</button>
        </Col>
      </Row>
      <Row>
        <Col className='p-0'>
          <Jumbotron>
            <h1 className='text-center'>Quotes</h1>
          </Jumbotron>
          <Jumbotron>
            <Table responsive className='text-center'>
              {quotes.length ? (
                <tbody>
                  {quotes.map(quote => (
                    <tr key={quote._id}>
                      <td className='td-admin'>{quote.date}</td>
                      <td className='td-admin'>{quote.firstName} {quote.lastName}</td>
                      <td>
                        <Link className='btn' to={"/admin/" + quote._id}>View Quote</Link>
                        <button className='btn' onClick={() => deleteQuote(quote._id)}><i className="fas fa-trash delete"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <caption>
                  <h3>No Results to Display</h3>
                </caption>
              )}
            </Table>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );

}


