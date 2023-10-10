import React, { useState } from "react";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
import { Form, message } from "antd";
import { ItemsInterface } from "../../../../interfaces/IItem";
import { CreateItem } from "../../../../services/https/item";
import "./index.css";
const CreatorItem = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [value, setValue] = useState({
    Name: "",
    Amount: "",
  });

  const handleSubmit = async (values: ItemsInterface) => {
    values.Name = value.Name;
    values.Amount = parseInt(value.Amount);
    values.WatID = 1;
    values.StatusID = 1;

    let res = await CreateItem(values);
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
      <div className="item">
        {contextHolder}
        <Form onFinish={handleSubmit}>
          <label>กรอกชื่อสิ่งของ</label>
          <input
            name="Name"
            type="text"
            placeholder="กรอกชื่อสิ่งของ"
            onChange={onChange}
          />
          <label>กรอกจำนวน</label>
          <input
            name="Amount"
            type="text"
            placeholder="กรอกจำนวน"
            onChange={onChange}
          />
          <button type="submit">ยืนยัน</button>
        </Form>
      </div>
    </>
  );
};

export default CreatorItem;
