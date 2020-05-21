import React, { useEffect, useState } from "react";
import { Row, Col, Container, Jumbotron, Table } from "react-bootstrap";
import API from "../../utils/API.js";
import { Link, Redirect } from "react-router-dom";
import "./admin.css";

export default function Admin() {
  const [quotes, setQuotes] = useState([]);
  const [messages, setMessages] = useState([]);

  function loadQuotes() {
    API.getQuotes()
      .then((res) => setQuotes(res.data))
      .catch((err) => console.log(err));
  }

  function loadMessages() {
    API.getMessages()
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    // checkLogin();
    loadQuotes();
  }, []);


  function handleLogout(e) {
    e.preventDefault();
    API.logout().then(() => {
      window.location.replace("/login");
    });
  }


  useEffect(() => {
    loadMessages();
  }, []);

  function deleteMessage(id) {
    API.deleteMessage(id)
      .then((res) => loadMessages())
      .catch((err) => console.log(err));
  }

  function deleteQuote(id) {
    API.deleteQuote(id)
      .then((res) => loadQuotes())
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <Row className="admin-head">
        <Col>
          <h2 id="josh-text">Josh Campbell</h2>
        </Col>
        <Col>

          <button className='btn logout' onClick={handleLogout} ><i className="fas fa-sign-out-alt"></i>Log Out</button>

        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          <Jumbotron>
            <h1 className="text-center">Messages</h1>
          </Jumbotron>
          <Jumbotron>
            <Table responsive className="text-center">
              {messages.length ? (
                <tbody>
                  {messages.map((messages) => (
                    <tr key={messages._id}>
                      <td className="td-admin">{messages.date}</td>
                      <td className="td-admin">{messages.name}</td>
                      <td>
                        <Link className="btn" to={"/admin/" + messages._id}>
                          View Quote
                        </Link>
                        <button
                          className="btn"
                          onClick={() => deleteMessage(messages._id)}
                        >
                          <i className="fas fa-trash delete"></i>
                        </button>
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

      <Row>
        <Col className="p-0">
          <Jumbotron>
            <h1 className="text-center">Quotes</h1>
          </Jumbotron>
          <Jumbotron>
            <Table responsive className="text-center">
              {quotes.length ? (
                <tbody>
                  {quotes.map((quote) => (
                    <tr key={quote._id}>
                      <td className="td-admin">{quote.date}</td>
                      <td className="td-admin">
                        {quote.firstName} {quote.lastName}
                      </td>
                      <td>
                        <Link className="btn" to={"/admin/" + quote._id}>
                          View Quote
                        </Link>
                        <button
                          className="btn"
                          onClick={() => deleteQuote(quote._id)}
                        >
                          <i className="fas fa-trash delete"></i>
                        </button>
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
