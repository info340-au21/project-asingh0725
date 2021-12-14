import React, { useState } from 'react';

import ReviewPane from './ReviewPane';
import CreateReview from './CreateReview';

function ReviewPage({ location, user, reviewData }) {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    const [timestamp, setTimestamp] = useState(reviewData[0].timestamp)
    const [reviewArray, setReviewArray] = useState(reviewData);
    
    // get location name every refresh
    const locationStorage = window.sessionStorage;
    let savedLocation = locationStorage.getItem('location');

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
            <h2 className="ml-5">Reviews for {savedLocation}</h2>
            <CreateReview className="ml-5" submitButton={addReview} location={savedLocation} user={user}></CreateReview>
            <ReviewPane className="ml-5" reviewLog={reviewArray} location={savedLocation}></ReviewPane>
        </div>
   );
}

export default ReviewPage;
