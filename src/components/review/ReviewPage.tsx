import React, { useState } from "react";
import type { User } from "firebase/auth";

import ReviewPane from "./ReviewPane";
import CreateReview from "./CreateReview";
import { Review } from "../../types/review";

interface ReviewPageProps {
  location: string;
  user: User | null;
  reviewData: Review[];
}

const ReviewPage: React.FC<ReviewPageProps> = ({
  location,
  user,
  reviewData,
}) => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const [timestamp, setTimestamp] = useState<number>(
    reviewData[0]?.timestamp ?? 0
  );
  const [reviewArray, setReviewArray] = useState<Review[]>(reviewData);

  const savedLocation =
    window.sessionStorage.getItem("location") || location || "Unknown";

  const addReview = (
    reviewUser: string,
    reviewText: string,
    reviewActivity: string,
    reviewLocation: string
  ) => {
    setTimestamp((prev) => {
      const nextTimestamp = prev + 1;
      const newReview: Review = {
        userId: reviewUser,
        userName: reviewUser,
        text: reviewText,
        activity: reviewActivity,
        location: reviewLocation,
        date,
        timestamp: nextTimestamp,
      };
      setReviewArray((prevArray) => [newReview, ...prevArray]);
      return nextTimestamp;
    });
  };

  return (
    <div className="reviewPage">
      <h2 className="ml-5">Reviews for {savedLocation}</h2>
      <CreateReview
        className="ml-5"
        submitButton={addReview}
        location={savedLocation}
        user={user}
      />
      <ReviewPane
        className="ml-5"
        reviewLog={reviewArray}
        location={savedLocation}
      />
    </div>
  );
};

export default ReviewPage;