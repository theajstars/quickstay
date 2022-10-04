import FeaturedPropertyImageOne from "../Assets/IMG/FeaturedProperties/FeaturedPropertyImageOne.png";
import FeaturedPropertyImageTwo from "../Assets/IMG/FeaturedProperties/FeaturedPropertyImageTwo.png";
import FeaturedPropertyImageThree from "../Assets/IMG/FeaturedProperties/FeaturedPropertyImageThree.png";
import BlueLocationIcon from "../Assets/IMG/Icons/BlueLocationIcon.svg";
import WhiteEyeIcon from "../Assets/IMG/Icons/WhiteEyeIcon.svg";

import { Container } from "@mui/material";
export default function FeaturedProperties() {
  return (
    <div className="home-section-container">
      <Container maxWidth="xl">
        <div className="home-section-header">Featured Properties</div>

        <div className="featured-properties-arrows-container flex-row">
          <div className="featured-properties-arrows flex-row">
            <span className="featured-property-arrow">
              <i className="far fa-angle-left"></i>
            </span>
            <span className="featured-property-arrow">
              <i className="far fa-angle-right"></i>
            </span>
          </div>
        </div>
        <center>
          <div className="featured-properties-container flex-row">
            <div className="featured-properties flex-row">
              <div className="featured-property flex-column">
                <img
                  src={FeaturedPropertyImageOne}
                  alt=""
                  className="featured-property-image"
                />
                <div className="featured-property-about flex-column">
                  <span className="featured-property-name">
                    Modern En-suite Studio Rooms
                  </span>
                  <span className="featured-property-location flex-row">
                    <img src={BlueLocationIcon} alt="" />
                    &nbsp; Hyde Park/Paddington
                  </span>
                </div>
                <div className="featured-property-details flex-column">
                  <div className="featured-property-detail flex-row">
                    <span className="featured-property-detail-title">
                      Price
                    </span>
                    <span className="featured-property-detail-value">
                      £2,840.00 / Month
                    </span>
                  </div>
                  <div className="featured-property-detail flex-row">
                    <span className="featured-property-detail-title">
                      Bedroom
                    </span>
                    <span className="featured-property-detail-value">2</span>
                  </div>
                  <div className="featured-property-detail flex-row">
                    <span className="featured-property-detail-title">Type</span>
                    <span className="featured-property-detail-value">
                      Apartment
                    </span>
                  </div>
                  <div className="featured-property-button-container flex-row">
                    <button className="featured-property-button flex-row">
                      <img src={WhiteEyeIcon} alt="" />
                      View Listing
                    </button>
                  </div>
                </div>
              </div>

              <div className="featured-property flex-column">
                <img
                  src={FeaturedPropertyImageTwo}
                  alt=""
                  className="featured-property-image"
                />
                <div className="featured-property-about flex-column">
                  <span className="featured-property-name">
                    Stunning 3bed Canary Wharf Penthouse Apartment
                  </span>
                  <span className="featured-property-location flex-row">
                    <img src={BlueLocationIcon} alt="" />
                    &nbsp; Canary Wharf, London
                  </span>
                </div>
                <div className="featured-property-details flex-column">
                  <div className="featured-property-detail flex-row">
                    <span className="featured-property-detail-title">
                      Price
                    </span>
                    <span className="featured-property-detail-value">
                      £356.40 / Night
                    </span>
                  </div>
                  <div className="featured-property-detail flex-row">
                    <span className="featured-property-detail-title">
                      Bedroom
                    </span>
                    <span className="featured-property-detail-value">3</span>
                  </div>
                  <div className="featured-property-detail flex-row">
                    <span className="featured-property-detail-title">Type</span>
                    <span className="featured-property-detail-value">
                      Apartment
                    </span>
                  </div>
                  <div className="featured-property-button-container flex-row">
                    <button className="featured-property-button flex-row">
                      <img src={WhiteEyeIcon} alt="" />
                      View Listing
                    </button>
                  </div>
                </div>
              </div>
              <div className="featured-property flex-column">
                <img
                  src={FeaturedPropertyImageThree}
                  alt=""
                  className="featured-property-image"
                />
                <div className="featured-property-about flex-column">
                  <span className="featured-property-name">
                    Luxury Hyde Park Mews Home w/ Cinema Room
                  </span>
                  <span className="featured-property-location flex-row">
                    <img src={BlueLocationIcon} alt="" />
                    &nbsp; Hyde Park/Paddington
                  </span>
                </div>
                <div className="featured-property-details flex-column">
                  <div className="featured-property-detail flex-row">
                    <span className="featured-property-detail-title">
                      Price
                    </span>
                    <span className="featured-property-detail-value">
                      £3,450.00 / Week
                    </span>
                  </div>
                  <div className="featured-property-detail flex-row">
                    <span className="featured-property-detail-title">
                      Bedroom
                    </span>
                    <span className="featured-property-detail-value">3</span>
                  </div>
                  <div className="featured-property-detail flex-row">
                    <span className="featured-property-detail-title">Type</span>
                    <span className="featured-property-detail-value">
                      Apartment
                    </span>
                  </div>
                  <div className="featured-property-button-container flex-row">
                    <button className="featured-property-button flex-row">
                      <img src={WhiteEyeIcon} alt="" />
                      View Listing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </center>
      </Container>
    </div>
  );
}
