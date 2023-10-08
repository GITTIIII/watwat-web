import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForwardFast,
  faMagnifyingGlass,
  faPlay,
} from "@fortawesome/free-solid-svg-icons"; //for icon
import "./search.css";
import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchclick, setSearchClick] = React.useState(false);

  return (
    <>
        <div className={`middle-box ${searchclick ? "active" : ""}`}>
          <span>WAT WAT "ยินดีต้อนรับ"</span>
          <div className="search-bar">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <input type="text" placeholder="ค้นหาวัด" />
            <button
              className="search-button"
              onClick={() => {
                setSearchClick(true);
              }}
            >
              ค้นหา
            </button>
          </div>
        </div>
        {searchclick && (
          <div className="show-result-box">
            <div className="wat">
              <div>image</div>
              <div>วัดโคกอีเเร้ง</div>
              <div>
                กิจกรรม
                <div>งานศพ นาคพล ณ สุรนารี</div>
              </div>
              <div>
                ที่ตั้ง
                <div>
                  123/45 บ้านโคกอีเเร้ง ต.หนองหูเห่า อ.เมือง จ.นครราชสีมา
                </div>
              </div>
              <button>
                <Link to="/main">button</Link>
              </button>
            </div>
            <div className="wat"></div>
            <div className="wat"></div>
            <div className="wat"></div>
            <div className="wat"></div>
          </div>
        )}
        {searchclick && (
          <div className="pagination">
            <FontAwesomeIcon
              icon={faForwardFast}
              rotation={180}
              className="icon"
            />
            <FontAwesomeIcon icon={faPlay} rotation={180} className="icon" />
            <div className="page-select">1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <FontAwesomeIcon icon={faPlay} className="icon" />
            <FontAwesomeIcon icon={faForwardFast} className="icon" />
          </div>
        )}
    </>
  );
};

export default Search;
