import React from "react";

export function ReviewForm() {
    return (
        <form>
            <div>
                <label for="name" className="pt-4 pr-1">Name:</label>
                <input type="text" id="name" name="name"></input>
            </div>
            <div>
                <label for="title" className="pt-2 pr-3">Title:</label>
                <input type="text" id="title" name="title"></input>
            </div>
            <div>
                <label for="review_field" className="pt-2">Review:</label>
                <textarea className="form-control" id="review_field" name="review"></textarea>
                <button type="submit" className="btn btn-dark mt-2 mb-3" value="Post Review"></button>
            </div>
        </form>
    );
}