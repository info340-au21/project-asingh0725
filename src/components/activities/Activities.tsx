import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import activitiesData from "../../data/activities.json";
import Activity from "./Activity";
import { Activity as ActivityType } from "../../types/activity";

const Activities: React.FC = () => {
  const activities = (activitiesData as ActivityType[]).map((activity) => (
    <Col key={activity.name} className="mt-4">
      <Activity activity={activity} />
    </Col>
  ));

  return (
    <div className="activities">
      <h2>Activities</h2>
      <Container>
        <Row className="activitiesRow d-flex my-auto">{activities}</Row>
      </Container>
    </div>
  );
};

export default Activities;