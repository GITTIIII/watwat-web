import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css";
import { faKey, faUser ,faEnvelope } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import NavbarRegister from "../component/navbar-register";
const Register = () => {
  return (
    <>
        <header >
            <NavbarRegister/>
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
        <Footer/>
      </footer>
    </>
  );
}

export default Register;
