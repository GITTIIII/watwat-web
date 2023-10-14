import "./header.css";
import Logo from "../logo/logo";
import { Link } from "react-router-dom";

function HeaderLogin() {
  return (
    <>
      <div className="navbar">
        <div className="topleft-navbar">
          <Link to="" className="topleft-navbar">
            <Logo />
            <span>Wat Wat</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderLogin;
