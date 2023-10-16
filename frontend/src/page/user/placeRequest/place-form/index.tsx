import "./place-form.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import { useEffect, useState } from "react";
import { PlaceUsesInterface } from "../../../../interfaces/IPlaceUse";
import { CreatePlaceUse } from "../../../../services/https/placeUse";
import { PlaceUsePlacesInterface } from "../../../../interfaces/IPlaceUsePlace";
import { CreatePlaceUsePlace } from "../../../../services/https/placeUsePlace";
import { PlacesInterface } from "../../../../interfaces/IPlace";
import { EventRequestsInterface } from "../../../../interfaces/IEventRequest";
import { GetFreePlace } from "../../../../services/https/place";
import { GetEvents } from "../../../../services/https/event";
import { GetRecentPlaceUse } from "../../../../services/https/placeUse";

const Placeform = () => {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [place, setPlace] = useState<PlacesInterface[]>([])
  const [event, setEvent] = useState<EventRequestsInterface[]>([])
  const [placeUseID, setPlaceUseID] = useState()
  const [input, setInput] = useState({
    UserRequestName: "",
    DateBegin: "",
    TimeOfBegin: "",
    DateEnd: "",
    TimeOfEnd: "",
    UserTel: "",
    Description: "",
    Place: 0,
    Event: "",
  });

  async function getFreePlace() {
    setPlace(await GetFreePlace());
  }

  async function getEvent() {
    setEvent(await GetEvents());
  }

  async function getPlaceUse() {
    const placeUse = await GetRecentPlaceUse();
    setPlaceUseID(placeUse.ID)
  }

  useEffect(() => { 
    getFreePlace()
    getEvent()
  },[])

  const handleInput = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  async function createPlaceUsePlace(value: PlaceUsePlacesInterface){
      value.PlaceID = input.Place
      value.PlaceUseID = placeUseID
      await CreatePlaceUsePlace(value)
      
  }
 

  const handleSubmit = async (IPlaceuse: PlaceUsesInterface) => {
    IPlaceuse.UserRequestName = input.UserRequestName;
    IPlaceuse.DateBegin = input.DateBegin;
    IPlaceuse.TimeOfBegin = input.TimeOfBegin;
    IPlaceuse.DateEnd = input.DateEnd;
    IPlaceuse.TimeOfEnd = input.TimeOfEnd;
    IPlaceuse.UserTel = input.UserTel;
    IPlaceuse.Description = input.Description;
    IPlaceuse.EventID = parseInt(input.Event)
    IPlaceuse.StatusID = 1

    let res = await CreatePlaceUse(IPlaceuse);
    if (res.status) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      getPlaceUse()
      //createPlaceUsePlace(PlaceUsePlacesInterface)
      setTimeout(function () {
        navigate("/placeRequest");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  return (
    <>
        <div className="place-form-box">
          {contextHolder}
          <div className="side-button">
            <Link to="/placeRequest">
              <button>ย้อนกลับ</button>
            </Link>
          </div>
          <div className="place-form">

            <Form onFinish={handleSubmit}>
              <div className="place-top-form">

                <div className="name-input">
                  <label>ชื่อผู้ขอใช้</label>
                  <input 
                  type="text" 
                  name="UserRequestName"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="phone-input">
                  <label>เบอร์โทร</label>
                  <input 
                  type="text" 
                  name="UserTel"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="start-date-input">
                  <label>วันเริ่มต้น</label>
                  <input 
                  type="date" 
                  name="DateBegin"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="end-date-input">
                  <label>วันสิ้นสุด</label>
                  <input type="date" 
                  name="DateEnd"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="start-date-input">
                  <label>เวลาเริ่มต้น</label>
                  <input type="time" 
                  name="TimeOfBegin"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="end-date-input">
                  <label>เวลาสิ้นสุด</label>
                  <input type="time"
                  name="TimeOfEnd"
                  onChange={handleInput}
                  required
                  />
                </div>

                <div className="place-input">
                  <label>สถานที่</label>
                  <select name="Place" onChange={handleInput} required>
                    <option value="none" hidden>เลือกสถานที่</option>
                    {place.map((item, index) => (
                      <option key={index} value={item.ID}>{item.Name}</option>
                    ))}
                  </select>
                </div>

                <div className="event-input">
                  <label>ต้องการจัดงานอะไร</label>
                  <select name="Event" onChange={handleInput} required>
                    <option value="none" hidden>เลือกกิจกรรม</option>
                    {event.map((item, index) => (
                      <option key={index} value={item.ID}>{item.EventName}</option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="place-buttom-form">
                <div className="comment">
                  <label>หมายเหตุ:</label>
                  <textarea 
                  name="Description" 
                  onChange={handleInput} 
                  />
                </div>
              </div>

              <div className="place-form-button">
                <button type="submit" className="submit_button">ส่งการร้องขอ</button>
              </div>
            </Form>
          </div>
        </div>
        
    
    </>
  );
};

export default Placeform;
