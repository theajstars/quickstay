import { Container } from "@mui/material";

import ShortTermLetsImage from "../Assets/IMG/ShortTermLetsImage.svg";
import SmarterPropertyImage from "../Assets/IMG/SmarterProperty.svg";

export default function AboutQuickstay() {
  return (
    <div className="home-section-container">
      <Container maxWidth="xl">
        <div className="home-section-header">About QuickStay</div>
        <div className="about-quickstay-container flex-row">
          <div className="about-quickstay-column flex-column">
            <img
              className="about-quickstay-column-image"
              src={ShortTermLetsImage}
              alt=""
            />
            <span className="about-quickstay-column-header">
              Holiday Accomodation
            </span>
            <div className="about-quickstay-column-text">
              Whether you're looking for a trendy Apartment in the city, a
              spacious Villa in the suburbs or a charming Cottage in the
              country; QuickStay offers a wide range of accommodation to ensure
              we have exactly what you're looking for.
              <br />
              <br />
              Find the perfect rental property with QuickStay and benefit from
              extra space, flexibility or simply more for your money. We've made
              the process easy to find holiday rentals for all types of
              getaways.
              <br />
              <br />
              And of course, let's not forget the bonuses that come with booking
              a holiday rental, such as, use of laundry facilities, cooking,
              outdoor space and much more!
            </div>
          </div>
          <div className="about-quickstay-column flex-column">
            <img
              className="about-quickstay-column-image"
              src={ShortTermLetsImage}
              alt=""
            />
            <span className="about-quickstay-column-header">
              Short-Term Lets
            </span>
            <div className="about-quickstay-column-text">
              Whatever your circumstances; be it business or pleasure, QuickStay
              offers short term rentals from affordable studios, to whole homes.
              <br />
              <br />
              With QuickStay it's all about flexibility, so whether you’re a
              professional, student or simply visiting, Quickstay offers a
              variety of short let accommodation available to suit less
              conventional rental periods, from one week to six months.
            </div>
          </div>
        </div>
        <br />
        <br />
        <center>
          <button className="home-button-default btn-dark-blue">
            List My Property
          </button>
        </center>
      </Container>
    </div>
  );
}
