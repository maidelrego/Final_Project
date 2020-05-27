import React from "react";
import Alert from "react-bootstrap/Alert";

const QuoteAlert = () => {

  return (
    <Alert variant="success" className='text-center'>
      <Alert.Heading><h1>Thank You, your quote has been submitted!</h1></Alert.Heading>
      <h2> Josh will get back to you as soon he's ready to give you an estimate</h2>
    </Alert>
  );
};


export default QuoteAlert;

