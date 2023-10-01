import { Link, NavLink } from "react-router-dom";
import '../css/navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function LeftMenu(){
    return(
      <>
        <div className="left-menu" >
            <ul>
                <NavLink to="/search" >
                <li>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  ค้นหา</li>
                </NavLink>
                <NavLink to="/main" >
                  <li>หน้าหลัก</li>
                </NavLink>
                <NavLink to="/eventRequest">
                  <li>ขอจัดกิจกรรม</li>
                </NavLink>
                <NavLink to="/placeRequest">
                  <li>ขอใช้สถานที่</li>
                </NavLink>
                <NavLink to="/item">
                  <li>ยืม/คืนสิ่งของ</li>
                </NavLink>
                <NavLink to="/donate">
                  <li>บริจาค</li>
                </NavLink>
              
            </ul>
        </div>
      </>
    );
};

export default LeftMenu;