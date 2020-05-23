import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { Container, Form, Col, Row } from "react-bootstrap";
import API from "../../utils/API.js";
import logo from "../../images/logo.png";
import { useGlobalContext } from "../../utils/GlobalState.js";
import "./quote.scss";

function getSteps() {
  return [
    "Info",
    "Finish",
    "Door Design",
    "Barn Door Kit",
    "Handle",
    "Preferences",
    "Review",
  ];
}

export default function VerticalLinearStepper() {
  const history = useHistory();
  const [state, dispatch] = useGlobalContext();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [validated, setValidated] = useState(false);

  function updateState(event) {
    dispatch({ type: event.target.name, value: event.target.value });
  }

  const handleBack = (event) => {
    event.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleNext = (event) => {
    event.preventDefault();
    if (activeStep === 0) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      }
      setValidated(true);
    }

    if (activeStep === 6) {
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
        installOrDelivery: state.installOrDelivery,
        dimensionsH: state.dimensionsH,
        dimensionsW: state.dimensionsW,
      })
        .then(() => {
          history.push("/thankyou");
        })
        .catch(err => console.log(err));
    }
    if (activeStep < 6) {
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

              <div><img className="logo mb-5" alt={logo} src={logo}></img></div>

            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-4">
              <h1>Info</h1>
            </Col>
          </Row>

          <Form noValidate validated={validated} onSubmit={handleNext} id="form0">
            <Form.Row>
              <Form.Group as={Col} md="5">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" name="firstName" placeholder="First name" value={state.firstName} onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="5">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" name="lastName" placeholder="Last name" value={state.lastName} onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="2">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="number" placeholder="555-555-5555" name="phoneNumber" value={state.phoneNumber} onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Phone Number Missing!</Form.Control.Feedback>
              </Form.Group>

            </Form.Row>

            <Form.Row>

              <Form.Group as={Col} md="12">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="@example.com" name="email" value={state.email} onChange={updateState} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Ooops!</Form.Control.Feedback>
              </Form.Group>

            </Form.Row>
            <br />
            <h3>Optional</h3>
            <p className="text-muted">We need your address if you are chosing Delivery</p>

            <Form.Row>
              <Form.Group as={Col} md="12">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control type="text" placeholder="Address" name="address" value={state.address} onChange={updateState} />
              </Form.Group>

              <Form.Group as={Col} md="12">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="text" placeholder="Address 2" name="address2" value={state.address2} onChange={updateState} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" name="city" value={state.city} onChange={updateState} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" name="state" value={state.state} onChange={updateState} />
              </Form.Group>

              <Form.Group as={Col} md="4">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="number" placeholder="Zip" name="zip" value={state.zip} onChange={updateState} />
              </Form.Group>

            </Form.Row>
            <button type="submit" className="btn btn-primary">Next</button>
          </Form>
        </div>
      );
    case 1:
      return (
        <div>
          <Row>
            <Col>

              <div><img className="logo mb-5" alt={logo} src={logo}></img></div>

            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-4">
              <h1>Finish</h1>
            </Col>
          </Row>

          <Row className="mb-4">

            <Col xs={4}>
              <div className="White"></div>
              <div className="inputGroup">

                <input id="radio1" type="radio" name="finishColor" checked={state.finishColor === "White Paint"} value="White Paint" onChange={updateState} />

                <label htmlFor="radio1">White</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Grey"></div>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="finishColor" checked={state.finishColor === "Grey Paint"} value="Grey Paint" onChange={updateState} />
                <label htmlFor="radio2">Grey</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Easter"></div>
              <div className="inputGroup">
                <input id="radio3" type="radio" name="finishColor" checked={state.finishColor === "Easter Blue Paint"} value="Easter Blue Paint" onChange={updateState} />
                <label htmlFor="radio3">Easter</label>
              </div>
            </Col>
          </Row>
          <h1 className="text-center mb-4">Stains</h1>
          <Row className="mb-5">

            <Col xs={4}>
              <div className="White-Stain"></div>
              <div className="inputGroup">
                <input id="radio4" type="radio" name="finishColor" checked={state.finishColor === "White Stain"} value="White Stain" onChange={updateState} />
                <label htmlFor="radio4">White</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Grey-Stain"></div>
              <div className="inputGroup">
                <input id="radio5" type="radio" name="finishColor" checked={state.finishColor === "Grey Stain"} value="Grey Stain" onChange={updateState} />
                <label htmlFor="radio5">Grey</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Medium"></div>
              <div className="inputGroup">
                <input id="radio6" type="radio" name="finishColor" checked={state.finishColor === "Medium Brown Stain"} value="Medium Brown Stain" onChange={updateState} />
                <label htmlFor="radio6">M-Brown</label>
              </div>
            </Col>
          </Row>
          <button className="btn" onClick={handleBack}>Back</button>
          <button type="submit" disabled={!(state.finishColor)} onClick={handleNext} className="btn btn-primary">Next</button>
        </div>
      );
    case 2:
      return (
        <div>
          <Row>
            <Col>

              <div><img className="logo mb-5" alt={logo} src={logo}></img></div>

            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-4">
              <h1>Door Design</h1>
            </Col>
          </Row>
          <p className="text-center mb-5">All our doors are made out of high grade cabinet pine</p>
          <Row className="mb-4">

            <Col xs={4}>
              <div className="Arrow"></div>
              <div className="inputGroup">
                <input id="radio1" type="radio" name="doorDesign" checked={state.doorDesign === "Arrow Door"} value="Arrow Door" onChange={updateState} />
                <label htmlFor="radio1">Arrow</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Chevron"></div>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="doorDesign" checked={state.doorDesign === "Chevron Door"} value="Chevron Door" onChange={updateState} />
                <label htmlFor="radio2">Chevron</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Multiple"></div>
              <div className="inputGroup">
                <input id="radio3" type="radio" name="doorDesign" checked={state.doorDesign === "Multiple X Door"} value="Multiple X Door" onChange={updateState} />
                <label htmlFor="radio3">Multiple X</label>
              </div>
            </Col>
          </Row>

          <Row className="mb-4">

            <Col xs={6}>
              <div className="Curved"></div>
              <div className="inputGroup">
                <input id="radio4" type="radio" name="doorDesign" checked={state.doorDesign === "Curved Door"} value="Curved Door" onChange={updateState} />
                <label htmlFor="radio4">Curved</label>
              </div>
            </Col>

            <Col xs={6}>
              <div className="Paneled"></div>
              <div className="inputGroup">
                <input id="radio5" type="radio" name="doorDesign" checked={state.doorDesign === "Paneled Door"} value="Paneled Door" onChange={updateState} />
                <label htmlFor="radio5">Paneled</label>
              </div>
            </Col>
          </Row>
          <button className="btn" onClick={handleBack}>Back</button>
          <button type="submit" disabled={!(state.doorDesign)} onClick={handleNext} className="btn btn-primary">Next</button>
        </div>
      );
    case 3:
      return (
        <div>
          <Row>
            <Col>

              <div><img className="logo mb-5" alt={logo} src={logo}></img></div>

            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-4">
              <h1>Barn Door Kit</h1>
            </Col>
          </Row>
          <Row className="mb-4">

            <Col xs={4}>
              <div className="J"></div>
              <div className="inputGroup">
                <input id="radio1" type="radio" name="doorKit" checked={state.doorKit === "J Shape Hanger"} value="J Shape Hanger" onChange={updateState} />
                <label htmlFor="radio1">J Shape</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Rhombic"></div>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="doorKit" checked={state.doorKit === "Rhombic Shape Hanger"} value="Rhombic Shape Hanger" onChange={updateState} />
                <label htmlFor="radio2">Rhombic</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Big"></div>
              <div className="inputGroup">
                <input id="radio3" type="radio" name="doorKit" checked={state.doorKit === "Big Wheel Hanger"} value="Big Wheel Hanger" onChange={updateState} />
                <label htmlFor="radio3">Big Wheel</label>
              </div>
            </Col>
          </Row>
          <button className="btn" onClick={handleBack}>Back</button>
          <button type="submit" disabled={!(state.doorKit)} onClick={handleNext} className="btn btn-primary">Next</button>
        </div>
      );
    case 4:
      return (
        <div>
          <Row>
            <Col>

              <div><img className="logo mb-5" alt={logo} src={logo}></img></div>

            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-4">
              <h1>Handles</h1>
            </Col>
          </Row>
          <Row className="mb-4">

            <Col xs={4}>
              <div className="Square"></div>
              <div className="inputGroup">
                <input id="radio1" type="radio" name="handle" checked={state.handle === "Square"} value="Square" onChange={updateState} />
                <label htmlFor="radio1">Square</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Round"></div>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="handle" checked={state.handle === "Round"} value="Round" onChange={updateState} />
                <label htmlFor="radio2">Round</label>
              </div>
            </Col>

            <Col xs={4}>
              <div className="Latch"></div>
              <div className="inputGroup">
                <input id="radio3" type="radio" name="handle" checked={state.handle === "Round with Latch"} value="Round with Latch" onChange={updateState} />
                <label htmlFor="radio3">With Latch</label>
              </div>
            </Col>
          </Row>
          <button className="btn" onClick={handleBack}>Back</button>
          <button type="submit" disabled={!(state.handle)} onClick={handleNext} className="btn btn-primary">Next</button>
        </div>
      );

    case 5:
      return (
        <div>
          <Row>
            <Col>

              <div><img className="logo mb-5" alt={logo} src={logo}></img></div>

            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-3 mb-4">
              <h1>Preferences</h1>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <div className="inputGroup">
                <input id="radio1" type="radio" name="installOrDelivery" checked={state.installOrDelivery === "Installation"} value="Installation" onChange={updateState} />
                <label htmlFor="radio1">Install</label>
              </div>
            </Col>
            <h3>Or</h3>
            <Col>
              <div className="inputGroup">
                <input id="radio2" type="radio" name="installOrDelivery" checked={state.installOrDelivery === "Delivery"} value="Delivery" onChange={updateState} />
                <label htmlFor="radio2">Delivery</label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-center mt-4">Dimensions ?</h3>
              <p className="text-center"><span className="text-muted">(Optional)</span></p>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} xs="6">
                    <Form.Label>Height (Inches):</Form.Label>
                    <Form.Control required type="number" value={state.dimensionsH} name="dimensionsH" onChange={updateState} />
                  </Form.Group>
                  <Form.Group as={Col} xs="6">
                    <Form.Label>Width (Inches):</Form.Label>
                    <Form.Control required type="number" value={state.dimensionsW} name="dimensionsW" onChange={updateState} />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
          </Row>

          <button className="btn" onClick={handleBack}>Back</button>
          <button type="submit" disabled={!(state.installOrDelivery)} onClick={handleNext} className="btn btn-primary">Next</button>

        </div>
      );

    case 6:
      return (
        <Form className="text-center mb-5" onSubmit={handleNext}>
          <Row>
            <Col>

              <div><img className="logo mb-5" alt={logo} src={logo}></img></div>

            </Col>
          </Row>
          <Row>
            <Col className="text-center mb-4">
              <h1>Review</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>

              <h3 className="caption">Your Name:</h3><p className="detailsText">{state.firstName} {state.lastName}</p>
              <h3 className="caption">Email:</h3><p className="detailsText">{state.email}</p>
              <h3 className="caption">Phone Number:</h3><p className="detailsText">{state.phoneNumber}</p>
              <h3 className="caption">Address:</h3><p className="detailsText">{state.address} {state.address2} {state.city} {state.state} {state.zip} </p>
            </Col>

            <Col xs={6}>
              <h3 className="caption">Dimensions:</h3>
              <h5>Width (In) :</h5> <p className="detailsText">{state.dimensionsW}</p>
              <h5>Height (In) :</h5> <p className="detailsText">{state.dimensionsH}</p>
              <h3 className="caption mt-4">You Selected:</h3>{state.installOrDelivery}

            </Col>

          </Row>
          <hr />
          <Row className="mt-4">
            <Col xs={3}>

              <h3 className="caption">Finish:</h3><p className="detailsText">{state.finishColor}</p>
            </Col>

            <Col xs={3}>
              <h3 className="caption">Design:</h3><p className="detailsText">{state.doorDesign}</p>
            </Col>

            <Col xs={3}>
              <h3 className="caption">Kit:</h3><p className="detailsText">{state.doorKit}</p>
            </Col>

            <Col xs={3}>
              <h3 className="caption">Handle:</h3><p className="detailsText">{state.handle}</p>
            </Col>
          </Row>
          <button className="btn mt-5" onClick={handleBack}>Back</button>
          <button type="submit" className="btn btn-success mt-5" onClick={handleNext}>Finish</button>

        </Form>
      );

    default:
      return (
        <h2>Nothing to display</h2>
      );
    }
  }

  // STEPPER FROM MATERIAL UI

  return (
    <Container>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>{getStepContent(index)}</StepContent>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
}