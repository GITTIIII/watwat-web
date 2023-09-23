import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import "./mainweb.css";
import "./login.css";
import Navbar from "../component/navbar-login";
import Footer from "../component/footer";
import NavbarMain from "../component/navbar-main";
const MainWeb = () => {
  return (
    <>
      <header>
        <NavbarMain/>
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
        <div className="middle-box">
          <div>WAT WAT "ยินดีต้อนรับ"</div>
          <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <input type="text" placeholder="ค้นหาวัด" />
            <Link to="/place">
              <button className="search-button">ค้นหา</button>
            </Link>
          </div>
        </div>
        <div className="show-result-box"></div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default MainWeb;
