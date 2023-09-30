import "../css/navbar.css";
import { faBars, faEllipsisVertical, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./logo";
import UserProfile from "./useImage";
import React,{useEffect, useRef} from "react";
import LeftMenu from "./left-menu";
import RightMenu from "./right-menu";
import MenuItem from "./menu-item";
import { Link } from "react-router-dom";
import UserImage from "./useImage";

function NavbarMain(){
  const [Lclick, setLClick] = React.useState(false);
  const [Rclick, setRClick] = React.useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const closeMenu = (e:any) => {
    console.log(e);
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setLClick(false);
      setRClick(false);
      console.log(menuRef.current);
    }
  };

  document.addEventListener("mousedown", closeMenu);

  return () => document.removeEventListener("mousedown", closeMenu);
}, []);


  return (
    <>
      <div className="navbar">
        <div className="topleft-navbar-menu" onClick={() => setLClick(!Lclick)} ref={menuRef}>
          <FontAwesomeIcon icon={faBars} className="left-icon"  />
          {Lclick && <LeftMenu />}
        </div>
        <div className="topleft-navbar">
          <Logo />
          <span>Wat Wat</span>
        </div>
        <MenuItem />
        <div className="topright-navbar">
          <button>
            <Link to="/search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />ค้นหา
            </Link>
          </button>
          <UserImage />
          <div className={`topright-navbar-menu ${Rclick ? "active":""}`}  onClick={() => setRClick(!Rclick)} ref={menuRef}>
            <FontAwesomeIcon icon={faEllipsisVertical} className="right-icon" />
            {Rclick && <RightMenu/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
