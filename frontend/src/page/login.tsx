import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/login.css";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import NavbarLogin from "../component/navbar-login";
import Footer from "../component/footer";

const Login = () => {
  return (
    <>
      <header>
        <NavbarLogin />
      </header>
      <main style={{ backgroundImage: "url(/image/monk_login.png)" }}>
        <div className="login-box">
          <div
            className="login-box-picture"
            style={{ backgroundImage: "url(/image/monk_login.png)" }}
          >
            <div className="word">ยินดีต้อนรับ พุทธศาสนิกชน สู่ Wat Wat</div>
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
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input type="password" required />
              <label>รหัสผ่าน</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                จําชื่อผู้ใช้
              </label>
              <Link to="/">ลืมรหัสผ่าน?</Link>
            </div>
            <Link to="/search">
              <button type="submit" className="submit_button">
                เข้าสู่ระบบ
              </button>
            </Link>
            <div className="login-link">
              <span>ยังไม่มีบัญชี </span>
              <Link to="/register">สมัครสมาชิก</Link>
            </div>
          </form>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Login;
