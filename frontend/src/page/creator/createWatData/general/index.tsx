import { useState } from "react";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
import { Form, message } from "antd";
import { WatsInterface } from "../../../../interfaces/IWat";
import { UpdateWat } from "../../../../services/https/wat";
import "./index.css";

const CreatorGeneral = () => {
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

  const onChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (values: WatsInterface) => {
    values.ID = 1;
    values.Name = value.Name;
    values.Abbot = value.Abbot;
    values.Description = value.Description;
    values.Address = value.Address;
    values.Postcode = value.Postcode;
    values.Province = value.Province;
    values.District = value.District;
    values.Subdistrict = value.Subdistrict;
    values.MemberID = 1;

    let res = await UpdateWat(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        window.location.reload();
      }, 500);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  return (
    <>
      <SidebarCreatorWatData />
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

export default CreatorGeneral;
