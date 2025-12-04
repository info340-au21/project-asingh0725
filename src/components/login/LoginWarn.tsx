import React from "react";
import { Link } from "react-router-dom";

const LoginWarn: React.FC = () => (
  <div className="card bg-light">
    <div className="container card-body">
      <p>
        <Link to="/login">Login</Link> to leave a review!
      </p>
    </div>
  </div>
);

export default LoginWarn;