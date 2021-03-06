import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Locations from './Locations.jsx'

import { Route, Link } from 'react-router-dom';

function Activity(props) {
    const activity = props.activity
    return (
        <div>
            <Card border="light" className="activityCard d-flex mx-auto my-auto text-center" style={{ width: '22rem' }}>
                <Card.Header variant="top">
                    <Card.Img className="activityImg mt-2 mb-2" variant="top" src={activity.img} />
                </Card.Header>
                <Card.Body className="activityText justify-content-center">
                    <Card.Title>{activity.name}</Card.Title>
                    <Card.Subtitle>{activity.seasons}</Card.Subtitle>
                    <Card.Text>{activity.description}</Card.Text>
                    <Link to="/locations">
                        <Button className="mt-2 text-center" variant="outline-dark">Locations</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Route path="/locations" component={Locations}/>
        </div>
    );
}

export default Activity;