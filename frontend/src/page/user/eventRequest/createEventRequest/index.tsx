import './createEventRequest.css';
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Form, message, } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; //for icon
import SubmitButton from '../../../../component/submitButton/submitButton';
import { EventRequestsInterface } from "../../../../interfaces/IEventRequest";
import { EventTypesInterface } from '../../../../interfaces/IEventType'; 
import { CreateEvent, GetEventTypes } from "../../../../services/https/event";

function CreateEventRequest() {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [eventTypes, setEventTypes] = useState<EventTypesInterface[]>([]);
  const [input, setInput] = useState({
    EventName: '',
    DateBegin: '',
    TimeOfBegin: '',
    DateEnd: '',
    TimeOfEnd: '',
    OutPlace: '',
    UserTel: '',
    Description: '',
    EventID: null,
    EventTypeID: 1,
    StatusID: 1,
    HostName: '',
    MemberID: 1,
    WatID: 1,
  })
  const handleInput = (e: any) => {
    const { name, value } = e.target;

    if (name === "EventTypeID") {
      setInput({
        ...input,
        [name]: parseInt(value, 10), // Convert the value to an integer
      });
    } else if (name === "EventID") {
      if (value != null) {
        setInput({
          ...input,
          [name]: parseInt(value, 10), // Convert the value to an integer
        });
      } else {
        setInput({
          ...input,
          [name]: null,
        });
      }
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (values: EventRequestsInterface) => {
    values.EventName = input.EventName
    values.DateBegin = input.DateBegin
    values.TimeOfBegin = input.TimeOfBegin
    values.DateEnd = input.DateEnd
    values.TimeOfEnd = input.TimeOfEnd
    values.OutPlace = input.OutPlace
    values.UserTel = input.UserTel
    values.Description = input.Description
    values.EventID = input.EventID
    values.EventTypeID = input.EventTypeID
    values.StatusID = input.StatusID

    values.HostName = input.HostName

    values.MemberID = input.MemberID
    values.WatID = input.WatID

    let res = await CreateEvent(values);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/eventRequest");
      }, 2000);

    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }

  }

  const getEventType = async () => {
    let res = await GetEventTypes();
    if (res) {
      setEventTypes(res);
    }
  };

  useEffect(() => {
    getEventType();
  }, []);
  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        onFinish={handleSubmit}
        autoComplete="off"
        className='warpper' >
        <div className="heandcontantcreate">
          <div className="heandpage title">ขอจัดกิจกรรม</div>
          <div className='heandpage eventRequest'>
            <NavLink to="../eventRequest">กิจกรรมที่แจ้งขอจัด</NavLink>
          </div>
          <div className="formNameEvent">
            <input type="text"
              className="heandpage nameEvent"
              placeholder='กรอกชื่อกิจกรรม'
              name="EventName"
              onChange={handleInput}
              required 
            />

            <select
              id="eventType"
              className='selects'
              name="EventTypeID"
              value={input.EventTypeID} // Set the selected value based on the state
              onChange={handleInput}
              required 
            >
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
            <div className='plusHost'>
              <label htmlFor="">รายนาม-เจ้าภาพ</label>
              <FontAwesomeIcon icon={faPlus}  className='iconplusHosts' />
            </div>
            <input
              type="text"
              id="้host1"
              className="้host h1"
              placeholder='1.'
              name="HostName"
              onChange={handleInput}
              required 
            />
            {/* <input 
                type="text" 
                id="้host2" 
                className="้host h2" 
                placeholder='2.'
                name="Email"
                onChange={handleInput}
                 // required 
              />
                
              <input 
                type="text" 
                id="้host3" 
                className="้host h3" 
                placeholder='3.'
                name="Email"
                onChange={handleInput}
                // required 
              /> */}
          </div>
          <div className="data dateTimeEvent">
            <label htmlFor="">ระยะเวลา<span className='more dateTime'> (วัน-เวลา หากมีมหรสพให้รวมไปด้วย)</span></label>
            <div className="dateTimeData">
              <label htmlFor="">วันเริ่มกิจกรรม</label>
              <label htmlFor="">ถึง</label>
              <input
                type="date"
                id=""
                name="DateBegin"
                onChange={handleInput}
              // required
              />
              <input
                type="date"
                id=""
                name="DateEnd"
                onChange={handleInput}
              // required
              />
              <label htmlFor="">เวลาเริ่มกิจกรรม</label>
              <label htmlFor="">ถึง</label>
              <input
                type="time"
                id=""
                name="TimeOfBegin"
                onChange={handleInput}
              // required 
              />
              <input
                type="time"
                id=""
                name="TimeOfEnd"
                onChange={handleInput}
              // required 
              />
            </div>
          </div>
          <div className="data tel">
            <label htmlFor="" className='itemtal'>เบอร์โทรศัพท์</label>
            <input type="text" id="" placeholder='กรอกเบอร์โทร Ex.04444444444' className='item'
              name="UserTel"
              onChange={handleInput}
            // required
            />
          </div>
          <div className="placeOut">
            <label htmlFor="">สถานที่จัดงาน<span className='more'>(นอกวัด)</span></label>
            <input type="text" maxLength={150} id="" placeholder='กรอกที่ตั้ง เช่น 111/3 บ.สุรนารี ต.สุรนารี อ.เมืองนครราชสีมา จ.นครราชสีมา'
              name="OutPlace"
              
              onChange={handleInput}
            />
          </div>
          <div className="data entertrainment">
            <label htmlFor="">กิจกรรมนี้เป็นมหรสพใช่หรือไม่<span className='more'> (หากใช่กรุนากรอกเลขที่กิจกกรมที่เป็นกิจกรรมหลัก)</span></label>
            <div className='entertrainments'>
              <input type="radio" id="switch_left" name="switchToggle" value="" /> <label htmlFor="switch_left">ใช่</label>
              <input type="radio" id="switch_right" name="switchToggle" value="" /> <label htmlFor="switch_right">ไม่ใช่</label>
            </div>
            <input type="text" id="" className='noEntertrainment' placeholder='เลขที่คำขอกิจกรรม'
              name="EventID"
              onChange={handleInput}
            />
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
          <div className='submitEventRequest'>
            <SubmitButton />
          </div>
        </div>
      </Form>
    </>
  );
}

export default CreateEventRequest;
