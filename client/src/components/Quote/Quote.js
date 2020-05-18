import React from "react";
// import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Container, Form, Col, Row } from "react-bootstrap";
import API from "../../utils/API.js";
import logo from "../../images/logo.png";
import { useGlobalContext } from "../../utils/GlobalState.js";
import "./quote.scss";

function getSteps() {
  return ["Info", "Finish", "Door Design", "Barn Door Kit", "Handle", "Review"];
}

export default function VerticalLinearStepper() {
  const [state, dispatch] = useGlobalContext();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function updateState(event) {
    dispatch({ type: event.target.name, value: event.target.value });
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    if (activeStep === 5) {
      API.saveQuote({
        firstName: state.firstName,
        lastName: state.lastName,
        phoneNumber: state.phoneNumber,
        address: state.address,
        address2: state.address2,
        email: state.email,
        city: state.city,
        state: state.state,
        zip: state.zip,
        finishColor: state.finishColor,
        doorDesign: state.doorDesign,
        doorKit: state.doorKit,
        handle: state.handle,
      })
        .then(() => alert("finished"))
        .catch((err) => console.log(err));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div>
            <Row>
              <Col>
                <div>
                  <img className="logo mb-3" alt={logo} src={logo}></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mb-4">
                <h1>Info</h1>
              </Col>
            </Row>
            <Form>
              <Form.Row>
                <Form.Group as={Col} md="5">
                  <Form.Label>First name*</Form.Label>
                  <Form.Control
                    name="firstName"
                    placeholder="First Name (required)"
                    onChange={updateState}
                  />
                </Form.Group>

                <Form.Group as={Col} md="5">
                  <Form.Label>First name*</Form.Label>
                  <Form.Control
                    name="lastName"
                    placeholder="Last Name(required)"
                    onChange={updateState}
                  />
                </Form.Group>

                <Form.Group as={Col} md="2">
                  <Form.Label>Phone Number*</Form.Label>
                  <Form.Control
                    placeholder="(required)"
                    name="phoneNumber"
                    onChange={updateState}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="12">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    placeholder="Email (required)"
                    name="email"
                    onChange={updateState}
                  />
                </Form.Group>
              </Form.Row>
              <hr></hr>
              <h3 className="Display-3">Optional</h3>

              <Form.Row>
                <Form.Group as={Col} md="12">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    name="address"
                    onChange={updateState}
                  />
                </Form.Group>

                <Form.Group as={Col} md="12">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address 2"
                    name="address2"
                    onChange={updateState}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={updateState}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    onChange={updateState}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    onChange={updateState}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </div>
        );
      case 1:
        return (
          <div>
            <Row>
              <Col>
                <div>
                  <img className="logo mb-3" alt={logo} src={logo}></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mb-4">
                <h1>Finish</h1>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col xs={4}>
                <div className="white"></div>
                <div className="inputGroup">
                  <input
                    id="radio1"
                    type="radio"
                    name="finishColor"
                    value="White Paint"
                    onChange={updateState}
                  />
                  <label htmlFor="radio1">White</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="grey"></div>
                <div className="inputGroup">
                  <input
                    id="radio2"
                    type="radio"
                    name="finishColor"
                    value="Grey Paint"
                    onChange={updateState}
                  />
                  <label htmlFor="radio2">Grey</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="easter"></div>
                <div className="inputGroup">
                  <input
                    id="radio3"
                    type="radio"
                    name="finishColor"
                    value="Easter Blue Paint"
                    onChange={updateState}
                  />
                  <label htmlFor="radio3">Easter</label>
                </div>
              </Col>
            </Row>
            <h1 className="text-center mb-4">Stains</h1>
            <Row className="mb-5">
              <Col xs={4}>
                <div className="stain-white"></div>
                <div className="inputGroup">
                  <input
                    id="radio4"
                    type="radio"
                    name="finishColor"
                    value="White Stain"
                    onChange={updateState}
                  />
                  <label htmlFor="radio4">White</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="stain-grey"></div>
                <div className="inputGroup">
                  <input
                    id="radio5"
                    type="radio"
                    name="finishColor"
                    value="Grey Stain"
                    onChange={updateState}
                  />
                  <label htmlFor="radio5">Grey</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="stain-brown"></div>
                <div className="inputGroup">
                  <input
                    id="radio6"
                    type="radio"
                    name="finishColor"
                    value="Medium Brown Stain"
                    onChange={updateState}
                  />
                  <label htmlFor="radio6">M-Brown</label>
                </div>
              </Col>
            </Row>
          </div>
        );
      case 2:
        return (
          <div>
            <Row>
              <Col>
                <div>
                  <img className="logo mb-3" alt={logo} src={logo}></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mb-4">
                <h1>Door Design</h1>
              </Col>
            </Row>
            <p className="text-center mb-5">
              All our doors are made out of high grade cabinet pine
            </p>
            <Row className="mb-4">
              <Col xs={4}>
                <div className="design1"></div>
                <div className="inputGroup">
                  <input
                    id="radio1"
                    type="radio"
                    name="doorDesign"
                    value="Arrow Door"
                    onChange={updateState}
                  />
                  <label htmlFor="radio1">Arrow</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="design2"></div>
                <div className="inputGroup">
                  <input
                    id="radio2"
                    type="radio"
                    name="doorDesign"
                    value="Chevron Door"
                    onChange={updateState}
                  />
                  <label htmlFor="radio2">Chevron</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="design3"></div>
                <div className="inputGroup">
                  <input
                    id="radio3"
                    type="radio"
                    name="doorDesign"
                    value="Multiple X Door"
                    onChange={updateState}
                  />
                  <label htmlFor="radio3">Multiple X</label>
                </div>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col xs={6}>
                <div className="design4"></div>
                <div className="inputGroup">
                  <input
                    id="radio4"
                    type="radio"
                    name="doorDesign"
                    value="Curved Door"
                    onChange={updateState}
                  />
                  <label htmlFor="radio4">Curved</label>
                </div>
              </Col>

              <Col xs={6}>
                <div className="design5"></div>
                <div className="inputGroup">
                  <input
                    id="radio5"
                    type="radio"
                    name="doorDesign"
                    value="Paneled Door"
                    onChange={updateState}
                  />
                  <label htmlFor="radio5">Paneled</label>
                </div>
              </Col>
            </Row>
          </div>
        );
      case 3:
        return (
          <div>
            <Row>
              <Col>
                <div>
                  <img className="logo mb-3" alt={logo} src={logo}></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mb-4">
                <h1>Barn Door Kit</h1>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={4}>
                <div className="kit1"></div>
                <div className="inputGroup">
                  <input
                    id="radio1"
                    type="radio"
                    name="doorKit"
                    value="J Shape Hanger"
                    onChange={updateState}
                  />
                  <label htmlFor="radio1">J Shape</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="kit2"></div>
                <div className="inputGroup">
                  <input
                    id="radio2"
                    type="radio"
                    name="doorKit"
                    value="Rhombic Shape Hanger"
                    onChange={updateState}
                  />
                  <label htmlFor="radio2">Rhombic</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="kit3"></div>
                <div className="inputGroup">
                  <input
                    id="radio3"
                    type="radio"
                    name="doorKit"
                    value="Big Wheel Hanger"
                    onChange={updateState}
                  />
                  <label htmlFor="radio3">Big Wheel</label>
                </div>
              </Col>
            </Row>
          </div>
        );
      case 4:
        return (
          <div>
            <Row>
              <Col>
                <div>
                  <img className="logo mb-3" alt={logo} src={logo}></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mb-4">
                <h1>Handles</h1>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col xs={4}>
                <div className="handle1"></div>
                <div className="inputGroup">
                  <input
                    id="radio1"
                    type="radio"
                    name="handle"
                    value="Square"
                    onChange={updateState}
                  />
                  <label htmlFor="radio1">Square</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="handle2"></div>
                <div className="inputGroup">
                  <input
                    id="radio2"
                    type="radio"
                    name="handle"
                    value="Round"
                    onChange={updateState}
                  />
                  <label htmlFor="radio2">Round</label>
                </div>
              </Col>

              <Col xs={4}>
                <div className="handle3"></div>
                <div className="inputGroup">
                  <input
                    id="radio3"
                    type="radio"
                    name="handle"
                    value="Round with Latch"
                    onChange={updateState}
                  />
                  <label htmlFor="radio3">With Latch</label>
                </div>
              </Col>
            </Row>
          </div>
        );

      case 5:
        return (
          <Form className="text-center mb-5" onSubmit={handleNext}>
            <Row>
              <Col>
                <div>
                  <img className="logo mb-3" alt={logo} src={logo}></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center mb-4">
                <h1>Review</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <h3 className="caption">Your Name:</h3>
                <p>
                  {state.firstName} {state.lastName}
                </p>
                <h3 className="caption">Email:</h3>
                <p>{state.email}</p>
                <h3 className="caption">Phone Number:</h3>
                <p>{state.phoneNumber}</p>
                <h3 className="caption">Address:</h3>
                <p>
                  {state.address} {state.address2} {state.city} {state.state}{" "}
                  {state.zip}{" "}
                </p>
              </Col>

              <Col xs={6}>
                <h3 className="caption">Dimensions:</h3>
                <h5>Width (Inches):</h5> <p>{state.doorDesign}</p>
                <h5>Height (Inches):</h5> <p>{state.doorDesign}</p>
              </Col>
            </Row>
            <hr />
            <Row className="mt-4">
              <Col xs={3}>
                <h3 className="caption">Finish:</h3>
                <p>{state.finishColor}</p>
              </Col>

              <Col xs={3}>
                <h3 className="caption">Design:</h3>
                <p>{state.doorDesign}</p>
              </Col>

              <Col xs={3}>
                <h3 className="caption">Kit:</h3>
                <p>{state.doorKit}</p>
              </Col>

              <Col xs={3}>
                <h3 className="caption">Handle:</h3>
                <p>{state.handle}</p>
              </Col>
            </Row>
          </Form>
        );

      default:
        return <h2>Nothing to display</h2>;
    }
  }

  // STEPPER FROM MATERIAL UI

  return (
    <Container>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    disabled={
                      !(
                        state.firstName &&
                        state.lastName &&
                        state.phoneNumber &&
                        state.email
                      )
                    }
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0}>
          <Typography>All steps completed - you&apos;re finished</Typography>
        </Paper>
      )}
    </Container>
  );
}
