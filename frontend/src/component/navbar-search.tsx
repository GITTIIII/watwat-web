import * as React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo";
import UserProfile from "./userprofile";

const NavbarSearch = () => {
  const [click, setClick] = React.useState(false);
  const dropdownMenu = () => {
    setClick(!click);
  };

  return (
    <div className="navbar">
      <div className="topleft-navbar">
        <Logo/>
        <span>Wat Wat</span>
      </div>
      <div className="topright-navbar">
        <UserProfile/>
        <div className="topright-navbar-menu">
          <FontAwesomeIcon icon={faCaretDown} className="right-icon" onClick={dropdownMenu}/>
          {click ? (
            <div className="right-menu">
              <ul>
                <li>
                  <Link to="/">สมัคร Wat Creator</Link>
                </li>
                <li>
                  <Link to="/login">ออกจากระบบ</Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
