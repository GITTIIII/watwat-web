import "./header.css";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../logo/logo";
import RightMenu from "../right-menu/right-menu";
import React, { useEffect, useRef } from "react";
import UserImage from "../userImage/userImage";
import { Link } from "react-router-dom";

function HeaderSearch() {
  const [Rclick, setRClick] = React.useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const closeMenu = (e: any) => {
      console.log(e);
      if (menuRef.current && !menuRef.current.contains(e.target)) {
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
        <Link to="/search">
          <div className="topleft-navbar">
            <Logo />
            <span>Wat Wat</span>
          </div>
        </Link>
        <div className="topright-navbar">
          <UserImage />
          <div
            className={`topright-navbar-menu ${Rclick ? "active" : ""}`}
            onClick={() => setRClick(!Rclick)}
            ref={menuRef}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} className="right-icon" />
            {Rclick && <RightMenu />}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSearch;
