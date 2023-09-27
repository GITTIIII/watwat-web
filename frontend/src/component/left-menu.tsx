import { Link, NavLink } from "react-router-dom";
import '../css/navbar.css'
function LeftMenu(){
    return(
      <>
        <div className="left-menu">
            <ul>
              <li>
                <NavLink to="/" >หน้าหลัก</NavLink>
              </li>
              <li>
                <NavLink to="">ขอจัดกิจกรรม</NavLink>
              </li>
              <li>
                <NavLink to="/place">ขอใช้สถานที่</NavLink>
              </li>
              <li>
                <NavLink to="">ยืม/คืนสิ่งของ</NavLink>
              </li>
              <li>
                <NavLink to="">บริจาค</NavLink>
              </li>
            </ul>
        </div>
      </>
    );
};

export default LeftMenu;