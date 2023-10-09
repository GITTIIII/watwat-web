import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";
// import NavbarUser from "../component/header/navbar-user";
import temple from "../assets/temple.jpg";
import CreatorNavbar from "../component/CreatorNavbar/CreatorNavbar";

import SidebarCreater from "../component/sidebar/sidebarCreater";
import HeaderCreator from "../component/header/header-creator";
import "./creatorLayout.css";

export default function CreatorLayout() {
  return (
    <>
      <header>
        <CreatorNavbar />
      </header>
      <main style={{ backgroundImage: `url(${temple})` }}>
        <Outlet />
      </main>
      <HeaderCreator />

      <div className="warpperAddEvent">
        <div className="sidebarCreater">
          <SidebarCreater></SidebarCreater>
        </div>
        <div className="contantAddEvent addEvent">
          <Outlet />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
