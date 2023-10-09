import { useState } from "react";
import { WatsInterface } from "../../../../interfaces/IWat";
import { Form, message } from "antd";
//import { useNavigate } from "react-router-dom";
import { CreateWat } from "../../../../services/https/wat";
import { useNavigate } from "react-router";
import "./index.css";
import CreateWatSidebar from "../../../../component/CreatorNavbar/CreateWatSidebar";

const General = () => {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState({
    Name: "",
    Abbot: "",
    Description: "",
    Address: "",
    Postcode: "",
    Province: "",
    District: "",
    Subdistrict: "",
  });

  const handleSubmit = async (values: WatsInterface) => {
    values.Name = value.Name;
    values.Abbot = value.Abbot;
    values.Description = value.Description;
    values.Address = value.Address;
    values.Postcode = value.Postcode;
    values.Province = value.Province;
    values.District = value.District;
    values.Subdistrict = value.Subdistrict;
    values.MemberID = 0;
    console.log(value.Province);
    console.log(values);
    let res = await CreateWat(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      //   setTimeout(function () {
      //     navigate("/");
      //   }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  const onChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  console.log(value);
  return (
    <>
      {/* <CreateWatSidebar /> */}
      <div className="general">
        {contextHolder}
        <Form onFinish={handleSubmit}>
          <label>กรอกชื่อวัด</label>
          <input
            name="Name"
            type="text"
            placeholder="กรอกชื่อวัด"
            onChange={onChange}
          />

          <label>กรอกชื่อเจ้าอาวาส</label>
          <input
            name="Abbot"
            type="text"
            placeholder="กรอกชื่อเจ้าอาวาส"
            onChange={onChange}
          />

          <label>กรอกคำอธิบายวัด</label>
          <textarea
            name="Description"
            placeholder="กรอกคำอธิบายวัด"
            onChange={onChange}
          />

          <label>กรอกรายละเอียดที่อยู่</label>
          <input
            name="Address"
            type="text"
            placeholder="กรอกรายละเอียดที่อยู่"
            onChange={onChange}
          />

          <label>กรอกรหัสไปรษณีย์</label>
          <input
            name="Postcode"
            type="text"
            placeholder="กรอกรหัสไปรษณีย์"
            onChange={onChange}
          />

          <label>กรอกรหัสไปรษณีย์</label>
          <select
            name="Province"
            placeholder="เลือกจังหวัด"
            onChange={onChange}
            required
          >
            <option value="none" selected disabled hidden>
              ---เลือกจังหวัด---
            </option>
            <option value="นครราชสีมา">นครราชสีมา</option>
          </select>

          <label>กรอกรหัสไปรษณีย์</label>
          <select
            name="District"
            placeholder="เลือกอำเภอ"
            onChange={onChange}
            required
          >
            <option value="none" selected disabled hidden>
              ---เลือกอำเภอ---
            </option>
            <option value="อำเภอ1">อำเภอ1</option>
            <option value="อำเภอ2">อำเภอ2</option>
          </select>

          <label>กรอกรหัสไปรษณีย์</label>
          <select
            name="Subdistrict"
            placeholder="เลือกตำบล"
            onChange={onChange}
            required
          >
            <option value="none" selected disabled hidden>
              ---เลือกตำบล---
            </option>
            <option value="ตำบล1">ตำบล1</option>
            <option value="ตำบล2">ตำบล2</option>
          </select>

          <button type="submit">ยืนยัน</button>
        </Form>
      </div>
    </>
  );
};

export default General;
