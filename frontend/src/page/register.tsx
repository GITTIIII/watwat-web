import "../css/login.css";
import { Form, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link, useNavigate } from "react-router-dom";
import { MembersInterface } from "../interfaces/IMember";
import { CreateMember } from "../services/https/member";
import { useState } from "react";
import monk_login from "../assets/monk_login.png"

const Register = () => {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [input, setInput] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const handleInput = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (values: MembersInterface) => {
    values.Username = input.Username;
    values.Password = input.Password;
    values.Email = input.Email;
    values.Doc_Path = "";
    values.Avatar = "";
    values.RoleID = 1;

    let res = await CreateMember(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  return (
    <>
      <section className="login-box">
        {contextHolder}
        <div className="login-box-picture" style={{ backgroundImage: `url(${monk_login})` }}>
          <div className="word">ยินดีต้อนรับ พุทธศาสนิกชน สู่ Wat Wat</div>
          <div className="word1">
            " วันที่ดีที่สุด คือวันที่ได้ทำความดี และสะสมบุญ "
          </div>
        </div>

        <Form onFinish={handleSubmit} autoComplete="off">
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <label>ชื่อผู้ใช้</label>
            <input
              type="text"
              name="Username"
              onChange={handleInput}
              required
            />
          </div>

          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <label>อีเมล</label>
            <input type="text" name="Email" onChange={handleInput} required />
          </div>

          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faKey} />
            </span>
            <label>รหัสผ่าน</label>
            <input
              type="password"
              name="Password"
              onChange={handleInput}
              required
            />
          </div>

          <button className="submit_button">สร้างบัญชีใหม่</button>

          <div className="login-link">
            <span>มีบัญชีเเล้ว </span>
            <Link to="/">เข้าสู่ระบบ</Link>
          </div>
        </Form>
      </section>
    </>
  );
};

export default Register;
