/* eslint-disable linebreak-style */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container, Jumbotron, Table } from "react-bootstrap";
import API from "../../utils/API.js";
import logo from "../../images/logo.png";
import "./quoteDetails.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import { useGlobalContext } from "../../utils/GlobalState.js";

function Detail() {

  const [state, dispatch] = useGlobalContext();
  const [quotes, setQuotes] = useState([]);
  const { id } = useParams();

  function keepLogin() {
    dispatch({ type: "role", value: "admin" });

  }
  useEffect(() => {
    keepLogin();
    API.getQuote(id)
      .then(res => setQuotes(res.data))
      .catch(err => console.log(err));
  }, []);

  const useStyles = makeStyles((theme) => ({

    red: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
    },
    green: {
      color: "#fff",
      backgroundColor: green[500],
    },
  }));

  window.onbeforeunload = function () {
    return "Are you sure you want to leave?";
 }

  const classes = useStyles();

  return (
    <Container>
      <div className='text-center mt-3 mb-3'><img id='logoDetails' alt={logo} src={logo}></img></div>
      <Row id='quote-details'>
        <Col xs={4}>
          <h3 className='mt-2'>Quote Details For : </h3>
        </Col>
        <Col xs={4}>
          <h2 className=' mt-2 text-center'>{quotes.firstName} {quotes.lastName}</h2>
        </Col>
      </Row>

      <Jumbotron className='mt-4'>
        <Row>
          <Col xs={6}>
            <h3>Basic Info :</h3>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <i className="fas fa-user fa-2x iconDetail"></i>
                </ListItemAvatar>
                <ListItemText>{quotes.firstName} {quotes.lastName}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <i className="fas fa-phone-alt fa-2x iconDetail"></i>
                </ListItemAvatar>
                <ListItemText>{quotes.phoneNumber}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <i className="fas fa-envelope fa-2x iconDetail"></i>
                </ListItemAvatar>
                <ListItemText>{quotes.email}</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <i className="fas fa-address-card fa-2x iconDetail"></i>
                </ListItemAvatar>
                <ListItemText>{quotes.address} {quotes.address2} {quotes.city} {quotes.state} {quotes.zip}</ListItemText>
              </ListItem>
            </List>
          </Col>
          <Col xs={6}>
            <h3>Preferences :</h3>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <i className="fas fa-user fa-2x iconDetail"></i>
                </ListItemAvatar>
                <ListItemText>{quotes.firstName} wants {quotes.installOrDelivery}</ListItemText>
              </ListItem>
              <h3 className='mt-3'>Dimensions :</h3>
              <ListItem>
                <ListItemAvatar>
                  <i className="fas fa-ruler fa-2x iconDetail"></i>
                </ListItemAvatar>
                <ListItemText>Width : {quotes.dimensionsW}</ListItemText>
                <ListItemText>Height : {quotes.dimensionsH}</ListItemText>
              </ListItem>
            </List>
          </Col>
        </Row>
      </Jumbotron>

      <Row className='mt-3'>
        <Col>
          <Jumbotron>
            <Table responsive>
              <thead>
                <tr>
                  <th className='th-details'><h3>Finish Color</h3></th>
                  <th className='th-details'><h3>Door Design</h3></th>
                  <th className='th-details'><h3>Door Kit</h3></th>
                  <th className='th-details'><h3>Handle</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{quotes.finishColor}</td>
                  <td>{quotes.doorDesign}</td>
                  <td>{quotes.doorKit}</td>
                  <td>{quotes.handle}</td>
                </tr>
              </tbody>
            </Table>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}


export default Detail;
