import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import Logo from "./logo";

function NavbarRegister() {
  return (
    <>
      <div className="navbar">
        <div className="topleft-navbar">
          <Logo />
          <span>Wat Wat</span>
        </div>
        <div className="topright-navbar">
          <button>
            <Link to="/">
              <button>เข้าสู่ระบบ</button>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default NavbarRegister;
