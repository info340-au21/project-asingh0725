import Activity from './Activity.jsx'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import activities from '../data/activities.json';

function Activities() {
    const allActivities = activities.map((activity) => {
        return(
            <Col className="mt-4">
                <Activity activity={activity}></Activity>
            </Col>
        );
    });
    return(
        <div className="activities">
            <h2>Activities</h2>
            <Container>
                <Row className="activitiesRow d-flex my-auto">
                    {allActivities}
                </Row>
            </Container>
        </div>
    );
}

export default Activities;