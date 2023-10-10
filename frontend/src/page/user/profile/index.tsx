import "./profile.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GetMemberByUsername, UpdateMember } from "../../../services/https/member";
import { useEffect, useState} from "react";
import no_profile from "../../../assets/no_profile.png"
import { Form, message } from "antd";
import { MembersInterface } from "../../../interfaces/IMember";

const Profile = () => {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const username = Cookies.get("username");
  const [ID, setID] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Doc_Path, setDoc_Path] = useState("");
  const [Avatar, setAvatar] = useState("");
  const [Role, setRole] = useState("")
  const [RoleID, setRoleID] = useState("")

  useEffect(() => { 
    const getInfo = async () => {    
      const members = await GetMemberByUsername(username)
      setID(members.ID);
      setUsername(members.Username);
      setPassword(members.Password);
      setEmail(members.Email);
      setDoc_Path(members.Doc_Path);

      if(members.Avatar === ""){
        setAvatar(no_profile);
      }
      else{
        setAvatar(members.Avatar);
      }

      setRole(members.Role.RoleName);
      setRoleID(members.RoleID);
    }
    getInfo()
  },[username])

  console.log(ID)
  console.log(Username)
  console.log(Password)
  console.log(Email)
  console.log(Doc_Path)
  console.log(Avatar)
  console.log(Role)
  console.log(RoleID)

  const [input, setInput] = useState({
    Username: "",
    Email: "",
    Password: "",
  });
  
  const handleInput = (e:any) =>{
    setInput({...input,[e.target.name] : [e.target.value]});
  }

  const handleSubmit = async (values: MembersInterface) => {  
    values.ID = parseInt(ID);
    if(input.Username === ""){
      values.Username = Username
    }
    else{
      values.Username = input.Username
    }
    if(input.Password === ""){
      values.Password = Password
    }
    else{
      values.Password = input.Password
    }
    if(input.Email === ""){
      values.Email = Email
    }
    else{
      values.Email = input.Email
    }
    values.Doc_Path = Doc_Path;
    values.Avatar =	 "";
    values.RoleID =  parseInt(RoleID);

    console.log(values)

    let res = await UpdateMember(values);
    if (res.status) {
      Cookies.set('username', values.Username, { expires: 7 });
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/search");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  }

  return (
    <>
        <Form className="middle-box" onFinish={handleSubmit}>
          {contextHolder}
          <div className="profile">
            <img src={Avatar} alt=""/>
            <input type="file" />
          </div>
          <div className="info">
            <div className="userInfo" >

              <div>
                ชื่อผู้ใช้
                <input 
                type="text" 
                placeholder={Username} 
                onChange={handleInput}
                name="Username"
                />
              </div>

              <div>
                อีเมล
                <input 
                type="email" 
                placeholder={Email} 
                onChange={handleInput}
                name="Email"
                />
              </div>

              <div>
                รหัสผ่าน
                <input type="password" 
                placeholder={Password} 
                onChange={handleInput}
                name="Password"
                />
              </div>

              <div>
                สถานะผู้ใช้
                <input readOnly value={Role}/>
              </div>

            </div>
          </div>
          <div className="profile-button">
              <Link to="/search" >
                <button className="submit_button">ยกเลิก</button>
              </Link>
                <button type="submit" className="submit_button">
                  บันทึก
                </button>
          </div>
        </Form>
   
    </>
  );
};

export default Profile;
