import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

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
            <Link to="/login">
              <button>ออกจากระบบ</button>
            </Link>
            <img src="image/logo.png" className="userprofile" />
          </div>
        </div>
  )
}

export default NavbarMain;