import "../css/navbar.css";
import { faBars, faCaretDown, faEllipsisVertical, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo";
import UserProfile from "./userprofile";
import React from "react";
import LeftMenu from "./left-menu";
import RightMenu from "./right-menu";
import MenuItem from "./menu-item";

function NavbarMain(){
  const [Lclick, setLClick] = React.useState(false);
  const [Rclick, setRClick] = React.useState(false);

  return (
    <>
      <div className="navbar">
        <div className="topleft-navbar-menu">
          <FontAwesomeIcon icon={faBars} className="left-icon" onClick={() => setLClick(!Lclick)}/>
          {Lclick && <LeftMenu/>}
        </div>
        <div className="topleft-navbar">
          <Logo />
          <span>Wat Wat</span>
        </div>
        <MenuItem />
        <div className="topright-navbar">
          <UserProfile />
          <div className={`topright-navbar-menu ${Rclick ? "active":""}`}>
            <FontAwesomeIcon icon={faEllipsisVertical} className="right-icon" onClick={() => setRClick(!Rclick)}/>
            {Rclick && <RightMenu/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
