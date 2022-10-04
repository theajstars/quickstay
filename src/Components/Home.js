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
          {/* <PropertiesSearchBar /> */}
        </div>
      </Container>
    </div>
  );
}
