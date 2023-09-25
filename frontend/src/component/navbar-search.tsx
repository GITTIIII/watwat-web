import * as React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarSearch = () => {
  const [click, setClick] = React.useState(false);
  const dropdownMenu = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="topleft-navbar">
        <img src="image/logo.png" className="logo" />
        <span>Wat Wat</span>
      </div>
      <div className="topright-navbar">
        <img src="image/no-profile.png" className="userprofile" />
        <div className="topright-navbar-menu">
          <FontAwesomeIcon icon={faCaretDown} className="icon" onClick={dropdownMenu}/>
          {click ? (
            <div className="right-menu">
              <ul>
                <li><Link to="/">สมัคร Wat Creator</Link></li>
                <li><Link to="/login">ออกจากระบบ</Link></li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
