import { Link } from "react-router-dom";

import "../../../css/profile.css";
import senku from "../../../assets/senku.png"
const Profile = () => {
  return (
    <>
     
        <div className="middle-box">
          <div className="profile">
            <img src={senku} alt=""/>
            <input type="file" />
          </div>
          <div className="info">
            <div className="userInfo">
              <div>
                ชื่อ
                <input type="text" />
              </div>
              <div>
                อีเมล
                <input type="email" />
              </div>
              <div>
                รหัสผ่าน
                <input type="password" />
              </div>
            </div>
          </div>
          <div className="profile-button">
              <Link to="/search">
                <button type="submit" className="submit_button" >
                  ยกเลิก
                </button>
              </Link>
              <Link to="/search">
                <button type="submit" className="submit_button">
                  บันทึก
                </button>
              </Link>
          </div>
        </div>
   
    </>
  );
};

export default Profile;
