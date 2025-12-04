import React, { useState } from "react";
import LoginWarn from "../login/LoginWarn";
import type { User } from "firebase/auth";

interface CreateReviewProps {
  className?: string;
  submitButton: (
    userName: string,
    text: string,
    activity: string,
    location: string
  ) => void;
  location: string;
  user: User | null;
}

const CreateReview: React.FC<CreateReviewProps> = ({
  className,
  submitButton,
  location,
  user,
}) => {
  const [textValue, setTextValue] = useState("");
  const [activityValue, setActivityValue] = useState("");

  const handleTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };

  const handleActivityInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setActivityValue(event.target.value);
  };

  const handleSubmit = () => {
    if (textValue.trim() === "" || activityValue.trim() === "") {
      alert("Please enter your review!");
      return;
    }

    if (!user || !user.displayName) {
      alert("You must be logged in to submit a review.");
      return;
    }

    submitButton(user.displayName, textValue, activityValue, location);
    setTextValue("");
    setActivityValue("");
  };

  return (
    <form className={className}>
      <div className="ml-5 mr-5">
        {!user && <LoginWarn />}
        {user && (
          <>
            <div className="row mb-2">
              <textarea
                className="activityText form-control"
                onChange={handleActivityInput}
                value={activityValue}
                placeholder="Name the activities you did!"
                rows={1}
              />
            </div>

            <div className="row mb-2">
              <textarea
                className="reviewText form-control"
                onChange={handleTextInput}
                value={textValue}
                placeholder="Write your review!"
                rows={5}
              />
            </div>

            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              Submit Review!
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default CreateReview;
