import React, { useState } from 'react';

import ReviewPane from './ReviewPane';
import CreateReview from './CreateReview';

import REVIEW_LOG from './../data/review_log.json'

function ReviewPage({ location, user }) {
    const [reviewArray, setReviewArray] = useState(REVIEW_LOG);

    const addReview = (reviewUser, reviewText, reviewActivity, reviewLocation) => {
        const newReview = {
            "userId": reviewUser,
            "userName": reviewUser,
            "text": reviewText,
            "activity": reviewActivity,
            "location": reviewLocation,
            "date": Date.now()
        }
        const newReviewArray = [...reviewArray, newReview];
        setReviewArray(newReviewArray);
    }
    return(
        <div className="reviewPage"> 
            <h2>Reviews for {location}</h2>
            <CreateReview submitButton={addReview} location={location} user={user}></CreateReview>
            <ReviewPane reviewLog={reviewArray} location={location}></ReviewPane>
        </div>
   );
}

export default ReviewPage;
