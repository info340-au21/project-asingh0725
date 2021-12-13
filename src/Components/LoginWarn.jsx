import React from "react";
import { Link } from "react-router-dom";

export default function LoginWarn() {
    return (
        <div className="card bg-light">
            <div className="container card-body">
                <p><Link to="/login">Login</Link> to leave a review!</p>
            </div>
        </div>
    )
}