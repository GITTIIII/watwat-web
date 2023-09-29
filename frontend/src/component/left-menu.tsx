import { Link, NavLink } from "react-router-dom";
import '../css/navbar.css'
function LeftMenu(){
    return(
      <>
        <div className="left-menu" >
            <ul>
              <li>
                <NavLink to="/" >หน้าหลัก</NavLink>
              </li>
              <li>
                <NavLink to="/event">ขอจัดกิจกรรม</NavLink>
              </li>
              <li>
                <NavLink to="/place">ขอใช้สถานที่</NavLink>
              </li>
              <li>
                <NavLink to="/item">ยืม/คืนสิ่งของ</NavLink>
              </li>
              <li>
                <NavLink to="/donate">บริจาค</NavLink>
              </li>
            </ul>
        </div>
      </>
    );
};

export default LeftMenu;