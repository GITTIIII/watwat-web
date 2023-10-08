import { Link } from "react-router-dom";
import "./place-form.css";
const Placeform = () => {
  return (
    <>
     
        <div className="place-form-box">
          <div className="side-button">
            <Link to="/placeRequest">
              <button>ย้อนกลับ</button>
            </Link>
          </div>
          <div className="place-form">
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
          </div>
        </div>
        <Link to="/placeRequest">
              <button type="submit" className="submit_button">ส่งการร้องขอ</button>
        </Link>
    
    </>
  );
};

export default Placeform;
