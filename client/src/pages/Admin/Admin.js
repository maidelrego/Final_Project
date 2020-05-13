import React, {useEffect, useState} from 'react';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';
import { useGlobalContext } from "../../utils/GlobalState.js";
import DeleteBtn from '../../components/DeleteBtn/index.js';
import { List, ListItem } from "../../components/List";
import API from "../../utils/API.js";
import './admin.css';






export default function Admin() {

    const [state, dispatch] = useGlobalContext();
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        loadQuotes()
      }, [])

      function loadQuotes() {
        API.getQuotes()
          .then(res => setQuotes(res.data))
          .catch(err => console.log(err));
      };

    function deleteQuote(id) {
        API.deleteQuote(id)
            .then(res => loadQuotes())
            .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row className='admin-head'>
                <Col>
                    <h2>Josh Admin Panel</h2>
                </Col>
                <Col>
                    <p className='float-right mr-5 logout'><i class="fas fa-sign-out-alt"></i>Log Out</p>
                </Col>
            </Row>
        <Row>
            <Col className='p-0'>
                <Jumbotron>
                    <h2 className='text-center'>Quotes</h2>
                </Jumbotron>
            </Col>
        </Row>
        <Row>
        <Col className='p-0'>
            {quotes.length ? (
              <List>
                {quotes.map(quote => (
                  <ListItem key={quote._id}>
                    
                      <strong>
                        {quote.firstName} {quote.lastName}
                      </strong>
                    
                    <DeleteBtn onClick={() => deleteQuote(quote._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          </Row>
          </Container>
    );

}