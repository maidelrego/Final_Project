import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Row, Col } from 'react-bootstrap';
import './typing.css'

const TypingEffect = () => {
  return (
    <Row>
      <Col className="typing-effect">
        <ReactTypingEffect
          text="You dream it. We build it!"
          speed='200'
          eraseDelay="200"
        />
      </Col>
    </Row>
  );
};

export default TypingEffect;