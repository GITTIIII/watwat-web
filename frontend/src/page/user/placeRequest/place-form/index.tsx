import { Link, useNavigate } from "react-router-dom";
import "./place-form.css";
import { Form, message } from "antd";
import { useState } from "react";
import { PlaceUsesInterface } from "../../../../interfaces/IPlaceUse";
import { CreatePlaceUse } from "../../../../services/https/placeUse";
const Placeform = () => {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [input, setInput] = useState({
    UserRequestName: "",
    DateBegin: "",
    TimeOfBegin: "",
    DateEnd: "",
    TimeOfEnd: "",
    UserTel: "",
    Description: "",
  });

  const handleInput = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (values: PlaceUsesInterface) => {
    values.UserRequestName = input.UserRequestName;
    values.DateBegin = input.DateBegin;
    values.TimeOfBegin = input.TimeOfBegin;
    values.DateEnd = input.DateEnd;
    values.TimeOfEnd = input.TimeOfEnd;
    values.UserTel = input.UserTel;
    values.Description = input.Description;
    

    let res = await CreatePlaceUse(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/placeRequest");
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
        <div className="place-form-box">
          {contextHolder}
          <div className="side-button">
            <Link to="/placeRequest">
              <button>ย้อนกลับ</button>
            </Link>
          </div>
          <div className="place-form">

            <Form onFinish={handleSubmit}>
              <div className="place-top-form">

                <div className="name-input">
                  <label>ชื่อผู้ขอใช้</label>
                  <input 
                  type="text" 
                  name="UserRequestName"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="phone-input">
                  <label>เบอร์โทร</label>
                  <input 
                  type="text" 
                  name="UserTel"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="start-date-input">
                  <label>วันเริ่มต้น</label>
                  <input 
                  type="date" 
                  name="DateBegin"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="end-date-input">
                  <label>วันสิ้นสุด</label>
                  <input type="date" 
                  name="DateEnd"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="start-date-input">
                  <label>เวลาเริ่มต้น</label>
                  <input type="time" 
                  name="TimeOfBegin"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="end-date-input">
                  <label>เวลาสิ้นสุด</label>
                  <input type="time"
                  name="TimeOfEnd"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="place-input">
                  <label>สถานที่</label>
                  <select name="Place" onChange={handleInput} required>
                    <option>-</option>
                    <option>ศาลาวัด</option>
                    <option>ศาลาวัด</option>
                  </select>
                </div>

                <div className="event-input">
                  <label>ต้องการจัดงานอะไร</label>
                  <select name="Event" onChange={handleInput} required>
                    <option>-</option>
                    <option>งานศพ</option>
                    <option>งานศพ</option>
                  </select>
                </div>

              </div>

              <div className="place-buttom-form">
                <div className="comment">
                  <label>หมายเหตุ:</label>
                  <textarea 
                  name="Description" 
                  onChange={handleInput} 
                  />
                </div>
              </div>

            </Form>
          </div>
        </div>
        
        <div className="place-form-button">
          <button type="submit" className="submit_button">ส่งการร้องขอ</button>
        </div>
    
    </>
  );
};

export default Placeform;
