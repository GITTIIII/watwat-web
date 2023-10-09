import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer";
import NavbarUser from "../component/header/navbar-user";
import temple from "../assets/temple.jpg";
import CreatorNavbar from "../component/CreatorNavbar/CreatorNavbar";
export default function CreatorLayout() {
  return (
    <>
      <header>
        <CreatorNavbar />
      </header>
      <main style={{ backgroundImage: `url(${temple})` }}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
