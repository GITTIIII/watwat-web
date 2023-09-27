import { Link } from "react-router-dom";
import '../css/navbar.css'
function LeftMenu(){
    return(
        <div className="left-menu">
            <ul>
              <li>
                <Link to="/" className="page-active">หน้าหลัก</Link>
              </li>
              <li>
                <Link to="">ขอจัดกิจกรรม</Link>
              </li>
              <li>
                <Link to="/place">ขอใช้สถานที่</Link>
              </li>
              <li>
                <Link to="">ยืม/คืนสิ่งของ</Link>
              </li>
              <li>
                <Link to="">บริจาค</Link>
              </li>
            </ul>
          </div>
    )
}

export default LeftMenu;