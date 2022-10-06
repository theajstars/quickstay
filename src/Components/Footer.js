import QuickStayLogo from "../Assets/IMG/Logo.svg";
import CardsFullLogo from "../Assets/IMG/CardsFull.svg";

import TwitterIcon from "../Assets/IMG/Icons/TwitterIcon.svg";
import FacebookIcon from "../Assets/IMG/Icons/FacebookIcon.svg";
import InstagramIcon from "../Assets/IMG/Icons/InstagramIcon.svg";
import LinkedinIcon from "../Assets/IMG/Icons/LinkedinIcon.svg";

import AppStoreBadge from "../Assets/IMG/AppStoreBadge.svg";
import GooglePlayStoreBadge from "../Assets/IMG/GooglePlayBadge.svg";

import { Link } from "react-router-dom";
import { Container } from "@mui/material";
export default function Footer() {
  return (
    <div className="footer-container">
      <Container maxWidth="lg">
        <div className="footer-row-container flex-row">
          <div className="footer-row flex-row">
            <div className="footer-column flex-column">
              <div className="footer-column-item">
                <img src={QuickStayLogo} alt="" className="footer-logo" />
              </div>
              <div className="footer-column-item">
                <img src={CardsFullLogo} alt="" className="footer-cards-full" />
              </div>
            </div>
            <div className="footer-column flex-column">
              <div className="footer-column-item">
                <Link to="/" className="footer-link">
                  Terms & Conditions
                </Link>
              </div>
              <div className="footer-column-item">
                <Link to="/" className="footer-link">
                  Privacy Policy
                </Link>
              </div>
              <div className="footer-column-item">
                <Link to="/" className="footer-link">
                  Cancellation Policy
                </Link>
              </div>
              <div className="footer-column-item">
                <Link to="/" className="footer-link">
                  Booking Contract
                </Link>
              </div>
            </div>

            <div className="footer-column flex-column">
              <div className="footer-column-item">
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </div>
              <div className="footer-column-item">
                <Link to="/" className="footer-link">
                  About Us
                </Link>
              </div>
              <div className="footer-column-item">
                <Link to="/" className="footer-link">
                  Contact Us
                </Link>
              </div>
              <div className="footer-column-item footer-social-row flex-row">
                <a href="#" className="footer-social-link">
                  <img
                    src={FacebookIcon}
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
                <a href="#" className="footer-social-link">
                  <img
                    src={InstagramIcon}
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
                <a href="#" className="footer-social-link">
                  <img
                    src={TwitterIcon}
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
                <a href="#" className="footer-social-link">
                  <img
                    src={LinkedinIcon}
                    alt=""
                    className="footer-social-icon"
                  />
                </a>
              </div>
              <div className="footer-app-stores flex-row">
                <a href="#" className="footer-app-store-link">
                  <img
                    src={AppStoreBadge}
                    alt=""
                    className="footer-app-store-badge"
                  />
                </a>
                <a href="#" className="footer-app-store-link">
                  <img
                    src={GooglePlayStoreBadge}
                    alt=""
                    className="footer-app-store-badge"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <center>
          <div className="footer-copyright">
            &copy;{new Date(Date.now()).getFullYear()}&nbsp;QuickStay. All
            Rights Reserved
          </div>
        </center>
      </Container>
    </div>
  );
}
