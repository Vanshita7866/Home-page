import "./email.css";
import React from "react";

const SignupForm: React.FC = () => {
  return (
    <div className="signup-form">
      <form action="/" method="post">
        <div className="form-group">
          <label htmlFor="email">SIGN UP HERE FOR OUR DAILY INSIDERS:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
