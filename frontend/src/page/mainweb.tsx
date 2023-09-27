import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons"; //for icon
import "../css/mainweb.css";
import Footer from "../component/footer";
import NavbarSearch from "../component/navbar-search";
import React from "react";
const MainWeb = () => {
  const [searchclick,setSearchClick] = React.useState(false)

  return (
    <>
      <header>
        <NavbarSearch/>
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
        <div className={`middle-box ${searchclick ? "active" : ""}`}>
          <span>WAT WAT "ยินดีต้อนรับ"</span>
          <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <input type="text" placeholder="ค้นหาวัด" />
              <button className="search-button" onClick={() => {setSearchClick(true)}}>
                  ค้นหา
              </button>
          </div>
        </div>
        {searchclick && <div className="show-result-box">
          <div className="wat-box">
            <div className="wat">
              
            </div>
            <div className="wat">
              
            </div>
            <div className="wat">
              
            </div>
            <div className="wat">
              
            </div>
            <div className="wat">
              
            </div>
          </div>
          <div className="pagination">
              <FontAwesomeIcon icon={faPlay} rotation={180} className="icon"/>
              <div className="page-select">1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <FontAwesomeIcon icon={faPlay} className="icon"/>
          </div>
        </div>}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default MainWeb;
