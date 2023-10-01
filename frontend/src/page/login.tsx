import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/login.css";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link, Navigate } from "react-router-dom";
import {useRef, useState, useEffect} from 'react'


const Login = () => {
  const userRef = useRef(null);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    //userRef.current.focus();
  },[])

  useEffect(() => {
    setErrMsg("");
  }, [user, pass])


  const handleSubmit = async (e:any) => {
    e.preventDafault();
    console.log(user, pass);
    setUser("");
    setPass("");
    setSuccess(true);
  }

  return (
    <>
        {success ?  <Navigate to="/search"/> : (
        <section className="login-box">
          <p  className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <div className="login-box-picture" style={{ backgroundImage: "url(/image/monk_login.png)" }}>
            <div className="word">ยินดีต้อนรับ พุทธศาสนิกชน สู่ Wat Wat</div>
            <div className="word1">" วันที่ดีที่สุด คือวันที่ได้ทำความดี และสะสมบุญ "</div>
          </div>
          <form onSubmit={handleSubmit}>

            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
              <label htmlFor="username">ชื่อผู้ใช้</label>
              <input 
                type="text" 
                id="username"
                ref={userRef} 
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>

            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
              <label htmlFor="password">รหัสผ่าน</label>
              <input 
                type="password" 
                id="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                required
              />
            </div>


            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                จําชื่อผู้ใช้
              </label>
              <Link to="/">ลืมรหัสผ่าน?</Link>
            </div>
            
              <button className="submit_button">เข้าสู่ระบบ</button>
            
            <div className="login-link">
              <span>ยังไม่มีบัญชี </span>
              <Link to="/register">สมัครสมาชิก</Link>
            </div>

          </form>
        </section>)}
    </>
  );
};

export default Login;
