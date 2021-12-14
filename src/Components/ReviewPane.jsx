import React, { useState } from 'react';

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

    const [isLiked, setIsLiked] = useState(false);

    const handleLiked = (event) => {
        setIsLiked(!isLiked);
    }

    let heartColor = "grey";
    let heartIcon = "favorite-border";

    if (isLiked) {
        heartColor = "red";
        heartIcon = "favorite";
    }

    return (
        <div className="mt-4 ml-4 mr-5">
            <div className="reviewBox">
                <div className="row">
                    <h3 className="reviewName">{reviewObject.userName}</h3>
                    <h4 className="reviewDate">{reviewObject.date}</h4>
                </div>
                <div className="row">
                    <p className="reviewActivity"><em>Activities: </em>{reviewObject.activity}</p>
                </div>
                <div className="row">
                    <p className="reviewText"><em>Review: </em>{reviewObject.text}</p>
                </div>
                <div className="row">
                    <div className="col-8">

                    </div>
                    <div className="col-4">
                        <button className="btn like-button" onClick={handleLiked}>
                            <span className="material-icons" style={{ color: heartColor }}>{heartIcon}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewPane;