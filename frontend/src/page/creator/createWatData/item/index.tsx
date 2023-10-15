import React, { useState, useEffect } from "react";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
import { Form, message } from "antd";
import { ItemsInterface } from "../../../../interfaces/IItem";
import {
  CreateItem,
  GetItem,
  DeleteItemByID,
} from "../../../../services/https/item";
import "./index.css";

const CreatorItem = () => {
  const [value, setValue] = useState({
    Name: "",
    Amount: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [showItem, setShowItem] = useState<ItemsInterface[]>([]);

  const onChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

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

  const getItem = async () => {
    let res = await GetItem();
    if (res) {
      setShowItem(res);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  const handleDelete = async (values: ItemsInterface) => {
    let res = await DeleteItemByID(values.ID);
    if (res) {
      messageApi.open({
        type: "success",
        content: "ลบข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        window.location.reload();
      }, 500);
    } else {
      messageApi.open({
        type: "error",
        content: "ลบข้อมูลไม่สำเร็จ",
      });
    }
  };

  return (
    <div className="itemPage">
      <SidebarCreatorWatData />
      {contextHolder}
      <div>
        <Form onFinish={handleSubmit}>
          <div className="item">
            <div>
              <label>กรอกชื่อสิ่งของ</label>
              <input
                name="Name"
                type="text"
                placeholder="กรอกชื่อสิ่งของ"
                onChange={onChange}
              />
            </div>
            <div>
              <label>กรอกจำนวน</label>
              <input
                name="Amount"
                type="text"
                placeholder="กรอกจำนวน"
                onChange={onChange}
              />
            </div>
            <div className="itemButton">
              <button type="submit">ยืนยัน</button>
            </div>
          </div>
        </Form>
        <div className="itemTable">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {showItem.map((data) => {
                return (
                  <tr key={data.ID}>
                    <td>{data.ID}</td>
                    <td>{data.Name}</td>
                    <td>{data.Amount}</td>
                    <button onClick={() => handleDelete(data)}>ลบ</button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreatorItem;
