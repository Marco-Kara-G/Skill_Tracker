import "./welcome-page.css";
import React, { useState } from "react";

export function WelcomePage() {
  const [loginState, setLoginState] = useState(false);
  const [signupState, setSignupState] = useState(false);

  const handleLoginState = () => {
    setLoginState(!loginState);
    if (signupState) {
      setSignupState(false);
    }
  };

  const handleSignupState = () => {
    setSignupState(!signupState);
    if (loginState) {
      setLoginState(false);
    }
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to the App</h1>
      <p>This is a simple welcome page.</p>
      <div className="welcome-logo">
        <img
          src="\src\assets\IMG_20230205_033014_752.PNG"
          alt="Welcome"
          width={300}
        />
      </div>
      <div className="welcome-page__buttons">
        <button onClick={handleLoginState} className="button primary-button">
          Log In
        </button>
        <button onClick={handleSignupState} className="button secondary-button">
          Sing up
        </button>
      </div>
      <div className="welcome-footer">
        <p>&copy; 2025 ******</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}
