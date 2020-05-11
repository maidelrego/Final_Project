import React from 'react';
import { Row, Col, Form, Container } from 'react-bootstrap';
import { useGlobalContext } from "../../utils/GlobalState.js";
import API from "../../utils/API.js";






export default function Form6() {

    const [state, dispatch] = useGlobalContext();

    function loadQuotes() {
        API.getQuotes()
            .then(res =>
                dispatch(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteQuote(id) {
        API.deleteQuote(id)
            .then(res => loadQuotes())
            .catch(err => console.log(err));
    }




    return (
        <Col size="md-6 sm-12">
            <Jumbotron>
                <h1>Books On My List</h1>
            </Jumbotron>
            {state.length ? (
                <List>
                    {state.map(quote => (
                        <ListItem key={quote._id}>
                            <Link to={"/quotes/" + quote._id}>
                                <strong>
                                    {quote.firstName} by {quote.lastName}
                                </strong>
                            </Link>
                            <DeleteBtn onClick={() => deleteQuote(quote._id)} />
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </Col>
    );

}