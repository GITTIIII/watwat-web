import React from "react";
import { Link, NavLink } from "react-router-dom";

import { SidebarData2 } from "./sidebarData";
import "./sidebar.css";
export default function SidebarCreatorWatData() {
  return (
    <nav className={"side-menu"}>
      <ul className="side-menu-items">
        <li className="head-item">
          <span>เมนู</span>
        </li>
        {SidebarData2.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <NavLink to={item.path}>
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
