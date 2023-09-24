import * as React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarPlace = () => {
  const [sidemenuclick, setSideMenuClick] = React.useState(false);
  const [click, setClick] = React.useState(false);
  const dropdownMenu = () => {
    setClick(!click);
  };

  const sideMenu = () => {
    setSideMenuClick(!sidemenuclick);
  };
  return (
    <div className="navbar">
        <div className="side-menu">
          <FontAwesomeIcon icon={faBars} className="left-icon" onClick={sideMenu}/>
          {sidemenuclick ? (
          <div className="left-menu">
            <ul>
              <li><Link to="/">หน้าหลัก</Link></li>
              <li><Link to="">ขอจัดกิจกรรม</Link></li>
              <li><Link to="/place" className="page-active">ขอใช้สถานที่</Link></li>
              <li><Link to="">ยืม/คืนสิ่งของ</Link></li>
              <li><Link to="">บริจาค</Link></li>  
            </ul>
          </div>
          ):null}
        </div>
      <div className="topleft-navbar">
        <img src="image/logo.png" className="logo" />
        <span>Wat Wat</span>
      </div>
        <div className="menu-navbar">
          <Link to="/">หน้าหลัก</Link>
          <Link to="">ขอจัดกิจกรรม</Link>
          <Link to="/place" className="page-active">
            ขอใช้สถานที่
          </Link>
          <Link to="">ยืม/คืนสิ่งของ</Link>
          <Link to="">บริจาค</Link>
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

export default NavbarPlace;
