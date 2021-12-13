import React, { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function ReviewPane({ reviewLog, location }) {
    const locationReviews = reviewLog.filter((review) => {
        return review.location === location;
    });

    const showReviews = locationReviews.map((review) => {
        return <Review reviewData={review} key={review.timestamp}></Review>;
    });

    return (
        <div className="d-flex flex-column">
            {showReviews}
        </div>
    );
}

function Review(props) {
    const reviewObject = props.reviewData;

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const handleLike = (event) => {
        setLike(like + 1);
    };

    const handleDislike = (event) => {
        setDislike(dislike + 1);
    };

    return (
        <div className="mb-1 mt-1">
            <div className="review">
                <Container>
                    <Row className="reviewHeadingsRow justify-content-between">
                        <Col className="col-4">
                            <p className="reviewName">{reviewObject.userName}</p>
                            <p className="reviewActivity">{reviewObject.activity}</p>
                        </Col>
                        <Col className="col-4">
                            <p className="reviewDate">{reviewObject.date}</p>
                        </Col>
                    </Row>
                    <Row className="reviewTextRow justify-content-center">
                        <Col className="col-10">
                            <p className="reviewText">{reviewObject.text}</p>
                        </Col>
                    </Row>
                    <Row className="reviewButtonsRow justify-content-end">
                        <Col className="col-4">
                            <button className="btn btn-secondary likeButton" onClick={handleLike}>
                                <span className="like">{like}</span>
                            </button>
                            <button className="btn btn-secondary dislikeButton" onClick={handleDislike}>
                                <span className="dislike">{dislike}</span>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ReviewPane;