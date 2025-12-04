import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import LocationCard from "./LocationCard";
import { Location } from "../../types/location";

interface LocationsProps {
  getLocation: (locationName: string) => void;
  locations: Location[];
}

const Locations: React.FC<LocationsProps> = ({ getLocation, locations }) => {
  const handleLocationName = (locationName: string) => {
    getLocation(locationName);
  };

  const locationCards = locations.map((location) => (
    <Col key={location.name} className="mt-4">
      <LocationCard
        reviewButton={handleLocationName}
        location={location}
      />
    </Col>
  ));

  return (
    <div className="locations">
      <h2 className="ml-5">Locations in Washington</h2>
      <Container>
        <Row className="locationsRow d-flex my-auto">{locationCards}</Row>
      </Container>
    </div>
  );
};

export default Locations;