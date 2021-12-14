import React, { useState } from 'react';

import ReviewPane from './ReviewPane';
import CreateReview from './CreateReview';

function ReviewPage({ location, user, reviewData }) {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    const [timestamp, setTimestamp] = useState(reviewData[0].timestamp)
    const [reviewArray, setReviewArray] = useState(reviewData);

    const addReview = (reviewUser, reviewText, reviewActivity, reviewLocation) => {
        setTimestamp(timestamp + 1);
        const newReview = {
            "userId": reviewUser,
            "userName": reviewUser,
            "text": reviewText,
            "activity": reviewActivity,
            "location": reviewLocation,
            "date": date,
            "timestamp": timestamp
        }
        const newReviewArray = [newReview, ...reviewArray];
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
