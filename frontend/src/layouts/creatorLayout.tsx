import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";
// import NavbarUser from "../component/header/navbar-user";
import temple from "../assets/temple.jpg";

import SidebarCreater from "../component/sidebar/sidebarCreater";
import HeaderCreator from "../component/header/header-creator";
import "./creatorLayout.css";

export default function CreatorLayout() {
  return (
    <>
      <main>
        <HeaderCreator />
      </main>
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
