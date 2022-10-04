import Logo from "../Assets/IMG/Logo.svg";
import GreatBritainFlag from "../Assets/IMG/GreatBritainFlag.png";
import GetAppIcon from "../Assets/IMG/GetAppIcon.png";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TopNavBar() {
  const [isMenuActive, setMenuActive] = useState(false);
  return (
    <div className={"top-nav-container"}>
      <span
        className="toggle-menu"
        onClick={() => {
          setMenuActive(!isMenuActive);
        }}
      >
        <i className="far fa-bars"></i>
      </span>
      <Container
        maxWidth="xl"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div className="top-nav flex-row">
          <img src={Logo} alt="" className="top-nav-logo" />

          <motion.div
            className="top-nav-items flex-row"
            initial={{
              top: -450,
            }}
            animate={{
              top: isMenuActive ? 0 : -450,
            }}
          >
            <Link className="top-nav-item top-nav-get-app flex-row">
              <img src={GetAppIcon} alt="" />
              &nbsp; Get App
            </Link>
            <Link className="top-nav-item">Short lets</Link>
            <Link className="top-nav-item">Login / Register</Link>
            <Link className="top-nav-item top-nav-action flex-row">
              GBP (£) &nbsp;<i className="far fa-chevron-down"></i>
            </Link>
            <Link className="top-nav-item top-nav-action flex-row">
              <img src={GreatBritainFlag} alt="" /> &nbsp; ENG &nbsp;
              <i className="far fa-chevron-down"></i>
            </Link>
            <Link className="top-nav-item list-property-btn flex-row">
              List a property
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
