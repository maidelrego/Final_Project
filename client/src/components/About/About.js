import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import familyPic from "../../images/family.PNG";
import "./about.css";

const About = () => {
  return (

    <Container id='about'>
      <Row>
        <Col>
          <h2 className='text-center header-about mt-4 mb-4'>About Us</h2>
          <p className='campbell-p'>
            Campbell Wood Designs was founded in 2017. It is a Veteran, and Family owned business.
            We are located in our hometown of Excelsior Springs, Missouri. The business was started when I built
            my wife a table for Christmas,and has just grown from there. I started with reclaimed pallet projects,
            and moved into building with fresh lumber. It is amazing that building Small furniture for my wife
            has turned into a business. I now specialize in sliding barn doors, and only build small furniture on the side.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <img id='family' alt={familyPic} src={familyPic}></img>
        </Col>

      </Row>
      <Row>
        <Col>
          <p className='signature text-center mt-4'>Josh Campbell</p>
        </Col>
      </Row>
    </Container>

  );
};

export default About;