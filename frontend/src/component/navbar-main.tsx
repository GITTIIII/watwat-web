import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarMain = () => {
  return (
    <div className="nav-bar">
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
            <img src="image/logo.png" className="userprofile" />
            <FontAwesomeIcon icon={faBars} className="icon"/>
            <div className="topright-navbar-menu">
              <Link to="/">สมัคร Wat Creator</Link>
              <Link to="/login">ออกจากระบบ</Link>
            </div>
          </div>
        </div>
  )
}

export default NavbarMain;