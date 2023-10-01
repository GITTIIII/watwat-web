import "../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link, Navigate } from "react-router-dom";
import { useRef, useState, useEffect} from "react"
import axios from "../api/axios";

const REGISTER_URL = '/'

const Register = () => {
  const userRef = useRef(null);
  const emailRef = useRef(null);
  const errRef = useRef(null);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pass, email]);

  const handleSubmit = async (e:any) => {
    e.preventDafault();
    try{
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({user, pass ,email}),
        {
          headers: {'Content-Type' : 'application/json'},
          withCredentials: true
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err){
      if (!err?.response){
        setErrMsg('No Server Response');
      } else if(err.response?.status === 409){
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  }

  return (
    <> 
        {success ? <Navigate to="/"/>:( 
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
                required 
              />
            </div>

            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
              <label htmlFor="email">อีเมล</label>
              <input 
                type="text" 
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}               
                required 
              />
            </div>

            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faKey} /></span>
              <label htmlFor="password">รหัสผ่าน</label>
              <input 
                type="password" 
                id="password"
                onChange={(e) => setPass(e.target.value)}
                required 
              />
            </div>

            <button className="submit_button">
              สร้างบัญชีใหม่
            </button>
            
            <div className="login-link">
              <span>มีบัญชีเเล้ว </span>
              <Link to="/">เข้าสู่ระบบ</Link>
            </div>

          </form>
        </section>)}
    </>
  );
};

export default Register;
