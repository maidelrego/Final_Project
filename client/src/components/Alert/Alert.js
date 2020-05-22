import React from "react";
import Alert from "react-bootstrap/Alert";

const Display = () => {

  return (
    <Alert variant="success" className='text-center'>
      <Alert.Heading><h1>Thank You, Your quote has been submited!</h1></Alert.Heading>
      <h2> Josh will get back to you as soon he's ready to give you an estimate</h2>
    </Alert>
  );
};


export default Display;

