import React, { useState } from "react";
import { Col, Row, Container, Jumbotron } from "react-bootstrap";
import API from '../../utils/API.js'
import { Link } from "react-router-dom";
import FormBtn from '../FormBtn/FormBtn.js'
import Dashboard from '../../pages/Dashboard'


function Login() {
  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
    console.log(formObject
    )
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject)
    // if (!formObject.user && formObject.password) {
        API.postUser({
          user: formObject.user,
          password: formObject.password
        })
          .then(res => {
            res.redirect('http://localhost:3000/dashboard')
            // if (res.data.user === formObject.user          // };


          })
          .catch(err => console.log(err))
    //   }
    // else(
    //   console.log("the end")
    // )
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <form>
              <div>


                <label>Username:</label>
                <input id="un" type="text" name="user" onChange={handleInputChange} />
              </div>
              <div>
                <label>Password:</label>
                <input id="pw" type="password" name="password" onChange={handleInputChange} />
              </div>
              <Link to={"/dashboard" + formObject._id}>
                <strong>
                  {formObject.user} by {formObject.password}
                </strong>
              </Link>
              {/* <div> */}
              <FormBtn

                onClick={handleFormSubmit}
              >
                Sign in
              </FormBtn>
              {/* <input type="submit" onSubmit={()=>handleFormSubmit} value="Log In"/>
                </div> */}
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
