import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";
import SidebarCreater from "../component/sidebar/sidebarCreater";
import HeaderCreator from "../component/header/header-creator";
import "./creatorLayout.css";
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
