import { useState } from "react";

import GoogleSocialIcon from "../../Assets/IMG/Icons/GoogleSocialIcon.svg";
import FacebookSocialIcon from "../../Assets/IMG/Icons/FacebookSocialIcon.svg";
import AppleSocialIcon from "../../Assets/IMG/Icons/AppleSocialIcon.svg";

import LoginRafikiImage from "../../Assets/IMG/LoginRafiki.svg";

export default function Login({ passRoute }) {
  const [passwordIsPassword, setPasswordIsPassword] = useState(true);
  return (
    <div className="login-container">
      <div className="login-container-left-container flex-row">
        <div className="login-container-left flex-column">
          <span className="auth-container-header">Login</span>

          <div className="login-container-form flex-column">
            <div className="auth-input-container flex-column">
              <span className="auth-input-label">Email Address</span>
              <input
                type="text"
                placeholder="Enter Email Address"
                className="auth-input"
              />
            </div>
            <div className="auth-input-container flex-column">
              <span className="auth-input-label">Password</span>
              <div className="auth-input-password-container flex-row">
                <input
                  type={`${passwordIsPassword ? "password" : "text"}`}
                  placeholder="Enter Password"
                  className="auth-input-password"
                />
                <span
                  className="auth-input-password-icon"
                  //   Toggle Password field input type
                  onClick={() => {
                    setPasswordIsPassword(!passwordIsPassword);
                  }}
                >
                  {passwordIsPassword ? (
                    <i className="far fa-eye-slash"></i>
                  ) : (
                    <i className="far fa-eye"></i>
                  )}
                </span>
              </div>
            </div>
            <span className="forgot-password-link">Forgot Password?</span>
            <button className="auth-button-default">Login</button>
          </div>

          <div className="social-login-container flex-column">
            <div className="or-social-row flex-row">
              <div className="or-rule"></div>
              <span className="or-social-text">Or</span>
              <div className="or-rule"></div>
            </div>
            <br />

            <div className="small-social-login-buttons flex-row">
              <button className="small-social-login-button flex-row">
                <img
                  src={GoogleSocialIcon}
                  alt=""
                  className="small-social-login-button-icon"
                />
              </button>
              <button className="small-social-login-button flex-row">
                <img
                  src={FacebookSocialIcon}
                  alt=""
                  className="small-social-login-button-icon"
                />
              </button>
              <button className="small-social-login-button flex-row">
                <img
                  src={AppleSocialIcon}
                  alt=""
                  className="small-social-login-button-icon"
                />
              </button>
            </div>
            <div className="social-login-buttons flex-column">
              <button className="social-login-button flex-row">
                <div className="social-login-button-icon-container">
                  <img
                    src={GoogleSocialIcon}
                    alt=""
                    className="social-login-button-icon"
                  />
                </div>
                Continue with Google
              </button>
              <button className="social-login-button flex-row">
                <div className="social-login-button-icon-container">
                  <img
                    src={FacebookSocialIcon}
                    alt=""
                    className="social-login-button-icon"
                  />
                </div>
                Continue with Facebook
              </button>
              <button className="social-login-button flex-row">
                <div className="social-login-button-icon-container">
                  <img
                    src={AppleSocialIcon}
                    alt=""
                    className="social-login-button-icon"
                  />
                </div>
                Continue with Apple
              </button>
            </div>
          </div>
        </div>
        <div className="login-container-right flex-column">
          <span className="auth-container-sub-header">New Users...</span>
          <div className="login-rafiki-image-container">
            <img src={LoginRafikiImage} alt="" className="login-rafiki-image" />
          </div>
          <div className="login-subtext">
            Create a QuickStay account to manage bookings, connect with owners
            and book a place faster next time. Property owners can also register
            here to create a listing.
          </div>
          <button className="auth-button-default">Register</button>
        </div>
      </div>
    </div>
  );
}
