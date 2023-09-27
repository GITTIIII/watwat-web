import {NavLink } from "react-router-dom";
import "../css/navbar.css";


function MenuItem() {
  return (
    <>
      <div className="menu-navbar">
        <NavLink to="/" >หน้าหลัก</NavLink>
        <NavLink to="">ขอจัดกิจกรรม</NavLink>
        <NavLink to="/place">ขอใช้สถานที่</NavLink>
        <NavLink to="">ยืม/คืนสิ่งของ</NavLink>
        <NavLink to="">บริจาค</NavLink>
      </div>
    </>
  );
};

export default MenuItem;
