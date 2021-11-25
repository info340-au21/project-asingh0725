import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Route, Link } from 'react-router-dom';

import locations from '../data/locations.json'


export function CardLocations(props) {
    const location = props.location;
    return (
        <div>
            <Card border="light" className="locationCard d-flex mx-auto my-auto text-center" style={{ width: '22rem' }}>
                <Card.Header variant="top">
                    <Card.Img className="locationImg mt-2 mb-2" variant="top" src={location.img} alt={location.caption}/>
                </Card.Header>
                <Card.Body className="locationText justify-content-center">
                    <Card.Title>{location.name}</Card.Title>
                    <Card.Subtitle>{location.location}</Card.Subtitle>
                    <Card.Text>{location.description}</Card.Text>
                    <Link to="/report">
                        <Button className="mt-2 text-center" variant="outline-dark">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default function Location() {
    const location = locations.map((location) => {
        return (
            <Col className="mt-4">
                <CardLocations location={location}></CardLocations>
            </Col>
        );
    });
    return(
        <div className="locations">
            <h2>Locations</h2>
            <Container>
                <Row className="locationsRow d-flex my-auto">
                    {location}
                </Row>
            </Container>
        </div>
    );
}