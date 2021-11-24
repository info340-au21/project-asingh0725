import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Activity(props) {
    const activity = props.activity;
    return (
        <div>
            <a href="/location" className="activityLink">
                <Card className="activityCard d-flex mx-auto my-auto" style={{ width: '22rem' }}>
                    <Card.Header variant="top">
                        <Card.Img className="activityImg mt-2 mb-2" variant="top" src="https://picsum.photos/2000" />
                    </Card.Header>
                    <Card.Body className="activityText">
                        <Card.Title className="text-dark">{activity.name}</Card.Title>
                        <Card.Subtitle className="text-dark">{activity.location}</Card.Subtitle>
                        <Button className="mt-2" variant="outline-dark">Check Out Locations!</Button>
                    </Card.Body>
                </Card>
            </a>
        </div>
    );
}

export default Activity;