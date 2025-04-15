import { useState } from "react";
import "./login-registration-page.css";

export function UserAccesPage() {
  const [loginState, setLoginState] = useState(true);
  const [signupState, setSignupState] = useState(false);

  const handleUserAcces = () => {
    setLoginState(!loginState);
    setSignupState(!signupState);
  };

  return (
    <>
      <div className="login-registration-page">
        {loginState && (
          <div className="login-registration-page__login">
            <div className="login-registration-page__logo">
              <img
                src="\src\assets\Logo_complete_noBG.webp"
                alt="Welcome"
                width={400}
              />
            </div>
            <div className="login-registration-page__form">
              <form className="login-form">
                <h1>Log In</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit" className="button primary-button">
                  Log In
                </button>
              </form>
              <p>
                You need an account? click{" "}
                <span>
                  <button
                    onClick={handleUserAcces}
                    className="login-regisdtration-page__fakeBTN"
                  >
                    Here
                  </button>
                </span>
              </p>
            </div>
          </div>
        )}
        {signupState && (
          <div className="login-registration-page__signup">
            <div className="login-registration-page__logo">
              <img
                src="\src\assets\Logo_complete_noBG.webp"
                alt="Welcome"
                width={400}
              />
            </div>
            <div className="login-registration-page__form">
              <form className="signup-form">
                <h1>Sign Up</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit" className="button primary-button">
                  Sign Up
                </button>
              </form>
              <p>
                Already have an account? click{" "}
                <span>
                  <button
                    onClick={handleUserAcces}
                    className="login-regisdtration-page__fakeBTN"
                  >
                    Here
                  </button>
                </span>
              </p>
            </div>
          </div>
        )}

        <div className="login-registration-page__footer">
          <p>&copy; 2025 PulseSkill</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
