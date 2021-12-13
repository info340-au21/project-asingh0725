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

    const [liked, setLiked] = useState(0);
    const [disliked, setDisliked] = useState(0);

    const handleLike = (event) => {
        setLiked(liked + 1);
    };

    const handleDislike = (event) => {
        setDisliked(disliked + 1);
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
                            <button className="btn likeButton" onClick={handleLike}>
                                <span className="like fa fa-thumbs-up"></span>
                            </button>
                            <button className="btn dislikeButton" onClick={handleDislike}>
                                <span className="like fa fa-thumbs-down"></span>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ReviewPane;