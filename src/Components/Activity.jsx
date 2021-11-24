import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Activity(props) {
    const activity = props.activity;
    return (
        <div>
            <Card border="light" className="activityCard d-flex mx-auto my-auto text-center" style={{ width: '22rem' }}>
                <Card.Header variant="top">
                    <Card.Img className="activityImg mt-2 mb-2" variant="top" src="https://picsum.photos/2000" />
                </Card.Header>
                <Card.Body className="activityText justify-content-center">
                    <Card.Title>{activity.name}</Card.Title>
                    <Card.Subtitle>{activity.seasons}</Card.Subtitle>
                    <Button className="mt-2 text-center" variant="outline-dark">Check Out Locations</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Activity;