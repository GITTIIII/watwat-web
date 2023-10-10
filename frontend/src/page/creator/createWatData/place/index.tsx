import React, { useState } from "react";
import { Form, message } from "antd";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
import { PlacesInterface } from "../../../../interfaces/IPlace";
import { CreatePlace } from "../../../../services/https/place";
import "./index.css";

const CreatorPlace = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [value, setValue] = useState({
    Name: "",
  });

  const handleSubmit = async (values: PlacesInterface) => {
    values.Name = value.Name;
    values.WatID = 1;
    values.StatusID = 1;

    let res = await CreatePlace(values);
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
      <SidebarCreatorWatData />
      <div className="place">
        {contextHolder}
        <Form onFinish={handleSubmit}>
          <label>กรอกชื่อสถานที่</label>
          <input
            name="Name"
            type="text"
            placeholder="กรอกชื่อสถานที่"
            onChange={onChange}
          />
          <button type="submit">ยืนยัน</button>
        </Form>
      </div>
    </>
  );
};

export default CreatorPlace;
