import { Container } from "@mui/material";

import SmarterPropertyImage from "../Assets/IMG/SmartPropertyImage.png";
export default function SmartProperty() {
  return (
    <div className="smart-property-section-background flex-row">
      <Container maxWidth="xl">
        <div className="smart-property-section-container flex-row">
          <div className="smart-property-section-left flex-row">
            <div className="smart-property-section-left-content">
              <img
                src={SmarterPropertyImage}
                alt=""
                className="smarter-property-image"
              />
              <div className="smarter-property-image-background"></div>
            </div>
          </div>
          <div className="smart-property-section-right flex-column">
            <div className="smart-property-section-header text-white">
              The Smarter Way to Book a Property, <br /> The Perfect Way to Find
              a Home
            </div>
            <div className="smart-property-section-item flex-row">
              Book your ideal property rental or short let accommodation with
              QuickStay and benefit from flexibility, great rates, and
              convenience. We’ve made the process easy so you can find the right
              property more efficiently for your short term stay
            </div>
            <div className="smart-property-section-item flex-row">
              Whether you're looking for a trendy Apartment in the city, a
              spacious Villa in the suburbs or a cosy Cottage in the country;
              QuickStay offer a wide range of rentals to ensure we have exactly
              what you're looking for.
            </div>
            <div className="smart-property-section-item flex-row">
              It's free to advertise and easy to manage. You choose when you
              want to list your property and for as long as you want to list it.
              With over 10 years experience in serviced accommodation, we are
              here to help make the process easy!
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
