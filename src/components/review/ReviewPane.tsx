import React, { useState } from "react";
import { Review } from "../../types/review";

interface ReviewPaneProps {
  reviewLog: Review[];
  location: string;
  className?: string;
}

const ReviewPane: React.FC<ReviewPaneProps> = ({
  reviewLog,
  location,
  className,
}) => {
  const locationReviews = reviewLog.filter(
    (review) => review.location === location
  );

  return (
    <div className={`d-flex flex-column ${className ?? ""}`}>
      {locationReviews.map((review) => (
        <ReviewItem key={review.timestamp} reviewData={review} />
      ))}
    </div>
  );
};

interface ReviewItemProps {
  reviewData: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ reviewData }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="mt-4 ml-4 mr-5">
      <div className="reviewBox">
        <div className="row">
          <h3 className="reviewName">{reviewData.userName}</h3>
          <h4 className="reviewDate">{reviewData.date}</h4>
        </div>
        <div className="row">
          <p className="reviewActivity">
            <em>Activities: </em>
            {reviewData.activity}
          </p>
        </div>
        <div className="row">
          <p className="reviewText">
            <em>Review: </em>
            {reviewData.text}
          </p>
        </div>
        <div className="row">
          <div className="col-11" />
          <div className="col-1">
            <button className="btn like-button" onClick={handleLiked}>
              <span
                className="material-icons"
                style={{ color: isLiked ? "red" : "grey" }}
              >
                {isLiked ? "favorite" : "favorite-border"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPane;