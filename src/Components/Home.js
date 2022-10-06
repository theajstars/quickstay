import { useState, useEffect } from "react";

import { Container } from "@mui/material";
import { motion } from "framer-motion";

import PropertiesSearchBar from "./PropertiesSeachBar";
import SearchIcon from "../Assets/IMG/Icons/Search.svg";
import CalendarIcon from "../Assets/IMG/Icons/CalendarWhiteIcon.svg";
import CreditCardIcon from "../Assets/IMG/Icons/CreditCard.svg";
import FeaturedProperties from "./FeaturedProperties";
import SmartProperty from "./SmartProperty";
import AboutQuickstay from "./AboutQuickstay";
import Footer from "./Footer";
import Auth from "./Auth/Auth";

export default function Home() {
  const [isScrolled, setScrolled] = useState(true);
  const [isAuthModalVisible, setAuthModalVisible] = useState(true);
  useEffect(() => {
    document.body.onscroll = function (e) {
      const scrolledPosition = window.scrollY;
      if (scrolledPosition > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, [window]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  return (
    <>
      <motion.div
        className="auth-modal"
        onClick={() => {
          setAuthModalVisible(false);
        }}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: isAuthModalVisible ? 1 : 0,
        }}
      ></motion.div>
      {isAuthModalVisible && <Auth />}
      <div className="home-container">
        <Container maxWidth="xl">
          <div alt="" className="home-jumbotron-image"></div>
          <div className="home-jumbotron flex-column">
            <span className="jumbo-header">
              Short Lets and Corporate <br /> Rentals Made Easy
            </span>
            <PropertiesSearchBar />
            <div className="home-jumbo-carousel-controller flex-row">
              <div className="home-jumbo-carousel-dot home-jumbo-carousel-dot-active"></div>
              <div className="home-jumbo-carousel-dot"></div>
              <div className="home-jumbo-carousel-dot"></div>
              <div className="home-jumbo-carousel-dot"></div>
              <div className="home-jumbo-carousel-dot"></div>
            </div>
          </div>
        </Container>
        <div className="home-section-container">
          <div className="home-section-header">How it Works?</div>
          <center>
            <div className="how-it-works-container flex-row">
              <div className="how-it-works-card-background">
                <div className="how-it-works-card flex-column">
                  <span className="how-it-works-icon how-it-works-search-icon">
                    <img
                      className="how-it-works-image"
                      src={SearchIcon}
                      alt=""
                    />
                  </span>
                  <span className="how-it-works-text">
                    Look for your ideal property rental/sale
                  </span>
                  <span className="how-it-works-index">1</span>
                </div>
              </div>
              <div className="how-it-works-card-background">
                <div className="how-it-works-card flex-column">
                  <span className="how-it-works-icon how-it-works-calendar-icon">
                    <img
                      className="how-it-works-image"
                      src={CalendarIcon}
                      alt=""
                    />
                  </span>
                  <span className="how-it-works-text">
                    Check availability for your proposed dates
                  </span>
                  <span className="how-it-works-index">2</span>
                </div>
              </div>
              <div className="how-it-works-card-background">
                <div className="how-it-works-card flex-column">
                  <span className="how-it-works-icon how-it-works-credit-icon">
                    <img
                      className="how-it-works-image"
                      src={SearchIcon}
                      alt=""
                    />
                  </span>
                  <span className="how-it-works-text">
                    Send an enquiry/follow payment process
                  </span>
                  <span className="how-it-works-index">3</span>
                </div>
              </div>
            </div>
          </center>
        </div>

        <FeaturedProperties />
        <SmartProperty />
        <AboutQuickstay />
        <Footer />
        {isScrolled && (
          <span className="scroll-to-top flex-row" onClick={scrollToTop}>
            <i className="far fa-chevron-up"></i>
          </span>
        )}
      </div>
    </>
  );
}
