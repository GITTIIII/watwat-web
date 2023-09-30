import {NavLink } from "react-router-dom";
import "../css/navbar.css";


function MenuItem() {
  return (
    <>
      <div className="menu-navbar">
        <NavLink to="/main" >หน้าหลัก</NavLink>
        <NavLink to="/eventRequest">ขอจัดกิจกรรม</NavLink>
        <NavLink to="/placeRequest">ขอใช้สถานที่</NavLink>
        <NavLink to="/item">ยืม/คืนสิ่งของ</NavLink>
        <NavLink to="/donate">บริจาค</NavLink>
      </div>
    </>
  );
};

export default MenuItem;
