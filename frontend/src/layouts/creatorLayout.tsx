import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";
<<<<<<< HEAD
import NavbarUser from "../component/header/header-user";
import temple from "../assets/temple.jpg"
=======
import SidebarCreater from "../component/sidebar/sidebarCreater";
import HeaderCreator from "../component/header/header-creator";
import "./creatorLayout.css";
>>>>>>> 50a08d645ff3c676341e2a0669f740438f7ba645
export default function CreatorLayout() {
  return (
    <>
      <header>
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}
