import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import "./mainweb.css";
import "./login.css";
const MainWeb = () => {
  return (
    <>
      <header>
        <div className="nav-bar">
          <div className="topleft-navbar">
            <img src="image/logo.png" className="logo" />
            <span>Wat Wat</span>
          </div>
          <div className="topright-navbar">
            <Link to="/login">
              <button>ออกจากระบบ</button>
            </Link>
            <img src="image/logo.png" className="userprofile" />
          </div>
        </div>
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
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quas
          ipsam fugit maiores quaerat numquam ut corrupti blanditiis recusandae
          vel quam perferendis nemo, magnam vitae quisquam cum animi dolor
          placeat!
        </div>
      </footer>
    </>
  );
};

export default MainWeb;
