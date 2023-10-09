import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./bar.css";

type Props = {};

const CreatorNavbar = (props: Props) => {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/main">หน้าหลัก</NavLink>
        <NavLink to="/main">แจ้งจัดกิจกรรม</NavLink>
        <NavLink to="/main">แจ้งขอใช้สถานที่</NavLink>
        <NavLink to="/main">แจ้งใช้/เลิกใช้สิ่งของ</NavLink>
        <NavLink to="/createWatData">จัดการข้อมูลวัด</NavLink>
      </div>
    </nav>
  );
};

export default CreatorNavbar;
