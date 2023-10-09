import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";
// import NavbarUser from "../component/header/navbar-user";
import temple from "../assets/temple.jpg";

import SidebarCreater from "../component/sidebar/sidebarCreater";
import HeaderCreator from "../component/header/header-creator";

export default function CreatorLayout() {
  return (
    <>
      <header>
        <HeaderCreator />
      </header>
        <div className="contantAddEvent addEvent">
          <Outlet />
        </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
