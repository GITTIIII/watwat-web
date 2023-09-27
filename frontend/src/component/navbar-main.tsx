import * as React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css'
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo";
import UserProfile from "./userprofile";
const NavbarMain = () => {
  const [click, setClick] = React.useState(false);

  return (
    <div className="navbar">
        <div className="side-menu">
          <FontAwesomeIcon icon={faBars} className="left-icon" onClick={()=>{setClick(!click)}}/>
          <div className={`left-menu ${click? 'active' : 'inactive'}`}>
            <ul>
              <li><Link to="/" className="page-active">หน้าหลัก</Link></li>
              <li><Link to="">ขอจัดกิจกรรม</Link></li>
              <li><Link to="/place">ขอใช้สถานที่</Link></li>
              <li><Link to="">ยืม/คืนสิ่งของ</Link></li>
              <li><Link to="">บริจาค</Link></li>  
            </ul>
          </div>
        </div>
      <div className="topleft-navbar">
        <Logo/>
        <span>Wat Wat</span>
      </div>
        <div className="menu-navbar">
          <Link to="/" className="page-active">หน้าหลัก</Link>
          <Link to="">ขอจัดกิจกรรม</Link>
          <Link to="/place">ขอใช้สถานที่</Link>
          <Link to="">ยืม/คืนสิ่งของ</Link>
          <Link to="">บริจาค</Link>
        </div>
      <div className="topright-navbar">
        <UserProfile/>
        <div className="topright-navbar-menu">
          <FontAwesomeIcon icon={faCaretDown} className="right-icon" onClick={()=>{setClick(!click)}}/>
          {click ? (
            <div className={`right-menu ${click? 'active' : 'inactive'}`}>
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

export default NavbarMain;
