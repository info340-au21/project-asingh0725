import React, { useState } from 'react';

import ReviewPane from './ReviewPane';
import CreateReview from './CreateReview';

import REVIEW_LOG from './../data/review_log.json';

function ReviewPage({ location, user }) {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const [reviewArray, setReviewArray] = useState(REVIEW_LOG);
    const addReview = (reviewUser, reviewText, reviewActivity, reviewLocation) => {
        const newReview = {
            "userId": reviewUser,
            "userName": user.displayName,
            "text": reviewText,
            "activity": reviewActivity,
            "location": reviewLocation,
            "date": date
        }
        const newReviewArray = [...reviewArray, newReview];
        setReviewArray(newReviewArray);
    }
    return(
        <div className="reviewPage">
            <h2 className="ml-5">Reviews for {location}</h2>
            <CreateReview className="ml-5" submitButton={addReview} location={location} user={user}></CreateReview>
            <ReviewPane className="ml-5" reviewLog={reviewArray} location={location}></ReviewPane>
        </div>
   );
}

export default ReviewPage;
