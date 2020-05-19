import React, { useEffect, useState } from "react";
import { Row, Col, Container, Jumbotron, Table, } from "react-bootstrap";
import Dashboard from "./Admin-Dashboard/Dashboard.js"
import API from "../../utils/API.js";
import { Link } from "react-router-dom";
import "./admin.css";

export default function Admin() {

  const [quotes, setQuotes] = useState([]);

  function loadQuotes() {
    API.getQuotes()
<<<<<<< HEAD
      .then(res => {
        console.log(res);
        setQuotes(res);
      })
=======
      .then(res => setQuotes(res.data))
>>>>>>> master
      .catch(err => console.log(err));


  }
  useEffect(() => {
    loadQuotes();
  }, []);

  function handleLogout(e) {
    e.preventDefault();
    API.logout()
  }


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
<<<<<<< HEAD
          <button className='btn logout' onSubmit={handleLogout}><i className="fas fa-sign-out-alt"></i>Log Out</button>
=======
          <button className='btn logout'><i className="fas fa-sign-out-alt"></i>Log Out</button>
>>>>>>> master
        </Col>
      </Row>
      <Row>
        <Col className='p-0'>
          <Jumbotron>
            <h2 className='text-center' id='table-header'>Quotes</h2>
            <Dashboard />
          </Jumbotron>
<<<<<<< HEAD
          <Table responsive hover className='text-center'>
            {quotes.length ? (
              <tbody>
                {quotes.map(quote => (
                  <tr key={quote._id}>
                    <td>{quote.date}</td>
                    <td>{quote.firstName} {quote.lastName}</td>
                    <td>
                      <Link className='btn' to={"/admin/" + quote._id}>View Quote</Link>
                      <button className='btn' onClick={() => deleteQuote(quote._id)}><i className="fas fa-trash delete"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
=======
          <Jumbotron>
            <Table responsive hover className='text-center'>
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
>>>>>>> master
                <caption>
                  <h3>No Results to Display</h3>
                </caption>
              )}
<<<<<<< HEAD
          </Table>

=======
            </Table>
          </Jumbotron>
>>>>>>> master
        </Col>
      </Row>
    </Container>
  );

}