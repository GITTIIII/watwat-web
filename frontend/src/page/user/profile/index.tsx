import { Link } from "react-router-dom";
import Footer from "../../../component/footer";
import NavbarMain from "../../../component/navbar-main";
import "../../../css/profile.css";

const Profile = () => {
  return (
    <>
      <header>
        <NavbarMain />
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
        <div className="middle-box">
          <div className="profile">
            <img src="./image/senku.png" alt=""/>
            <input type="file" />
          </div>
          <div className="info">
            <div className="userInfo">
              <div>
                ชื่อ
                <input type="text" />
              </div>
              <div>
                ที่อยู่
                <input type="text" />
              </div>
              <div>
                อีเมล
                <input type="text" />
              </div>
              <div>
                เบอร์ติดต่อ
                <input type="text" />
              </div>
              <div>
                เพศ
                <input type="select" />
              </div>
              <div>
                วัน/เดือน/ปี เกิด
                <input type="date" />
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Profile;
