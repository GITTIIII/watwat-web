import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";
<<<<<<< HEAD
import NavbarUser from "../component/header/navbar-user";
import temple from "../assets/temple.jpg";
import CreatorNavbar from "../component/CreatorNavbar/CreatorNavbar";
=======

import SidebarCreater from "../component/sidebar/sidebarCreater";
import HeaderCreator from "../component/header/header-creator";
import "./creatorLayout.css";

>>>>>>> 631fbcc521ee104277c834c1a369bdd046905370
export default function CreatorLayout() {
  return (
    <>
      <header>
<<<<<<< HEAD
        <CreatorNavbar />
      </header>
      <main style={{ backgroundImage: `url(${temple})` }}>
        <Outlet />
      </main>
=======
        <HeaderCreator />
      </header>
      <div className="warpperAddEvent">
        <div className="sidebarCreater">
          <SidebarCreater></SidebarCreater>
        </div>
        <div className="contantAddEvent addEvent">
          <Outlet />
        </div>
      </div>
>>>>>>> 631fbcc521ee104277c834c1a369bdd046905370
      <footer>
        <Footer />
      </footer>
    </>
  );
}
