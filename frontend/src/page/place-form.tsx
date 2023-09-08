import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import "./place.css";
import "./login.css";
import "./mainweb.css";
import "./place-form.css";
import { Calendar } from "antd";
import NavbarMain from "../component/navbar-main";
const Placeform = () => {
  return (
    <>
      <header>
        <NavbarMain/>
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
        <div className="side-button">
          <Link to="/place">
            <button>ย้อนกลับ</button>
          </Link>
        </div>
        <div className="place-form-box">
          <div className="name-input">
            <label>ชื่อผู้ขอใช้</label>
            <input type="text" />
          </div>
          <div className="phone-input">
            <label>เบอร์โทร</label>
            <input type="text" />
          </div>
          <div className="start-date-input">
            <label>วันเริ่มต้น</label>
            <input type="date" />
          </div>
          <div className="end-date-input">
            <label>วันสิ้นสุด</label>
            <input type="date" />
          </div>
          <div className="place-input">
            <label>สถานที่</label>
            <select>
              <option>-</option>
              <option>ศาลาวัด</option>
              <option>ศาลาวัด</option>
            </select>
          </div>
          <div className="event-input">
            <label>ต้องการจัดงานอะไร</label>
            <select>
              <option>-</option>
              <option>งานศพ</option>
              <option>งานศพ</option>
            </select>
          </div>
          <div className="calender">
            <label>ปฏิทิน</label>
          </div>
          <div className="comment">
            <label>หมายเหตุ:</label>
            <textarea></textarea>
          </div>
          <Link to="/place">
            <button>ส่งการร้องขอ</button>
          </Link>
        </div>
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

export default Placeform;
