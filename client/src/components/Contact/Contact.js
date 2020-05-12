import React from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import './contact.scss'

const About = () => {
    return (

        <Row>
            <Col className='p-0'>

                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.617735054326!2d-94.2230803843744!3d39.34224552820393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c1a5ee7b4257b5%3A0xa3156fb668eedb48!2s255%20E%20Broadway%20Ave%2C%20Excelsior%20Springs%2C%20MO%2064024!5e0!3m2!1sen!2sus!4v1589251463454!5m2!1sen!2sus"></iframe>

            </Col>
        </Row>
    );
};

export default About;