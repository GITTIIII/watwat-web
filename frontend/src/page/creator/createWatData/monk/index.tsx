import React, { useState, useEffect } from "react";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
import { Form, message } from "antd";
import { MonksInterface } from "../../../../interfaces/IMonk";
import {
  CreateMonk,
  GetMonk,
  DeleteMonkByID,
} from "../../../../services/https/monk";
import "./index.css";

const CreatorMonk = () => {
  const [value, setValue] = useState({
    Name: "",
    Birthday: "",
    Rank: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [showMonk, setShowMonk] = useState<MonksInterface[]>([]);

  const onChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

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

  const getMonk = async () => {
    let res = await GetMonk();
    if (res) {
      setShowMonk(res);
    }
  };

  useEffect(() => {
    getMonk();
  }, []);

  const handleDelete = async (values: MonksInterface) => {
    let res = await DeleteMonkByID(values.ID);
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
    <div className="monkPage">
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
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Birthday</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {showMonk.map((data) => {
                return (
                  <tr key={data.ID}>
                    <td>{data.ID}</td>
                    <td>{data.Name}</td>
                    <td>{data.Birthday}</td>
                    <td>{data.Rank}</td>
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

export default CreatorMonk;
