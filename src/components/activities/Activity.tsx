import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { Activity as ActivityType } from "../../types/activity";

interface ActivityProps {
  activity: ActivityType;
}

const Activity: React.FC<ActivityProps> = ({ activity }) => {
  return (
    <Card
      border="light"
      className="activityCard d-flex mx-auto my-auto text-center"
      style={{ width: "22rem" }}
    >
      <Card.Header>
        <Card.Img
          className="activityImg mt-2 mb-2"
          src={activity.img}
          alt={activity.name}
        />
      </Card.Header>
      <Card.Body className="activityText justify-content-center">
        <Card.Title>{activity.name}</Card.Title>
        <Card.Subtitle>{activity.seasons}</Card.Subtitle>
        <Card.Text>{activity.description}</Card.Text>
        <Link to="/locations">
          <Button className="mt-2 text-center" variant="outline-dark">
            Locations
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Activity;