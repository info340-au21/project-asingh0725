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
        if(textValue === '' || activityValue === '') {
            alert("Please enter your review! ")
        } else {
            props.submitButton(props.user.displayName, textValue, activityValue, props.location);
            setTextValue('');
            setActivityValue('');
        }
    }

  return (
        <form>
            <div className="ml-5 mr-5">
                {!props.user && 
                   <LoginWarn />
                }
                {props.user && <>
                    
                    <div className="row mb-2"> 
                    <textarea className="activityText form-control"
                            onChange={handleActivityInput}
                            value={activityValue}
                            placeholder="Name the activities you did!"
                            rows="1">
                    </textarea>
                    </div>

                    <div className="row mb-2"> 
                    <textarea className="reviewText form-control" 
                            onChange={handleTextInput}
                            value={textValue}
                            placeholder="Write your review!"
                            rows="5">
                    </textarea>
                    </div>

                    <button className="btn btn-primary" type="button" onClick={handleSubmit}>Submit Review!</button>

                </> }
            </div>
        </form>
	);
}

export default CreateReview;