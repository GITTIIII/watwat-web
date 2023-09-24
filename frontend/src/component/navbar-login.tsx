import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavbarLogin = () =>{
  return (
    <div className="navbar">
          <div className="topleft-navbar">
            <img src="image/logo.png" className="logo" />
            <span>Wat Wat</span>
          </div>
          <div className="topright-navbar">
            <button>
              <Link to="/register">
                <button>สมัครสมาชิก</button>
              </Link>
            </button>
          </div>
        </div>
  )
}

export default NavbarLogin;