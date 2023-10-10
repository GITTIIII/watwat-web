import React, { useState, ChangeEvent, FormEvent } from "react";
import "./index.css";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";
const CreatorItem = () => {
  const [values, setValues] = useState({
    itemName: "",
    amount: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <>
      <SidebarCreatorWatData />
      <div className="item">
        <form onSubmit={handleSubmit}>
          <label>กรอกชื่อสิ่งของ</label>
          <input
            name="itemName"
            type="text"
            placeholder="กรอกชื่อสิ่งของ"
            onChange={onChange}
          />
          <label>กรอกจำนวน</label>
          <input
            name="amount"
            type="text"
            placeholder="กรอกจำนวน"
            onChange={onChange}
          />
          <button>ยืนยัน</button>
        </form>
      </div>
    </>
  );
};

export default CreatorItem;
