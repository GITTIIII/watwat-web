import React from 'react'
import './navbar.css';
import {NavLink,} from "react-router-dom";
export default function NavbarCreator() {
  return (
    <div className='horizontal-menu'>
        <ul>
            <li className='manu-1'><NavLink to="./main"><span>หน้าหลัก</span></NavLink></li>
            <li className='manu-2'><NavLink to="./addEvent"><span>แจ้งจัดกิจกรรม</span></NavLink></li>
            <li className='manu-3'><NavLink to="./addItemLoan"><span>แจ้งใช้สถานที่</span></NavLink></li>
            <li className='manu-4'><NavLink to="./addPlacUse"><span>แจ้งใช้สิ่ง/คืนสิ่งของ</span></NavLink></li>
            <li className='manu-5'><NavLink to="./ceratrWatData"><span>สร้างข้อมูลวัด</span></NavLink></li>
        </ul>
    </div>
  )
}
