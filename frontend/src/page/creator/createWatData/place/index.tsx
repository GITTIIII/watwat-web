import React, { useState, useEffect } from "react";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
import { Form, message } from "antd";
import { PlacesInterface } from "../../../../interfaces/IPlace";
import {
  CreatePlace,
  GetPlace,
  DeletePlaceByID,
} from "../../../../services/https/place";
import Cookies from "js-cookie";
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
    values.WatID = Number(Cookies.get("memberID"));
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
    <div className="placePage">
      <SidebarCreatorWatData />
      {contextHolder}
      <div>
        <Form onFinish={handleSubmit}>
          <div className="place">
            <div>
              <label>กรอกชื่อสถานที่</label>
              <input
                name="Name"
                type="text"
                placeholder="กรอกชื่อสถานที่"
                onChange={onChange}
              />
            </div>
            <div className="placeButton">
              <button type="submit">ยืนยัน</button>
            </div>
          </div>
        </Form>
        <div className="placeTable">
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
                    <td>
                      <button onClick={() => handleDelete(data)}>ลบ</button>
                    </td>
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

export default CreatorPlace;
