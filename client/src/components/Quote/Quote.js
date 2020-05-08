import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form1 from './Form1.js';
import { Container } from 'react-bootstrap';
import Form2 from './Form.2.js';
import Form3 from './Form3.js';



function getSteps() {
  return ['Info', 'Finish', 'Door Design', 'Door Design', 'Door Design', 'Door Design'];
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
    default:
      return (
        <Form1 />
      );
  }
}

export default function VerticalLinearStepper() {
 
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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