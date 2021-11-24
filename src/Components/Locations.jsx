import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import locations from '../data/locations.json'


export function CardLocations(props) {
    const location = props.location;
    return (
        <div>
            <Card border="light" className="locationCard d-flex mx-auto my-auto text-center" style={{ width: '22rem' }}>
                <Card.Header variant="top">
                    <Card.Img className="locationImg mt-2 mb-2" variant="top" src="https://picsum.photos/2000" />
                </Card.Header>
                <Card.Body className="locationText justify-content-center">
                    <Card.Title>{location.name}</Card.Title>
                    <Card.Subtitle>{location.seasons}</Card.Subtitle>
                    <Button className="mt-2 text-center" variant="outline-dark">Check Out Locations</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export function Location() {
    const locations = locations.map((location) => {
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
                    {locations}
                </Row>
            </Container>
        </div>
    );
}