import React from 'react';
import {Card, Form} from 'react-bootstrap';
import stain from '../../images/stain.jpg';
import Checkbox from '@material-ui/core/Checkbox';





export default function PaintSelection () {


    return (
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={stain} />
            <Card.Body>
                <Card.Title>Stain</Card.Title>
                <Checkbox />
            </Card.Body>
        </Card>

    )
}
