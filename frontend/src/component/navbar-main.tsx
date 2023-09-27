import { Link } from "react-router-dom";
import "../css/navbar.css";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo";
import UserProfile from "./userprofile";
import React from "react";
import LeftMenu from "./left-menu";
function NavbarMain(){
  const [click, setClick] = React.useState(false);

   const openMenu = () => {
    setClick(!click);
  }

  return (
    <div className="navbar">
      <div className="side-menu">
        <FontAwesomeIcon icon={faBars} className="left-icon" onClick={openMenu}/>
        {click && <LeftMenu/>}
      </div>
      <div className="topleft-navbar">
        <Logo />
        <span>Wat Wat</span>
      </div>
      <div className="menu-navbar">
        <Link to="/" className="page-active">
          หน้าหลัก
        </Link>
        <Link to="">ขอจัดกิจกรรม</Link>
        <Link to="/place">ขอใช้สถานที่</Link>
        <Link to="">ยืม/คืนสิ่งของ</Link>
        <Link to="">บริจาค</Link>
      </div>
      <div className="topright-navbar">
        <UserProfile />
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

export default NavbarMain;
