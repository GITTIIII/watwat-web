import React, { useState } from "react";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
import { Form, message } from "antd";
import { MonksInterface } from "../../../../interfaces/IMonk";
import { CreateMonk } from "../../../../services/https/monk";
import "./index.css";
const CreatorMonk = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [value, setValue] = useState({
    Name: "",
    Birthday: "",
    Rank: "",
  });

  const handleSubmit = async (values: MonksInterface) => {
    values.Name = value.Name;
    values.Birthday = value.Birthday;
    values.Rank = value.Rank;
    values.WatID = 1;

    let res = await CreateMonk(values);
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
      <div className="monk">
        {contextHolder}
        <Form onFinish={handleSubmit}>
          <label>กรอกชื่อพระสงฆ์</label>
          <input
            name="Name"
            type="text"
            placeholder="กรอกชื่อพระสงฆ์"
            onChange={onChange}
          />
          <label>วัน/เดือน/ปี เกิด</label>
          <input
            name="Birthday"
            type="date"
            placeholder="วัน/เดือน/ปี เกิด"
            onChange={onChange}
          />
          <label>กรอกสมณศักดิ์</label>
          <input
            name="Rank"
            type="text"
            placeholder="กรอกสมณศักดิ์"
            onChange={onChange}
          />
          <button type="submit">ยืนยัน</button>
        </Form>
      </div>
    </>
  );
};

export default CreatorMonk;
