import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import {
  faForwardFast,
  faMagnifyingGlass,
  faPlay,
} from "@fortawesome/free-solid-svg-icons"; //for icon
import Cookies from "js-cookie";
import "./search.css";
import { useNavigate } from "react-router-dom";
import { WatsInterface } from "../../../interfaces/IWat";
import { GetWatByName } from "../../../services/https/wat";

const Search = () => {
  const navigate = useNavigate();
  const [searchclick, setSearchClick] = React.useState(false);
  const [wats, setWats] = useState<WatsInterface[]>([]);
  const [watNames, setWatNames] = useState("ก");
  const getWats = async () => {
    let res = await GetWatByName(watNames);
    if (!Array.isArray(res)) {
      res = [res];
    }
    setWats(res);
    setSearchClick(true);
  };
  console.log(wats);
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 11;
  // const displayedData = eventRequersts.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );
  // const handlePageChange = (page: any) => {
  //   setCurrentPage(page);
  // };
  return (
    <>
      <div className={`middle-box ${searchclick ? "active" : ""}`}>
        <span>WAT WAT "ยินดีต้อนรับ"</span>
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <input
            type="text"
            placeholder="ค้นหาวัด"
            onChange={(e) => setWatNames(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              getWats();
            }}
          >
            ค้นหา
          </button>
        </div>
      </div>
      {searchclick && 
        <div className="show-result-box">
          {wats.map((e, index) => (
            <div className="wat">
              <div>image</div>
              <div className="dataWat-box">
                <div className="nameWat">
                  <b>{e.Name}</b>
                </div>
                <div>
                  <b>ที่ตั้ง: </b>
                  <span>
                    {" "}
                    บ้าน {e.Address} ตำบล {e.Subdistrict} อำเภอ {e.District}{" "}
                    จังหวัด {e.Province}
                  </span>
                </div>
                <div>
                  <b>กิจกรรม: -</b>
                  {/* <span> 123/45 บ้านโคกอีเเร้ง ต.หนองหูเห่า อ.เมือง จ.นครราชสีมา</span> */}
                </div>
              </div>
              <button
                className="button-wat"
                onClick={() => {
                  navigate(`/main`);
                  Cookies.set('watID', `${e.ID}`, { expires: 1 });
                }}
              ><span>เลือก</span></button>
            </div>
          ))}
        </div>}
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
