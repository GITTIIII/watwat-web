import "../../../css/profile.css";
import { Link } from "react-router-dom";
import senku from "../../../assets/senku.png"
import Cookies from "js-cookie";
import { GetMemberByUsername } from "../../../services/https/member";



const Profile = () => {
  const username = Cookies.get('username');
  const members = GetMemberByUsername(username);
  console.log(members)
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
              <div>
                สถานะผู้ใช้
                <input type="text" />
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
