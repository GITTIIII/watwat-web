import { useState, useEffect } from "react";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
import { Form, message } from "antd";
import { WatsInterface } from "../../../../interfaces/IWat";
import { UpdateWat, GetWatById } from "../../../../services/https/wat";
import Cookies from "js-cookie";
import "./index.css";

const CreatorGeneral = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [wat, setWat] = useState<WatsInterface[]>([]);

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
    setValue({
      ...value,
      [e.target.name]:
        e.target.value === null ? e.target.placeholder : e.target.value,
    });
    console.log("Hello", e.target.placeholder);
  };

  const handleSubmit = async (values: WatsInterface) => {
    values.ID = Number(Cookies.get("memberID"));

    values.Name = value.Name === null ? values.Name : value.Name;
    values.Abbot = value.Abbot;
    values.Description = value.Description;
    values.Address = value.Address;
    values.Postcode = value.Postcode;
    values.Province = value.Province;
    values.District = value.District;
    values.Subdistrict = value.Subdistrict;
    values.MemberID = Number(Cookies.get("memberID"));

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
        content: "บันทึกข้อมูลไม่สำเร็จ ชื่อเจ้าอาวาสซ้ำ",
      });
    }
  };

  const getWat = async () => {
    let res = await GetWatById(Number(Cookies.get("memberID")));
    if (res) {
      setWat(res);
    }
  };

  useEffect(() => {
    getWat();
  }, []);

  return (
    <div className="generalPage">
      <SidebarCreatorWatData />
      {contextHolder}
      <Form onFinish={handleSubmit}>
        <div className="general">
          <div>
            <div>
              <label>กรอกชื่อวัด</label>
              <input
                name="Name"
                type="text"
                placeholder={String(Object(wat).Name)}
                onChange={onChange}
              />
            </div>
            <div>
              <label>กรอกชื่อเจ้าอาวาส</label>
              <input
                name="Abbot"
                type="text"
                placeholder={String(Object(wat).Abbot)}
                onChange={onChange}
              />
            </div>
            <div>
              <label>กรอกคำอธิบายวัด</label>
              <textarea
                name="Description"
                placeholder={String(Object(wat).Description)}
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <label>กรอกรายละเอียดที่อยู่</label>
            <input
              name="Address"
              type="text"
              placeholder={String(Object(wat).Address)}
              onChange={onChange}
            />

            <label>กรอกรหัสไปรษณีย์</label>
            <input
              name="Postcode"
              type="text"
              placeholder={String(Object(wat).Postcode)}
              onChange={onChange}
            />

            <label>เลือกจังหวัด</label>
            <select name="Province" onChange={onChange} required>
              <option value="none" hidden></option>
              <option value="นครราชสีมา">นครราชสีมา</option>
            </select>

            <label>เลือกอำเภอ</label>
            <select name="District" onChange={onChange} required>
              <option value="none" hidden></option>
              <option value="อำเภอ1">อำเภอ1</option>
              <option value="อำเภอ2">อำเภอ2</option>
            </select>

            <label>เลือกตำบล</label>
            <select name="Subdistrict" onChange={onChange} required>
              <option value="none" hidden></option>
              <option value="ตำบล1">ตำบล1</option>
              <option value="ตำบล2">ตำบล2</option>
            </select>
          </div>
        </div>
        <div className="generalButton">
          <button type="submit">ยืนยัน</button>
        </div>
      </Form>
    </div>
  );
};

export default CreatorGeneral;
