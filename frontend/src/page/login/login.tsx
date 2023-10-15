import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link, useNavigate } from "react-router-dom";
import monk_login from '../../assets/monk_login.png'
import { Form, message } from "antd";
import { useState } from "react";
import { GetMemberByUsername } from "../../services/https/member";
import Cookies from "js-cookie";

const Login = () => {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  
  const [input, setInput] = useState({
    Username: "",
    Password: "",
  });

  const handleInput = (e:any) =>{
    setInput({...input,[e.target.name] : [e.target.value]});
  }

  

  const handleSubmit = async () => {    
    const members = await GetMemberByUsername(input.Username[0]);    
    
    if (input.Username[0] === members.Username && input.Password[0] === members.Password) {
      Cookies.set('username', input.Username[0], { expires: 7 });
      Cookies.set('memberID', `${ members.ID }`, { expires: 7 });
      messageApi.open({
        type: "success",
        content: "ล็อกอินเสร็จสิ้น",
      });
      if ( members.RoleID == 1) {
        setTimeout(function () {
        navigate("/search");
      }, 2000);
      } else if (members.RoleID == 2) {
         navigate("/mainCreater");
      } else if (members.RoleID == 3) {
         navigate("/mainAdmin");
      }
    } 
    else {
      messageApi.open({
        type: "error",
        content: "ล็อกอินไม่สำเร็จ",
      });
    }
  };

  return (
    <>
        <section className="login-box">
          {contextHolder}
          <div className="login-box-picture" style={{ backgroundImage: `url(${monk_login})` }}>
            <div className="word">ยินดีต้อนรับ พุทธศาสนิกชน สู่ Wat Wat</div>
            <div className="word1">" วันที่ดีที่สุด คือวันที่ได้ทำความดี และสะสมบุญ "</div>
          </div>
          <Form onFinish={handleSubmit} >
            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faUser} /></span>
              <label>ชื่อผู้ใช้</label>
              <input 
                type="text" 
                name="Username"
                onChange={handleInput}
                required
              />
            </div>
            <div className="input-box">
              <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
              <label>รหัสผ่าน</label>
              <input 
                type="password" 
                name="Password"
                onChange={handleInput}
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

          </Form>
        </section>
    </>
  );
};

export default Login;
