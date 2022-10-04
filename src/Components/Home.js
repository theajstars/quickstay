import { Container } from "@mui/material";
import { motion } from "framer-motion";
import PropertiesSearchBar from "./PropertiesSeachBar";

export default function Home() {
  return (
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
    </div>
  );
}
