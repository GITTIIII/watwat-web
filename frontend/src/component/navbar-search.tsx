import * as React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo";
import UserProfile from "./userprofile";

const NavbarSearch = () => {

  
  return (
    <div className="navbar">
      <div className="topleft-navbar">
        <Logo/>
        <span>Wat Wat</span>
      </div>
      <div className="topright-navbar">
        <UserProfile/>
        <div className="topright-navbar-menu">
          <FontAwesomeIcon icon={faCaretDown} className="right-icon" />
         
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
          
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
