import '../css/navbar.css'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo";
import UserProfile from "./userprofile";
import RightMenu from "./right-menu";
import React from 'react';

function NavbarSearch(){
  const [Rclick,setRClick] = React.useState(false);

  return (
    <>
      <div className="navbar">
        <div className="topleft-navbar">
          <Logo/>
          <span>Wat Wat</span>
        </div>
        <div className="topright-navbar">
          <UserProfile/>
          <div className={`topright-navbar-menu ${Rclick ? "active":""}`}>
            <FontAwesomeIcon icon={faCaretDown} className="right-icon" onClick={() => setRClick(!Rclick)}/>
            {Rclick && <RightMenu/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSearch;
