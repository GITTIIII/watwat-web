import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import "../css/mainweb.css";
import Footer from "../component/footer";
import NavbarSearch from "../component/navbar-search";
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
              <button className="search-button">
                  <Link to="/place">ค้นหา</Link>
              </button>
          </div>
        </div>
        <div className="show-result-box">
          
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default MainWeb;
