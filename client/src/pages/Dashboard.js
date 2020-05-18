import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import API from '../utils/API.js'

function Dashboard() {
    // const [user, setUser] = useState([])
    // const [formObject, setFormObject] = useState({})
  
    // // Load all books and store them with setBooks
    // useEffect(() => {
    //   userLogin()
    // }, [])
  
    // // Loads all books and sets them to books
    // function userLogin() {
    //   API.getUser()
    //     .then(res => 
    //       setUser(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };
  
  return (
    <Container fluid>
      <div>
    	<h1 className="main-title">Acme Inc. Revenue Analysis for 2015</h1>
    	<div id="interactive-dashbaord"></div>
    	<div className="chart-row">
      	<div id="country-revenue">
        	// country revenue chart here
      	</div>
    	</div>
    	<div className="chart-row">
          <div id="monthly-revenue" className="inline-chart">
        	// chart 2 here - spline
      	</div>
      	<div id="product-revenue" className="inline-chart">
        	// chart 3 here - donut
      	</div>
    	</div>
  	</div>
	
    </Container>
  );
}

export default Dashboard;
