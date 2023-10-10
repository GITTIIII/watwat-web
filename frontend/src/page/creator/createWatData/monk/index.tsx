import React, { useState, ChangeEvent, FormEvent } from "react";
import "./index.css";
const CreatorMonk = () => {
  const [values, setValues] = useState({
    monkName: "",
    birthday: "",
    rank: "",
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
      <div className="monk">
        <form onSubmit={handleSubmit}>
          <label>กรอกชื่อพระสงฆ์</label>
          <input
            name="monkName"
            type="text"
            placeholder="กรอกชื่อพระสงฆ์"
            onChange={onChange}
          />
          <label>วัน/เดือน/ปี เกิด</label>
          <input
            name="birthday"
            type="date"
            placeholder="วัน/เดือน/ปี เกิด"
            onChange={onChange}
          />
          <label>กรอกสมณศักดิ์</label>
          <input
            name="rank"
            type="text"
            placeholder="กรอกสมณศักดิ์"
            onChange={onChange}
          />
          <button>ยืนยัน</button>
        </form>
      </div>
    </>
  );
};

export default CreatorMonk;
