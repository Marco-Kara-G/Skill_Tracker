import "./welcome-page.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export function WelcomePage() {
  const navigate = useNavigate();
  // this variables must be put in a context
  // const [loginState, setLoginState] = useState(false);
  // const [signupState, setSignupState] = useState(false);

  const handleLoginState = () => {
    // setLoginState(!loginState);
    // if (signupState) {
    //   setSignupState(false);
    // }
    navigate("/access");
  };

  const handleSignupState = () => {
    // setSignupState(!signupState);
    // if (loginState) {
    //   setLoginState(false);
    // }
    navigate("/access");
  };

  return (
    <div className="welcome-page">
      <h1>Welcome! </h1>
      <div className="welcome-logo">
        <img
          src="\src\assets\Logo_centered_noBG.webp"
          alt="Welcome"
          width={350}
        />
      </div>
      <p>Please Log-in or register a new account.</p>
      <div className="welcome-page__buttons">
        <button onClick={handleLoginState} className="button primary-button">
          Log In
        </button>
        <button onClick={handleSignupState} className="button secondary-button">
          Sing up
        </button>
      </div>
      <div className="welcome-footer">
        <p>&copy; 2025 PulseSkill</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
