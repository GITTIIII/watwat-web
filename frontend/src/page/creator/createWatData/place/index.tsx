import React, { useState, ChangeEvent, FormEvent } from "react";
import "./index.css";
import SidebarCreatorWatData from "../../../../component/sidebar/sidebarCreatorWatData";

const CreatorPlace = () => {
  const [values, setValues] = useState({
    placeName: "",
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
      <div className="place">
        <form onSubmit={handleSubmit}>
          <label>กรอกชื่อสถานที่</label>
          <input
            name="placeName"
            type="text"
            placeholder="กรอกชื่อสถานที่"
            onChange={onChange}
          />
          <button>ยืนยัน</button>
        </form>
      </div>
    </>
  );
};

export default CreatorPlace;
