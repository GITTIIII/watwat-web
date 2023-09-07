import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import "./place.css";
import "./login.css";
const Place = () => {
  return (
    <>
      <header>
        <div className="nav-bar">
          <div className="topleft-navbar">
            <img src="image/logo.png" className="logo" />
            <span>Wat Wat</span>
          </div>
          <div className="menu-navbar">
            <Link to="/">หน้าหลัก</Link>
            <Link to="">ขอจัดกิจกรรม</Link>
            <Link to="/place" className="page-active">
              ขอใช้สถานที่
            </Link>
            <Link to="">ยืม/คืนสิ่งของ</Link>
            <Link to="">บริจาค</Link>
          </div>
          <div className="topright-navbar">
            <Link to="/login">
              <button>ออกจากระบบ</button>
            </Link>
            <img src="image/logo.png" className="userprofile" />
          </div>
        </div>
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
        <div className="place-middle-box">
          <div className="place-top-middle-box">
            <div className="place-word">
              <h3>วัดโคกอีเเร้ง</h3>
              <h5>รายการขอใช้สถานที่</h5>
            </div>
            <Link to="/placeform">
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </Link>
          </div>
          <div className="place-result-middle-box">
            <div className="temple">
              <img src="image/jandang.jpg" />
              <div className="infomation">
                <div className="top-info">
                  <div>
                    วันที่
                    <br />
                    วว-ดด-ปป ถึง วว-ดด-ปป
                    <br />
                  </div>
                  <div>
                    ชื่อผู้ขอใช้
                    <br />
                    นายพล ตุงตัง
                    <br />
                  </div>
                  <div>
                    สถานะ
                    <br />
                    รออนุมัติ
                    <br />
                  </div>
                </div>
                <div className="bottom-info">
                  <div>
                    จัดงาน
                    <br />
                    งายศพ
                    <br />
                  </div>
                  <div>
                    สถานที่
                    <br />
                    ศาลาวัด
                    <br />
                  </div>
                  <div>
                    เบอร์โทร
                    <br />
                    012-345-678
                    <br />
                  </div>
                </div>
              </div>
              <Link to="/place"><button>ยกเลิก</button></Link>
            </div>
          </div>
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

export default Place;
