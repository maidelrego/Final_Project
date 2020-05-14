import React, { useEffect, useState } from "react";
import { Row, Col, Container, Jumbotron, Table, } from "react-bootstrap";
import API from "../../utils/API.js";
import "./admin.css";





export default function Admin() {

  const [quotes, setQuotes] = useState([]);
  // const [showQuote, setShowQuote] = useState(false);


  function loadQuotes() {
    API.getQuotes()
      .then(res => setQuotes(res.data))
      .catch(err => console.log(err));
    // setShowQuote(!showQuote);

  }
  useEffect(() => {
    loadQuotes();
  }, []);

  function oneQuote() {
    API.getQuote()
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }


  function deleteQuote(id) {
    API.deleteQuote(id)
      .then(res => loadQuotes())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
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
          <Jumbotron id='admin-jumbo'>
            <h2 className='text-center' id='table-header'>Quotes</h2>

            <Table responsive hover className='text-center'>
              {quotes.length ? (
                <tbody>
                  {quotes.map(quote => (
                    <tr key={quote._id}>

                      <td>{quote.firstName} {quote.lastName}</td>
                      <td>
                        <button className='btn' onClick={() => oneQuote()}>View Quote</button>

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
      <Row>
        <Col className='p-0'>
          {/* {showQuote && <div>{quotes.map(quote => (<div key={quote._id}><p>{quote.firstName}</p></div>))}</div>} */}
        </Col>
      </Row>
    </Container>
  );

}


