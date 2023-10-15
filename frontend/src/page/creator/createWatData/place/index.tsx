import React, { useState, useEffect } from "react";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
import { Form, message } from "antd";
import { PlacesInterface } from "../../../../interfaces/IPlace";
import {
  CreatePlace,
  GetPlace,
  DeletePlaceByID,
} from "../../../../services/https/place";
import "./index.css";

const CreatorPlace = () => {
  const [value, setValue] = useState({
    Name: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [showPlace, setShowPlace] = useState<PlacesInterface[]>([]);

  const onChange = (e: any) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (values: PlacesInterface) => {
    values.Name = value.Name;
    values.WatID = 1;
    values.StatusID = 16;

    let res = await CreatePlace(values);
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

  const getPlace = async () => {
    let res = await GetPlace();
    if (res) {
      setShowPlace(res);
    }
  };

  useEffect(() => {
    getPlace();
  }, []);

  const handleDelete = async (values: PlacesInterface) => {
    let res = await DeletePlaceByID(values.ID);
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
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {showPlace.map((data) => {
                return (
                  <tr key={data.ID}>
                    <td>{data.ID}</td>
                    <td>{data.Name}</td>
                    <button onClick={() => handleDelete(data)}>ลบ</button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CreatorPlace;
