import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css";
import { faKey, faUser ,faEnvelope } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
        <header >
            <div className="nav-bar">
                <div className="topleft-navbar">
                    <img src="image/logo.png" className="logo" />
                    <span>Wat Wat</span>
                </div>
                <div className="topright-navbar">
                    <Link to="/login"><button>เข้าสู่ระบบ</button></Link>
                    <img src="image/logo.png" className="userprofile" />
                </div>
            </div>
        </header> 
        <main style={{backgroundImage:"url(/image/monk_login.png)"}}> 
            <div className="login-box">
                <div className="login-box-picture" style={{backgroundImage:"url(/image/monk_login.png)"}}>
                    <div className="word">
                        ยินดีต้อนรับ พุทธศาสนิกชน
                        สู่ Wat Wat
                    </div>
                    <div className="word1">
                        " วันที่ดีที่สุด คือวันที่ได้ทำความดี และสะสมบุญ "
                    </div>
                </div>
                <form action="">
                    <div className="input-box">
                        <span className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input type="text" required />
                        <label>ชื่อผู้ใช้</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input type="password" required />
                        <label>อีเมล</label>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input type="password" required />
                        <label>รหัสผ่าน</label>
                    </div>
                    <Link to="/login"><button type="submit" className="submit_button">สร้างบัญชีใหม่</button></Link>
                    <div className="login-link">
                        <span>มีบัญชีเเล้ว </span> 
                        <Link to="/login">เข้าสู่ระบบ</Link>
                    </div>
                </form>
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
}

export default Register;
