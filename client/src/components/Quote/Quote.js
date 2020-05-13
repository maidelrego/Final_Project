import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container } from 'react-bootstrap';
import API from '../../utils/API.js';
import { useGlobalContext } from "../../utils/GlobalState.js";
import Form1 from './Form1.js';
import Form2 from './Form.2.js';
import Form3 from './Form3.js';
import Form4 from './Form4.js';
import Form5 from './Form5.js';
import Form6 from './Form6.js';


function getSteps() {
  return ['Info', 'Finish', 'Door Design', 'Barn Door Kit', 'Handle', 'Review'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Form1 />
      )
    case 1:
      return (
        <Form2 />
      )
    case 2:
      return (
        <Form3 />
      )
    case 3:
      return (
        <Form4 />
      )
    case 4:
      return (
        <Form5 />
      )

    case 5:
      return (
        <Form6 />
      )

    default:
      return (
        <Form1 />
      );
  }
}

export default function VerticalLinearStepper() {

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

  
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   API.saveQuote({
  //     firstName: state.firstName,
  //     lastName: state.lastName,
  //     phoneNumber: state.phoneNumber,
  //     address: state.address,
  //     address2: state.address2,
  //     email: state.email,
  //     city: state.city,
  //     state: state.state,
  //     zip: state.zip,
  //     finishColor: state.finishColor,
  //     doorDesign: state.doorDesign,
  //     doorKit: state.doorKit,
  //     handle: state.handle
  //   })
  //     .then(res => loadQuotes())
  //     .catch(err => console.log(err));
    
  // };




  // STEPPER FROM MATERIAL UI

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if(activeStep === 5){
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
            handle: state.handle
          })  
            .then(res => alert("finished"))
            .catch(err => console.log(err));
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    // look at the current step
    // use a ref for the corresponding form
    // call .validateForm() using that ref
    // if its valid, then call setACtiveStep
    
  };





  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div >
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}

                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}

                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} >
          <Typography>All steps completed - you&apos;re finished</Typography>
        </Paper>
      )}
    </Container>
  );
}