// src/components/LocationCard.tsx
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Location } from "../../types/location";

interface LocationCardProps {
  location: Location;
  reviewButton: (locationName: string) => void;
}

const LocationCard: React.FC<LocationCardProps> = ({
  location,
  reviewButton,
}) => {
  const handleSelectLocation = () => {
    reviewButton(location.name);
    window.sessionStorage.setItem("location", location.name);
  };

  return (
    <Card
      border="secondary"
      className="locationCard d-flex mx-auto my-auto text-center"
      style={{ width: "22rem" }}
    >
      <Card.Header>
        <Card.Img
          className="locationImg mt-2 mb-2"
          src={location.img}
          alt={location.caption}
        />
      </Card.Header>
      <Card.Body className="locationText justify-content-center">
        <Card.Title>{location.name}</Card.Title>
        <Card.Subtitle>{location.location}</Card.Subtitle>
        <Card.Text>{location.description}</Card.Text>
        <Row>
          <Link to="/weather">
            <Button
              className="mt-2 text-center"
              onClick={handleSelectLocation}
              variant="outline-dark"
            >
              Weather
            </Button>
          </Link>
          <Link to="/rental">
            <Button
              className="mt-2 text-center"
              onClick={handleSelectLocation}
              variant="outline-dark"
            >
              Rentals
            </Button>
          </Link>
          <Link to="/review">
            <Button
              className="mt-2 text-center"
              onClick={handleSelectLocation}
              variant="outline-dark"
            >
              Reviews
            </Button>
          </Link>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LocationCard;