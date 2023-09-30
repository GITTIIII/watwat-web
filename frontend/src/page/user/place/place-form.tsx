import { Link } from "react-router-dom";
import "../../../css/place-form.css";
import NavbarMain from "../../../component/navbar-main";
import Footer from "../../../component/footer";
const Placeform = () => {
  return (
    <>
      <header>
        <NavbarMain/>
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
        <div className="side-button">
          <Link to="/placeRequest">
            <button>ย้อนกลับ</button>
          </Link>
        </div>
        <div className="place-form-box">
        <div className="place-top-form">

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
        </div>
          <div className="place-buttom-form">
            <div className="calender">
              <label>ปฏิทิน</label>
            </div>
            <div className="comment">
              <label>หมายเหตุ:</label>
              <textarea></textarea>
            </div>
          </div>
          <Link to="/placeRequest">
            <button>ส่งการร้องขอ</button>
          </Link>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Placeform;
