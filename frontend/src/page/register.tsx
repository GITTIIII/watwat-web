import "../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link, Navigate } from "react-router-dom";
import { useState} from "react"


const Register = () => {
    const [success, setSuccess] = useState(false);
    const [state, setState] = useState({
      username:"",
      email: "",
      password: ""
    });

    const handleInputChange = (e:any) => {
      const { name, value } = e.target;
      setState((prevProps) => ({
        ...prevProps,
        [name]: value
      }));
    };

    const handleSubmit  = (e:any) => {
        e.preventDefault();
        console.log(state);
        setSuccess(true);
    }

  

  return (
    <> 
        {success ? <Navigate to="/"/>:( 
        <section className="login-box">
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
                value={state.username}
                autoComplete="off" 
                required 
                onChange = {(e) => handleInputChange(e)}
              />
            </div>

            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
              <label htmlFor="email">อีเมล</label>
              <input 
                type="text" 
                id="email"
                value={state.email}
                autoComplete="off"
                required 
                onChange = {(e) => handleInputChange(e)}
              />
            </div>

            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faKey} /></span>
              <label htmlFor="password">รหัสผ่าน</label>
              <input 
                type="password" 
                id="password"
                value={state.password}
                required 
                onChange = {(e) => handleInputChange(e)}
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
