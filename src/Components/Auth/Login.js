import GoogleSocialIcon from "../../Assets/IMG/Icons/GoogleSocialIcon.svg";
import FacebookSocialIcon from "../../Assets/IMG/Icons/FacebookSocialIcon.svg";
import AppleSocialIcon from "../../Assets/IMG/Icons/AppleSocialIcon.svg";

export default function Login({ passRoute }) {
  return (
    <div className="login-container">
      <div className="login-container-left flex-column">
        <span className="auth-container-header">Login</span>

        <div className="login-container-form">
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
                type="password"
                placeholder="Enter Password"
                className="auth-input-password"
              />
              <span className="auth-input-password-icon">
                <i className="far fa-eye-slash"></i>
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
          </div>
        </div>
      </div>
    </div>
  );
}
