import Logo from "../Assets/IMG/Logo.svg";
import GreatBritainFlag from "../Assets/IMG/GreatBritainFlag.png";
import GetAppIcon from "../Assets/IMG/GetAppIcon.png";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
export default function TopNavBar() {
  return (
    <div className={"top-nav-container"}>
      <Container maxWidth="xl">
        <div className="top-nav flex-row">
          <img src={Logo} alt="" className="top-nav-logo" />

          <div className="top-nav-items flex-row">
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
          </div>
        </div>
      </Container>
    </div>
  );
}
