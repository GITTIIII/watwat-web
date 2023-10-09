import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./bar.css";

type Props = {};

const CreateWatSidebar = (props: Props) => {
  return (
    <nav className="sidebar">
      <div className="sidebar-text">เมนู</div>
      <div>
        <NavLink to="/general">ข้อมูลทั่วไป</NavLink>
        <NavLink to="/monk">ข้อมูลพระสงฆ์</NavLink>
        <NavLink to="/place">ข้อมูลสถานที่</NavLink>
        <NavLink to="/item">ข้อมูลสิ่งของ</NavLink>
        <NavLink to="/donate">ข้อมูลบริจาค</NavLink>
      </div>
    </nav>
  );
};

export default CreateWatSidebar;
