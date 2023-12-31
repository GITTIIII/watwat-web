import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
export default function NavbarCreator() {
  return (
    <div className="horizontal-menu">
      <ul>
        <li className="manu-1">
          <NavLink to="./mainCreator">
            <span>หน้าหลัก</span>
          </NavLink>
        </li>
        <li className="manu-2">
          <NavLink to="./addEvent">
            <span>แจ้งจัดกิจกรรม</span>
          </NavLink>
        </li>
        <li className="manu-3">
          <NavLink to="./addPlaceUse">
            <span>แจ้งใช้สถานที่</span>
          </NavLink>
        </li>
        <li className="manu-4">
          <NavLink to="./addItemUse">
            <span>แจ้งใช้สิ่ง/เลิกใช้สิ่งของ</span>
          </NavLink>
        </li>
        <li className="manu-5">
          <NavLink to="./creatorGeneral">
            <span>จัดการข้อมูลวัด</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
