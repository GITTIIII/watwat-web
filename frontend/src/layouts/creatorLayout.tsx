import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";
import HeaderCreator from "../component/header/header-creater";
import temple from "../assets/temple.jpg";
import SidebarCreator from "../component/sidebar/sidebarCreator";
export default function CreatorLayout() {
  return (
    <>
      <header>
        <HeaderCreator />
      </header>
      <div className="warpperAddEvent">
        <div className="sidebarCreater">
          <SidebarCreator/>
        </div>
        <main className="contantAddEvent addEvent">
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
