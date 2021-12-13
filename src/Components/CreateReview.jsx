import React, { useState } from 'react';
import LoginWarn from './LoginWarn';

function CreateReview(props) {
    const [textValue, setTextValue] = useState('');
    const [activityValue, setActivityValue] = useState('');

    const handleTextInput = (event) => {
        setTextValue(event.target.value);
    }

    const handleActivityInput = (event) => {
        setActivityValue(event.target.value);
    }

    const handleSubmit = (event) => {
        props.submitButton(props.user, textValue, activityValue, props.location);
        setTextValue('');
        setActivityValue('');
    }

  return (
        <form>
            <div>
                {!props.currentUser && 
                   <LoginWarn />
                }
                {props.currentUser && <>
                    <textarea className="reviewText form-control" 
                            onChange={handleTextInput}
                            value={textValue}
                            placeholder="Write your review!">
                    </textarea>
                    <textarea className="activityText form-control"
                            onChange={handleActivityInput}
                            value={activityValue}
                            placeholder="Name the activities you did!">
                    </textarea>
                    <button className="btn btn-primary" type="button" onClick={handleSubmit}>Submit Review!</button>
                </> }
            </div>
        </form>
	);
}

export default CreateReview;