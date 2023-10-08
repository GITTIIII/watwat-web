import React from 'react'
import {Link,NavLink,} from "react-router-dom";

import { SidebarData } from './sidebarData';
import './css/sidebar.css';
export default function SidebarCreater() {
  return (
    <nav className={'nav-menu'}>
      <ul className='nav-menu-items'>
        <li className='head-item'><span>เมนู</span></li>
            {SidebarData.map((item, index) => {
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
  )
}
