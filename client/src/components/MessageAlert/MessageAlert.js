/* eslint-disable linebreak-style */
import React from "react";
import Alert from "react-bootstrap/Alert";

const MessageAlert = () => {

  return (
    <Alert variant="success" className='text-center'>
      <Alert.Heading><h1>Thank You for submitting your message</h1></Alert.Heading>
      <h2> Josh will get back to you soon</h2>
    </Alert>
  );
};


export default MessageAlert;