import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import locations from '../data/locations.json'
import LocationCard from "./LocationCard";

export default function Location({ getLocation }) {
    const getLocationName = (locationName) => {
        getLocation(locationName);
    }
    const location = locations.map((location) => {
        return (
            <Col className="mt-4">
                <LocationCard reviewButton={getLocationName} location={location}></LocationCard>
            </Col>
        );
    });

    return(
        <div className="locations">
            <h2 className="ml-5">Locations in Washington</h2>
            <Container>
                <Row className="locationsRow d-flex my-auto">
                    {location}
                </Row>
            </Container>
        </div>
    );
}