import "../../../user/eventRequest/createEventRequest/createEventRequest.css";
import React, { useState, useEffect } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { EventRequestsInterface } from "../../../../interfaces/IEventRequest";
import { EventTypesInterface } from "../../../../interfaces/IEventType";
import { CreateEvent, GetEventTypes } from "../../../../services/https/event";
import Cookies from "js-cookie";

function CreateEvents() {
  let navigate = useNavigate();
  const [entertrainClick, setEntertrainClick] = useState(true);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    console.log("selectedValue");
    console.log(selectedValue);
    if (selectedValue === "yes") {
      setEntertrainClick(true);
    } else if (selectedValue === "no") {
      setEntertrainClick(false);
    }
    console.log(entertrainClick);
  };

  const watID = Cookies.get("watIDforCreator");
  let getwatID = 0;
  if (watID !== undefined) {
    getwatID = parseInt(watID, 10);
  }
  const memberID = Cookies.get("memberID");
  let getMemberID = 0;
  if (memberID !== undefined) {
    getMemberID = parseInt(memberID, 10);
  }

  const [messageApi, contextHolder] = message.useMessage();
  const [eventTypes, setEventTypes] = useState<EventTypesInterface[]>([]);
  const [input, setInput] = useState({
    EventName: "",
    DateBegin: "",
    TimeOfBegin: "",
    DateEnd: "",
    TimeOfEnd: "",
    OutPlace: "",
    UserTel: "",
    Description: "",
    EventID: null,
    EventTypeID: 1,
    StatusID: 2,
    MemberID: getMemberID,
    WatID: getwatID,
    Hosts: [""],
  });

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    if (name === "EventTypeID" || name === "EventID") {
      setInput({
        ...input,
        [name]: parseInt(value, 10),
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (values: EventRequestsInterface) => {
    values.EventName = input.EventName;
    values.DateBegin = input.DateBegin;
    values.TimeOfBegin = input.TimeOfBegin;
    values.DateEnd = input.DateEnd;
    values.TimeOfEnd = input.TimeOfEnd;
    values.OutPlace = input.OutPlace;
    values.UserTel = input.UserTel;
    values.Description = input.Description;
    values.EventID = input.EventID;
    values.EventTypeID = input.EventTypeID;
    values.StatusID = input.StatusID;

    values.Hosts = input.Hosts;
    console.log(input.MemberID);
    values.MemberID = input.MemberID;
    values.WatID = input.WatID;

    console.log(input.Hosts);
    console.log(values.Hosts);
    console.log("hoss");
    console.log("getMemberID");
    console.log(getMemberID);

    let res = await CreateEvent(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/addEvent");
      }, 500);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  const getEventType = async () => {
    let res = await GetEventTypes();
    if (res) {
      setEventTypes(res);
    }
  };

  useEffect(() => {
    getEventType();
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const handlePlusIconClick = () => {
    setInputVisible(true);
  };
  const handleSaveInput = () => {
    if (isInputVisible) {
      setInput({
        ...input,
        Hosts: [...input.Hosts, inputValue],
      });
      setInputVisible(false);
      setInputValue("");
    }
  };
  const handleHostChange = async (value: string, index: number) => {
    const updatedHosts = [...input.Hosts];
    updatedHosts[index] = value;
    setInput({ ...input, Hosts: updatedHosts });
  };
  console.log(input.Hosts);
  console.log(watID);
  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        onFinish={handleSubmit}
        autoComplete="off"
        className="warpper"
      >
        <div className="heandcontantcreate">
          <div className="heandpage title">ขอจัดกิจกรรม</div>
          <div className="heandpage eventRequest">
            <NavLink to="../eventRequest">กิจกรรมที่แจ้งขอจัด</NavLink>
          </div>
          <div className="formNameEvent">
            <input
              type="text"
              className="heandpage nameEvent"
              placeholder="กรอกชื่อกิจกรรม"
              name="EventName"
              onChange={handleInput}
              required
            />
            <select
              id="eventType"
              className="selects"
              name="EventTypeID"
              value={input.EventTypeID}
              onChange={handleInput}
              required
            >
              <option value="" disabled selected>
                เลือกประเภท
              </option>
              {eventTypes.map((item) => (
                <option value={item.ID} key={item.EventTypeName}>
                  {item.EventTypeName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="dataEvent">
          <div className="data hosts">
            <div className="plusHost">
              <label htmlFor="">รายนาม-เจ้าภาพ</label>
              <FontAwesomeIcon
                icon={faPlus}
                className="iconplusHosts"
                onClick={handlePlusIconClick}
              />
            </div>
            <div className="hostinputLayout">
              {input.Hosts.map((field, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={field}
                    onChange={(e) => handleHostChange(e.target.value, index)}
                    className="hostinput"
                    required
                  />
                </div>
                
              ))}
              {isInputVisible ? (
                <div>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={ handleSaveInput}
                    id="host1"
                    className="hostinput"
                    name="HostName"
                    placeholder="ดับเบิล Click เพื่อกรอกข้อมูล"
                    required
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            
          </div>
          <div className="data dateTimeEvent">
            <label htmlFor="">
              ระยะเวลา
              <span className="more dateTime">
                (วัน-เวลา หากมีมหรสพให้รวมไปด้วย)
              </span>
            </label>
            <div className="dateTimeData">
              <label htmlFor="">วันเริ่มกิจกรรม</label>
              <label htmlFor="">ถึง</label>
              <input
                type="date"
                id=""
                name="DateBegin"
                onChange={handleInput}
                required
              />
              <input
                type="date"
                id=""
                name="DateEnd"
                onChange={handleInput}
                required
              />
              <label htmlFor="">เวลาเริ่มกิจกรรม</label>
              <label htmlFor="">ถึง</label>
              <input
                type="time"
                id=""
                name="TimeOfBegin"
                onChange={handleInput}
                required
              />
              <input
                type="time"
                id=""
                name="TimeOfEnd"
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <div className="data tel">
            <label htmlFor="" className="itemtal">
              เบอร์โทรศัพท์
            </label>
            <input
              type="text"
              id=""
              placeholder="กรอกเบอร์โทร Ex.04444444444"
              className="item"
              name="UserTel"
              onChange={handleInput}
              required
            />
          </div>
          <div className="placeOut">
            <label htmlFor="">
              สถานที่จัดงาน<span className="more">(นอกวัด)</span>
            </label>
            <input
              type="text"
              maxLength={150}
              id=""
              placeholder="กรอกที่ตั้ง เช่น 111/3 บ.สุรนารี ต.สุรนารี อ.เมืองนครราชสีมา จ.นครราชสีมา"
              name="OutPlace"
              onChange={handleInput}
            />
          </div>
          <div className="data entertrainment">
            <label htmlFor="">
              กิจกรรมนี้เป็นมหรสพใช่หรือไม่
              <span className="more">
                (หากใช่กรุนากรอกเลขที่กิจกกรมที่เป็นกิจกรรมหลัก)
              </span>
            </label>
            <div className="entertrainments">
              <input
                type="radio"
                id="switch_left"
                name="switchToggle"
                value="yes"
                checked={entertrainClick}
                onChange={handleRadioChange}
              />{" "}
              <label htmlFor="switch_left">ใช่</label>
              <input
                type="radio"
                id="switch_right"
                name="switchToggle"
                value="no"
                onChange={handleRadioChange}
              />{" "}
              <label htmlFor="switch_right">ไม่ใช่</label>
            </div>  
            {entertrainClick && (
                <input
                  type="number"
                  id=""
                  className="noEntertrainment"
                  placeholder="เลขที่คำขอกิจกรรม"
                  name="EventID"
                  onChange={handleInput}
                  required
                />
              )}
          </div>
          <div className="data description">
            <label htmlFor="">คำอธิบายกิจกรรม</label>
            <textarea
              maxLength={700}
              id="description"
              name="Description"
              onChange={handleInput}
            />
          </div>
          <div className="submitEventRequest">
            <input type="submit" value="ยืนยัน" id='submitEventRequest'/>
          </div>
        </div>
      </Form>
    </>
  );
}

export default CreateEvents;
