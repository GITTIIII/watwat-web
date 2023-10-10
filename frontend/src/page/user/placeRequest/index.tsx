import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import "./place.css";

const Place = () => {
  
  return (
    <>
      
        <div className="place-middle-box">
          
          <div className="place-top-middle-box">
            <div className="place-word">
              <h3>วัดโคกอีเเร้ง</h3>
              <h5>รายการขอใช้สถานที่</h5>
            </div>
            <Link to="/placeForm">
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </Link>
          </div>
          <div className="place-result-middle-box">
            <div className="temple">
              <img src="./image/jandang.jpg" alt=""/>
              <div className="infomation">
                
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
                
                
                  <div>
                    จัดงาน
                    <br />
                    งานศพ
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
              <button>
              <Link to="/place">
                ยกเลิก
              </Link>
              </button>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Place;
