import React, { useEffect, useState } from "react";
import { Row, Col, Container, Jumbotron, Table, } from "react-bootstrap";
import API from "../../utils/API.js";
import { Link } from "react-router-dom";
import "./admin.css";





export default function Admin() {

  const [quotes, setQuotes] = useState([]);

  function loadQuotes() {
    API.getQuotes()
      .then(res => API.setQuotes(res.data))
      .catch(err => console.log(err));


  }
  useEffect(() => {
    loadQuotes();
  }, []);


  function deleteQuote(id) {
    API.deleteQuote(id)
      .then(res => loadQuotes(res))
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row className='admin-head'>
        <Col>
          <h2 id='josh-text'>Josh Campbell</h2>
        </Col>
        <Col>
          <button className='btn logout'><a href="/logout"><i className="fas fa-sign-out-alt"></i>Log Out</a></button>
        </Col>
      </Row>
      <Row>
        <Col className='p-0'>
          <Jumbotron id='admin-jumbo'>
            <h2 className='text-center' id='table-header'>Quotes</h2>

            <Table responsive hover className='text-center'>
              {quotes.length ? (
                <tbody>
                  {quotes.map(quote => (
                    <tr key={quote._id}>

                      <td>{quote.firstName} {quote.lastName}</td>
                      <td>
                        <Link className='btn' to={"/admin/" + quote._id}>View Quote</Link>
                        <button className='btn' onClick={() => deleteQuote(quote._id)}><i className="fas fa-trash delete"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Table>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );

}


