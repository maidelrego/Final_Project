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
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject)
    // if (!formObject.user && formObject.password) {
    API.postUser({
      username: formObject.user,
      password: formObject.password
    })
      .then(
        res => {
          //   API.getUser(res.data.id)
          //   // res.redirect('/dashboard')
          //   // return res.data
          console.log(res);
          // }
          // function () {
          if (res.status === 200) {
            if (res.data.role === "admin") {
              window.location.replace('/admin')
            } else {
              // window.location.replace('/')
              console.log("denied!")

            }
          }
          else {
            console.log("plz don't hack us")
          }
        }
          
          )
          .catch (err => console.log(err))
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
