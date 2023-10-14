import React from 'react'
import './navbar.css';
import {NavLink} from "react-router-dom";
    
export default function NavbarUser() {
    return (
        <>
            <div className='horizontal-menu'>
                <ul>
                    <li className='manu-1'><NavLink to="./main"><span>หน้าหลัก</span></NavLink></li>
                    <li className='manu-2'><NavLink to="./eventRequest"><span>ขอจัดกิจกรรม</span></NavLink></li>
                    <li className='manu-3'><NavLink to="./placeRequest"><span>ขอใช้สถานที่</span></NavLink></li>
                    <li className='manu-4'><NavLink to="./itemRequest"><span>ขอยืม/คืนสิ่งของ</span></NavLink></li>
                    <li className='manu-5'><NavLink to="./donate"><span>บริจาค</span></NavLink></li>
                </ul>
            </div>
        </>      
  )
}
